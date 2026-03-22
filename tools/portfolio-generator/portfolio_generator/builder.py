from __future__ import annotations

import json
import re
import shutil
from dataclasses import dataclass
from html import escape
from pathlib import Path

from .templates import build_index_page, build_project_page, build_stylesheet


@dataclass(slots=True)
class Project:
    name: str
    description: str
    summary: str
    category: str
    images: list[Path]
    technologies: list[str]
    slug: str


def slugify(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return slug or "project"


def build_summary(description: str, limit: int = 180) -> str:
    normalized = " ".join(description.split())
    if len(normalized) <= limit:
        return normalized

    truncated = normalized[: limit - 3].rstrip()
    if " " in truncated:
        truncated = truncated.rsplit(" ", 1)[0]

    return f"{truncated}..."


def resolve_project_name(item: dict[str, object], index: int) -> str:
    for field_name in ("project_title", "project_name", "title"):
        value = item.get(field_name)
        if isinstance(value, str) and value.strip():
            return value.strip()

    raise ValueError(
        "Project "
        f"#{index} is missing required field: project_title "
        "(accepted aliases: project_name, title)."
    )


def resolve_technologies(item: dict[str, object], index: int) -> list[str]:
    for field_name in ("technologies_used", "technologies"):
        value = item.get(field_name)
        if value is None:
            continue
        if not isinstance(value, list):
            raise ValueError(
                f"Project #{index} field '{field_name}' must be a list."
            )

        technologies = [
            technology.strip()
            for technology in value
            if isinstance(technology, str) and technology.strip()
        ]
        return technologies or ["Technologies not specified"]

    return ["Technologies not specified"]


def resolve_images(
    item: dict[str, object],
    manifest_dir: Path,
    index: int,
) -> list[Path]:
    raw_images = item.get("images")
    if raw_images is not None:
        if not isinstance(raw_images, list):
            raise ValueError(f"Project #{index} field 'images' must be a list.")

        images: list[Path] = []
        for image_path in raw_images:
            if not isinstance(image_path, str) or not image_path.strip():
                raise ValueError(
                    f"Project #{index} field 'images' must contain only string paths."
                )
            images.append((manifest_dir / image_path).resolve())

        return images

    raw_folder = item.get("image_folder")
    if not isinstance(raw_folder, str) or not raw_folder.strip():
        raise ValueError(
            "Project "
            f"#{index} is missing required field: image_folder "
            "(accepted alternative: images)."
        )

    image_dir = (manifest_dir / raw_folder).resolve()
    if not image_dir.exists() or not image_dir.is_dir():
        raise FileNotFoundError(f"Image folder not found: {image_dir}")

    supported_extensions = {".png", ".jpg", ".jpeg", ".webp", ".svg"}
    images = sorted(
        path for path in image_dir.iterdir() if path.suffix.lower() in supported_extensions
    )
    if not images:
        raise ValueError(
            f"Project #{index} image folder does not contain supported image files: {image_dir}"
        )

    return images


def load_manifest(manifest_path: Path) -> tuple[str, list[Project]]:
    raw_manifest = json.loads(manifest_path.read_text(encoding="utf-8"))

    studio_name = raw_manifest.get("studio_name", "Creative Studio")
    projects_data = raw_manifest.get("projects", [])
    manifest_dir = manifest_path.parent
    projects: list[Project] = []

    for index, item in enumerate(projects_data, start=1):
        if not isinstance(item, dict):
            raise ValueError(f"Project #{index} must be an object.")

        try:
            name = resolve_project_name(item, index)
            description = str(item["description"]).strip()
            category = str(item["category"]).strip()
        except KeyError as error:
            raise ValueError(
                f"Project #{index} is missing required field: {error.args[0]}",
            ) from error

        if not description:
            raise ValueError(f"Project #{index} field 'description' must not be empty.")

        if not category:
            raise ValueError(f"Project #{index} field 'category' must not be empty.")

        images = resolve_images(item, manifest_dir, index)
        technologies = resolve_technologies(item, index)
        summary = str(
            item.get("project_summary") or item.get("summary") or build_summary(description)
        ).strip()

        projects.append(
            Project(
                name=name,
                description=description,
                summary=summary,
                category=category,
                images=images,
                technologies=technologies or ["Technologies not specified"],
                slug=slugify(name),
            )
        )

    return studio_name, projects


def copy_project_images(project: Project, output_dir: Path) -> list[str]:
    copied_paths: list[str] = []
    project_asset_dir = output_dir / "assets" / project.slug
    project_asset_dir.mkdir(parents=True, exist_ok=True)

    for image_path in project.images:
        if not image_path.exists():
            raise FileNotFoundError(f"Image not found: {image_path}")

        destination = project_asset_dir / image_path.name
        shutil.copy2(image_path, destination)
        copied_paths.append(f"../../assets/{project.slug}/{destination.name}")

    return copied_paths


def generate_portfolio(manifest_path: Path, output_dir: Path) -> None:
    if not manifest_path.exists():
        raise FileNotFoundError(f"Manifest not found: {manifest_path}")

    studio_name, projects = load_manifest(manifest_path)

    if not projects:
        raise ValueError("Manifest does not contain any projects.")

    if output_dir.exists():
        shutil.rmtree(output_dir)

    (output_dir / "projects").mkdir(parents=True, exist_ok=True)
    (output_dir / "assets").mkdir(parents=True, exist_ok=True)
    (output_dir / "assets" / "styles.css").write_text(
        build_stylesheet(),
        encoding="utf-8",
    )

    portfolio_cards: list[dict[str, str]] = []

    for project in projects:
        copied_images = copy_project_images(project, output_dir)
        project_dir = output_dir / "projects" / project.slug
        project_dir.mkdir(parents=True, exist_ok=True)
        project_html = build_project_page(
            studio_name=escape(studio_name),
            project_name=escape(project.name),
            description=escape(project.description),
            project_summary=escape(project.summary),
            category=escape(project.category),
            images=copied_images,
            technologies=[escape(technology) for technology in project.technologies],
        )
        (project_dir / "index.html").write_text(project_html, encoding="utf-8")

        portfolio_cards.append(
            {
                "name": escape(project.name),
                "category": escape(project.category),
                "description": escape(project.summary),
                "href": f"./projects/{project.slug}/index.html",
            }
        )

    index_html = build_index_page(
        studio_name=escape(studio_name),
        projects=portfolio_cards,
    )
    (output_dir / "index.html").write_text(index_html, encoding="utf-8")
