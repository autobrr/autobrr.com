---
sidebar_label: Overview
title: Reverse proxy overview
description: Why and how to run autobrr behind a reverse proxy, with configuration guides for Caddy, lighttpd, nginx, SWAG, Traefik and Tailscale Serve.
keywords:
  [
    autobrr,
    reverse,
    proxy,
    caddy,
    lighttpd,
    nginx,
    swag,
    traefik,
    tailscale,
    tls,
    baseurl,
  ]
---

# Reverse proxy

Running autobrr behind a reverse proxy is recommended when you want to reach the web UI from outside the box it runs on. The proxy gives you TLS, a proper domain instead of `ip:port`, and more robust authentication options.

Pick the guide for the proxy you run:

- [Caddy](./caddy.md); the simplest option, with automatic TLS
- [lighttpd](./lighttpd.md)
- [nginx](./nginx.md)
- [SWAG](./swag.md); nginx preconfigured for Docker setups
- [Traefik](./traefik.md); common in Docker and Kubernetes stacks
- [Tailscale Serve](./tailscale-serve.md); private access over your tailnet, no ports exposed

## Good to know

- By default autobrr listens on `127.0.0.1`, which is exactly what you want with a reverse proxy on the same machine. If the proxy runs elsewhere, change `host` in `config.toml` to `0.0.0.0` and restart autobrr.
- Serving autobrr from a subdirectory like `domain.tld/autobrr/`? Set the `baseUrl` option in `config.toml`; the individual guides show this where it applies. On autobrr v1.55.0 and later you can also set `baseUrlModeLegacy = false` to skip URL rewrites in the proxy. See the [configuration guide](../../configuration/autobrr.md) for details.
- Subdomains like `autobrr.domain.tld` need no `baseUrl` at all.
