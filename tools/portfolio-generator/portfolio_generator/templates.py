from __future__ import annotations


def build_stylesheet() -> str:
    return """
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap");

:root {
  color-scheme: dark;
  --bg: #050816;
  --panel: rgba(15, 23, 42, 0.82);
  --panel-strong: #0f172a;
  --border: rgba(148, 163, 184, 0.18);
  --text: #e2e8f0;
  --muted: #94a3b8;
  --accent: #67e8f9;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Manrope", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top, rgba(103, 232, 249, 0.16), transparent 32%),
    radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.12), transparent 22%),
    linear-gradient(180deg, #020617, #050816 45%, #020617);
}

a {
  color: inherit;
  text-decoration: none;
}

.shell {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
  padding: 32px 0 64px;
}

.hero,
.project-hero {
  border: 1px solid var(--border);
  border-radius: 32px;
  background: var(--panel);
  backdrop-filter: blur(16px);
  box-shadow: 0 30px 80px rgba(2, 6, 23, 0.35);
}

.hero {
  display: grid;
  gap: 24px;
  padding: 32px;
}

.project-hero {
  padding: 40px;
}

.eyebrow {
  margin: 0;
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: -0.04em;
  margin: 0;
}

h1 {
  font-size: clamp(2.7rem, 7vw, 5rem);
  line-height: 0.96;
  margin-top: 14px;
}

h2 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
}

p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.lead {
  max-width: 760px;
  margin-top: 18px;
  font-size: 1.05rem;
}

.grid {
  display: grid;
  gap: 20px;
}

.portfolio-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-top: 24px;
}

.card,
.section,
.gallery-item {
  border: 1px solid var(--border);
  border-radius: 28px;
  background: rgba(15, 23, 42, 0.68);
}

.card {
  padding: 24px;
}

.card .category,
.pill {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  border: 1px solid rgba(103, 232, 249, 0.22);
  background: rgba(103, 232, 249, 0.1);
  color: #cffafe;
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.card h3 {
  margin-top: 18px;
  font-size: 1.6rem;
}

.card p {
  margin-top: 14px;
}

.card a {
  display: inline-flex;
  margin-top: 18px;
  color: var(--accent);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section {
  margin-top: 24px;
  padding: 28px;
}

.section h2 {
  margin-bottom: 16px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.gallery-item {
  overflow: hidden;
  padding: 10px;
}

.gallery-item img {
  display: block;
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 22px;
  background: #0f172a;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
}

.back-link {
  display: inline-flex;
  margin-bottom: 18px;
  color: var(--accent);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

@media (max-width: 720px) {
  .shell {
    width: min(100% - 24px, 1200px);
    padding-top: 20px;
  }

  .hero,
  .project-hero,
  .section {
    padding: 22px;
    border-radius: 24px;
  }
}
""".strip()


def build_index_page(studio_name: str, projects: list[dict[str, str]]) -> str:
    cards = "\n".join(
        f"""
        <article class="card">
          <span class="category">{project["category"]}</span>
          <h3>{project["name"]}</h3>
          <p>{project["description"]}</p>
          <a href="{project["href"]}">Open project</a>
        </article>
        """.strip()
        for project in projects
    )

    return f"""
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{studio_name} Portfolio</title>
    <link rel="stylesheet" href="./assets/styles.css" />
  </head>
  <body>
    <main class="shell">
      <section class="hero">
        <div>
          <p class="eyebrow">{studio_name}</p>
          <h1>Auto-generated project portfolio pages.</h1>
          <p class="lead">
            Static HTML portfolio pages generated from a Python manifest for
            fast publishing, studio showcases, and lightweight portfolio sites.
          </p>
        </div>
      </section>

      <section class="grid portfolio-grid">
        {cards}
      </section>
    </main>
  </body>
</html>
""".strip()


def build_project_page(
    *,
    studio_name: str,
    project_name: str,
    description: str,
    project_summary: str,
    category: str,
    images: list[str],
    technologies: list[str],
) -> str:
    gallery = "\n".join(
        f"""
        <figure class="gallery-item">
          <img src="{image}" alt="{project_name} gallery image" loading="lazy" />
        </figure>
        """.strip()
        for image in images
    )

    if not gallery:
        gallery = """
        <div class="gallery-item">
          <div style="padding: 48px 24px; text-align: center; color: #94a3b8;">
            No images supplied for this project.
          </div>
        </div>
        """.strip()

    technologies_markup = "\n".join(
        f'<span class="pill">{technology}</span>' for technology in technologies
    )

    return f"""
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{project_name} | {studio_name}</title>
    <link rel="stylesheet" href="../../assets/styles.css" />
  </head>
  <body>
    <main class="shell">
      <a class="back-link" href="../../index.html">Back to portfolio</a>

      <section class="project-hero">
        <p class="eyebrow">{category}</p>
        <h1>{project_name}</h1>
        <p class="lead">{description}</p>
      </section>

      <section class="section">
        <h2>Project Description</h2>
        <p>{description}</p>
      </section>

      <section class="section">
        <h2>Project Summary</h2>
        <p>{project_summary}</p>
      </section>

      <section class="section">
        <h2>Image Gallery</h2>
        <div class="gallery">
          {gallery}
        </div>
      </section>

      <section class="section">
        <h2>Technologies Used</h2>
        <div class="tech-list">
          {technologies_markup}
        </div>
      </section>
    </main>
  </body>
</html>
""".strip()
