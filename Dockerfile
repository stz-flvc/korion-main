FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ARG VITE_SITE_URL=https://www.korion.network
ENV VITE_SITE_URL=${VITE_SITE_URL}
ENV SITE_URL=${VITE_SITE_URL}
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.27-alpine

COPY deploy/nginx/app.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080
