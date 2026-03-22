# Daralla Backend

Node.js + Express + MongoDB backend for the Daralla studio infrastructure.

## Features

- Public client request API for the website contact form
- Internal studio project API for the kanban dashboard
- MongoDB persistence for both external requests and internal projects
- Server-rendered admin request dashboard
- Optional admin API key protection

## API

### Client Requests

- `POST /api/client-requests`
- `GET /api/client-requests`
- `GET /api/client-requests/:id`
- `PATCH /api/client-requests/:id/status`

Statuses:

- `new`
- `reviewing`
- `in progress`
- `completed`

### Studio Projects

- `GET /api/studio-projects`
- `POST /api/studio-projects`
- `GET /api/studio-projects/:id`
- `PATCH /api/studio-projects/:id/status`

Statuses:

- `ideas`
- `planning`
- `production`
- `review`
- `finished`

## Admin Dashboard

- `GET /admin/requests`
- `GET /admin/requests/:id`
- `POST /admin/requests/:id/status`

If `ADMIN_API_KEY` is set, send it as `x-admin-key` for admin-only API routes.

## Run Locally

```bash
copy .env.example .env
npm install
npm run dev
```

Default server URL: [http://localhost:4000](http://localhost:4000)
