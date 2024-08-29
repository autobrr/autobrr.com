---
id: docker
sidebar_label: Docker
title: Installation instructions for docker
description: This guide expects some previous docker knowledge and an already working environment.
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

## docker compose

`docker compose` for autobrr. Modify if running with unRAID or setting up with Portainer.

- Logging is optional
- Host port mapping might need to be changed to not collide with other apps
- Change `BASE_DOCKER_DATA_PATH` to match your setup. Can be simply `./data`
- Set custom network if needed
- Set the `user: 1000:1000` to correct ID of your user.

```yaml title="docker-compose.yml"
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

### Environment variables

We support the following environment variables to override the config file:

```yaml title="docker-compose.yml"
services:
  autobrr:
    environment:
      - AUTOBRR__HOST=string
      - AUTOBRR__PORT=string
      - AUTOBRR__BASE_URL=string
      - AUTOBRR__LOG_LEVEL=string
      - AUTOBRR__LOG_PATH=string
      - AUTOBRR__LOG_MAX_SIZE=string/int without MB
      - AUTOBRR__LOG_MAX_BACKUPS=string/int
      - AUTOBRR__SESSION_SECRET=string
      - AUTOBRR__CUSTOM_DEFINITIONS=string
      - AUTOBRR__CHECK_FOR_UPDATES=bool
      - AUTOBRR__DATABASE_TYPE=sqlite/postgres
      - AUTOBRR__POSTGRES_HOST=string
      - AUTOBRR__POSTGRES_PORT=string
      - AUTOBRR__POSTGRES_DATABASE=string
      - AUTOBRR__POSTGRES_USER=string
      - AUTOBRR__POSTGRES_PASS=string
      - AUTOBRR__POSTGRES_SSLMODE=string
      - AUTOBRR__POSTGRES_EXTRA_PARAMS=string
```

### Manually configure autobrr (optional) {#manually-configure-autobrr}

You can either let autobrr create the config itself at startup, or create one manually. For more information, please visit [configuring autobrr](../configuration/autobrr.md) which covers creating a user manually, configuring the default port, setting the desired log level, etc.

### Start the container

```shell
docker compose up -d
```

## Listen address

:::info

By default autobrr listens on `127.0.0.1` out of security considerations. Even though autobrr has built-in Docker detection and automagically adjusts the listen address, it is recommended to manually set the listen address (in `config.toml`) to `0.0.0.0` in case you run into problems with your setup.

:::

## Reverse proxy (recommended)

It's recommended to run it behind a reverse proxy like Caddy (very simple) or nginx (moderately simple) in order to get TLS, more robust authentication mechanisms and other similar benefits.

Please see the **Reverse proxy** section for reverse proxy configuration examples.

## Finishing up

Now it's up and running, and you should be able to visit it at `autobrr.domain.ltd` or `domain.ltd:7474` and login. Check out the next pages for further setup.
