from __future__ import annotations

import argparse
from pathlib import Path

from portfolio_generator.builder import generate_portfolio


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate static portfolio pages from a JSON manifest.",
    )
    parser.add_argument(
        "manifest",
        nargs="?",
        default="example_projects.json",
        help="Path to the project manifest JSON file.",
    )
    parser.add_argument(
        "--output",
        default="dist",
        help="Directory where static HTML pages should be written.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    manifest_path = Path(args.manifest).resolve()
    output_dir = Path(args.output).resolve()
    generate_portfolio(manifest_path, output_dir)
    print(f"Portfolio generated in {output_dir}")


if __name__ == "__main__":
    main()
