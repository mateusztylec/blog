# mateusztylec.com: static Next.js export served by nginx.
# Build: docker build --build-arg NEXT_PUBLIC_OPENPANEL_CLIENT_ID=... -t blog .
# The image needs no runtime environment variables.

# ---- build: bun install + next build (output: "export" -> out/) ----
FROM oven/bun:1.3.14-alpine AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
# NEXT_PUBLIC_* is inlined into the browser bundle, so it has to be known at build time.
# Unset = analytics are skipped.
ARG NEXT_PUBLIC_OPENPANEL_CLIENT_ID
# The rest mirrors the old Cloudflare Pages build settings.
ENV NEXT_PUBLIC_OPENPANEL_CLIENT_ID=$NEXT_PUBLIC_OPENPANEL_CLIENT_ID \
    NEXT_TELEMETRY_DISABLED=1 \
    NEXT_DISABLE_TURBOPACK=1
RUN bun run build

# ---- runtime: unprivileged nginx, listens on 8080 ----
FROM nginxinc/nginx-unprivileged:1.31-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 8080
