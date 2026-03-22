# Deployment Guide

Daralla can be hosted with a mostly free setup, but each module has different constraints.

## Recommended Free Setup

- `website/`: GitHub Pages
- `portfolio/`: optional static archive or secondary showcase export
- `dashboard/`: Vercel Hobby or Cloudflare Pages
- `backend/`: any Node-compatible host, or a serverless rewrite for Cloudflare Workers / Vercel Functions
- MongoDB: MongoDB Atlas free tier

## Why Not Only GitHub Pages

GitHub Pages serves static files only. It is a good fit for the public `website/`, but it does not run:

- Express servers
- MongoDB-backed APIs
- dynamic Node.js processes

## GitHub Pages

This repository includes a workflow that can publish the public website to GitHub Pages:

- workflow: `.github/workflows/portfolio-pages.yml`
- source: `website/`
- output: static Next.js export

To enable it:

1. Push the repo to GitHub.
2. Open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` or run the workflow manually.

The published URL follows this pattern:

`https://<github-username>.github.io/Daralla/`

For this repository, the target URL is:

`https://dishnicns.github.io/Daralla/`

## Dashboard

Recommended host: Vercel Hobby or Cloudflare Pages.

Required environment variables:

```env
VITE_API_BASE_URL=https://your-backend-url
VITE_ADMIN_API_KEY=your-admin-key
```

## Backend

Current backend is Express + MongoDB, so it needs:

- a Node-compatible runtime
- a reachable MongoDB instance

If you want a fully static or serverless stack with near-zero hosting cost, the backend should be adapted from the current long-running Express server into serverless functions.

Required environment variables:

```env
PORT=4000
MONGODB_URI=your-mongodb-uri
ADMIN_API_KEY=your-admin-key
```

## MongoDB

For a free setup, use MongoDB Atlas free tier and replace the local connection string in `.env`.
