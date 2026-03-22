# Portfolio Generator

Python script that generates static HTML portfolio pages for a creative studio.

## Features

- Reads project data from a JSON manifest
- Generates `index.html` plus one static page per project
- Supports `image_folder` input for automatic gallery discovery
- Includes hero title, description, image gallery, technologies, and project summary
- Copies image assets into the generated portfolio output

## Input Format

The manifest is a JSON file with this shape:

```json
{
  "studio_name": "Daralla",
  "projects": [
    {
      "project_title": "Obsidian Interface",
      "description": "A futuristic studio project page with motion-led storytelling and a premium editorial layout.",
      "category": "Website Design",
      "image_folder": "example_assets/obsidian-interface",
      "technologies_used": ["Python", "HTML", "CSS"],
      "project_summary": "A launch-ready portfolio page for a futuristic studio case study."
    }
  ]
}
```

Required per project:

- `project_title` (accepted aliases: `project_name`, `title`)
- `description`
- `category`
- `image_folder` (accepted alternative: `images`)
- `technologies_used` (accepted alternative: `technologies`)

Optional:

- `project_summary` (accepted alias: `summary`)

If `project_summary` is omitted, the script generates one automatically from the description.

`image_folder` should point to a directory containing supported image files:

- `.png`
- `.jpg`
- `.jpeg`
- `.webp`
- `.svg`

## Run

```bash
python generate_portfolio.py example_projects.json --output dist
```

## Output

```text
dist/
  index.html
  assets/
    styles.css
    <project-slug>/
      <images>
  projects/
    <project-slug>/
      index.html
```
