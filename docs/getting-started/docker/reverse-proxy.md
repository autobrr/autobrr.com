---
title: "Reverse proxy"
sidebar_position: 2
---

# Reverse proxies

## Traefik

Traefik setup to run on subdomain. 

* Needs an `.env` file with `DOMAIN` set, like `DOMAIN=something.local`
* Expects an externally created network called `proxy`
* Expects two `entryPoints`: `http` going to `:80` and `https` going to `:443`
* Expects a `certificateResolver` called `letsencrypt`

Your config may be different so change accordingly.

```yaml title="docker-compose.yml"
version: "3.7"

networks:                                                                                                                                                                                                             proxy:
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

## Swag

A basic `swag` config for running on subdomain.

```conf
server {
    listen 443 ssl;
    listen [::]:443 ssl;

    server_name autobrr.*;

    include /config/nginx/ssl.conf;

    client_max_body_size 0;

    # enable for ldap auth, fill in ldap details in ldap.conf
    #include /config/nginx/ldap.conf;

    # enable for Authelia
    #include /config/nginx/authelia-server.conf;

    location / {
        # enable the next two lines for http auth
        #auth_basic "Restricted";
        #auth_basic_user_file /config/nginx/.htpasswd;

        # enable the next two lines for ldap auth
        #auth_request /auth;
        #error_page 401 =200 /ldaplogin;

        # enable for Authelia
        #include /config/nginx/authelia-location.conf;

        include /config/nginx/proxy.conf;
        include /config/nginx/resolver.conf;
        include /config/nginx/allowdeny.conf;
        set $upstream_app autobrr;
        set $upstream_port 7474;
        set $upstream_proto http;
        proxy_pass $upstream_proto://$upstream_app:$upstream_port;

    }
}
```