# Daralla Workspace

Full digital infrastructure for the Daralla creative technology studio.

## Folder Structure

```text
daralla/
  website/
  backend/
  dashboard/
  tools/
    portfolio-generator/
    blender-daralla-ornaments/
    blender-daralla-ornaments.zip
  portfolio/
  brand/
```

## Modules

- `website` - public Next.js website with services, portfolio, about, and contact
- `backend` - Express + MongoDB API for client requests and internal studio projects
- `dashboard` - internal React + TypeScript + Tailwind kanban board synced with the backend
- `tools/portfolio-generator` - Python static portfolio page generator
- `tools/blender-daralla-ornaments` - Blender addon for procedural ornamental geometry
- `portfolio` - generated static HTML portfolio pages
- `brand` - brand philosophy, logo concept, color palette, typography, and visual language docs

## GitHub Ready

This repository now includes:

- root `.gitignore` for Node, Python, env files, and local logs
- GitHub Actions CI workflow for `website`, `backend`, `dashboard`, and the portfolio generator
- GitHub Pages workflow for publishing the generated `portfolio`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the recommended free hosting setup.

## Installation

### 1. Backend

```bash
cd backend
copy .env.example .env
npm install
```

### 2. Website

```bash
cd website
copy .env.example .env.local
npm install
```

### 3. Dashboard

```bash
cd dashboard
copy .env.example .env
npm install
```

### 4. Python Tools

Python 3.11+ is recommended.

## Run Locally

Start the backend first:

```bash
cd backend
npm run dev
```

Run the public website:

```bash
cd website
npm run dev
```

Run the internal dashboard:

```bash
cd dashboard
npm run dev
```

Generate static portfolio pages:

```bash
cd tools/portfolio-generator
python generate_portfolio.py example_projects.json --output ..\\..\\portfolio
```

## Default Local URLs

- Website: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:4000](http://localhost:4000)
- Dashboard: Vite will print its local port when started

## Recommended Free Hosting

- `portfolio` -> GitHub Pages
- `website` -> Vercel Hobby
- `dashboard` -> Vercel Hobby or Cloudflare Pages
- `backend` -> free Node-compatible host + MongoDB Atlas free tier
