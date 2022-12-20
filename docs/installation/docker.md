---
id: docker
sidebar_label: Docker
title: Setup autobrr with Docker
description: A guide how to run autobrr on docker
keywords:
  [
    autobrr,
    docker,
    docker-compose,
    installation,
    traefik,
    containers,
    kubernetes,
    k8s,
    k3s,
  ]
pagination_prev: introduction
pagination_next: configuration/indexers
---

# Docker

This guide expects some previous docker knowledge and an already working environment.

## docker-compose

`docker-compose` for autobrr. Modify if running with unRAID or setting up with Portainer.

- Logging is optional
- Host port mapping might need to be changed to not collide with other apps
- Change `BASE_DOCKER_DATA_PATH` to match your setup. Can be simply `./data`
- Set custom network if needed
- Set the `user: 1000:1000` to correct ID of your user.

```yaml title="docker-compose.yml"
version: "3.7"

services:
  autobrr:
    container_name: autobrr
    image: ghcr.io/autobrr/autobrr:latest
    restart: unless-stopped
    #logging:
    #  driver: json-file
    #  options:
    #    max-file: ${DOCKERLOGGING_MAXFILE}
    #    max-size: ${DOCKERLOGGING_MAXSIZE}
    user: 1000:1000
    environment:
      - TZ=${TZ}
    volumes:
      - ${BASE_DOCKER_DATA_PATH}/autobrr/config:/config
    ports:
      - 7474:7474
```

### Manually configure autobrr (Optional)

You can either let autobrr create the config itself at startup, or create one manually. For more information, please visit [configuring autobrr](/configuration/autobrr) which covers creating a user manually, configuring the default port, setting the desired log level, etc.

## Start

1. Start the container `docker-compose up -d`

### Create user manually (deprecated)

Previously you needed to create the user with the cli `autobrrctl` but that initial setup can now be done in the ui on first launch.

2. Exec into the container with `docker exec -it autobrr sh`
3. Run the create-user command: `autobrrctl --config /config create-user <USERNAME>`. Then exit out with `exit`
4. Now you should be able to login with the newly created user.

## Reverse proxies

### Nginx

Basic example with subfolder that should work in most cases.
This is the config used by swizzin setups.

```nginx
location /autobrr/ {
    proxy_pass              http://127.0.0.1:7474;
    proxy_http_version      1.1;
    proxy_set_header        X-Forwarded-Host        $http_host;

    #auth_basic "What's the password?";
    #auth_basic_user_file /etc/htpasswd;

    rewrite ^/autobrr/(.*) /$1 break;
}
```

:::info

The `rewrite` statement in this example is crucial for correctly setting things up when using a reverse proxy with a base path.

:::

### Traefik

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

### Swag

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

## Done

Now it's up and running, and you should be able to visit it at your `domain.ltd:7474` and login. Check out the next pages for further setup.
