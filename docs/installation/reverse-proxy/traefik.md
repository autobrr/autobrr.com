---
id: traefik
title: Traefik
description: A collection of examples on recommended reverse-proxy configurations for Traefik.
keywords: [autobrr, installation, traefik, reverse proxy, reverse-proxy]
sidebar_label: Traefik
pagination_prev: introduction
pagination_next: configuration/indexers
---
Traefik setup to run on subdomain.

- Needs an `.env` file with `DOMAIN` set, like `DOMAIN=something.local`
- Expects an externally created network called `proxy`
- Expects two `entryPoints`: `http` going to `:80` and `https` going to `:443`
- Expects a `certificateResolver` called `letsencrypt`

Your config may be different so change accordingly.

```yaml title="docker-compose.yml"
version: "3.7"

networks:
  proxy:
  external: true

services:
  autobrr:
    image: ghcr.io/autobrr/autobrr:latest
    container_name: autobrr
    restart: unless-stopped
    networks:
      - proxy
    volumes:
      - ./data:/config
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=proxy"

      - "traefik.http.middlewares.redirect-https.redirectScheme.scheme=https"
      - "traefik.http.middlewares.redirect-https.redirectScheme.permanent=true"

      - "traefik.http.routers.autobrr-https.rule=Host(`autobrr.$DOMAIN`)"
      - "traefik.http.routers.autobrr-https.entrypoints=https"
      - "traefik.http.routers.autobrr-https.tls=true"
      - "traefik.http.routers.autobrr-https.tls.certresolver=letsencrypt"
      - "traefik.http.routers.autobrr-https.service=autobrr"
      - "traefik.http.routers.autobrr-http.rule=Host(`autobrr.$DOMAIN`)"
      - "traefik.http.routers.autobrr-http.entrypoints=http"
      - "traefik.http.routers.autobrr-http.middlewares=redirect-https"
      - "traefik.http.routers.autobrr-http.service=autobrr"
      - "traefik.http.services.autobrr.loadbalancer.server.port=7474"
```
