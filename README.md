# korion

This project is a Vite + React website for KORION.

## Local run

Run `npm i` to install dependencies.

Run `npm run dev` to start the development server.

## Production build

Set your production domain in `.env.production`:

```bash
VITE_SITE_URL=https://www.korion.network
SITE_URL=https://www.korion.network
```

Then build:

```bash
npm run build
```

`npm run build` also generates `public/sitemap.xml` before the Vite build.

## Docker deploy

Build and run on EC2:

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

The app container serves the static site through Nginx on `127.0.0.1:8080`.

For HTTPS, use the host Nginx reverse proxy example at `deploy/nginx/korion-ssl.conf.example` and attach your Let's Encrypt certificate paths.

## AWS minimum spec

Recommended minimum for this site:

- `t3.small` or `t4g.small`
- 2 vCPU burst / 2 GB RAM class
- 20 GB gp3 EBS

If you only run the prebuilt container and traffic is low, `t3.micro` can work, but it is tight for on-instance Docker image builds, Nginx, and future background jobs.
  
