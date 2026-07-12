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

import ReverseProxy from '/snippets/reverse-proxy.mdx';

# Docker

This guide expects some previous docker knowledge and an already working environment.

## docker compose {/* #docker-compose */}

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

### Environment variables {/* #environment-variables */}

We support the following environment variables to override the config file:

```yaml title="docker-compose.yml"
services:
  autobrr:
    environment:
      - AUTOBRR__HOST=string
      - AUTOBRR__PORT=string
      - AUTOBRR__BASE_URL=string
      - AUTOBRR__BASE_URL_MODE_LEGACY=bool
      - AUTOBRR__LOG_LEVEL=string
      - AUTOBRR__LOG_PATH=string
      - AUTOBRR__LOG_MAX_SIZE=string/int without MB
      - AUTOBRR__LOG_MAX_BACKUPS=string/int
      - AUTOBRR__SESSION_SECRET=string # legacy, unused since v1.66.0 (sessions are stored in the database)
      - AUTOBRR__CUSTOM_DEFINITIONS=string
      - AUTOBRR__CHECK_FOR_UPDATES=bool
      - AUTOBRR__DATABASE_TYPE=sqlite/postgres
      - AUTOBRR__DATABASE_DSN=string # alternative to the individual postgres* variables
      - AUTOBRR__DATABASE_MAX_BACKUPS=int # positive values only, 0 is ignored
      - AUTOBRR__POSTGRES_HOST=string
      - AUTOBRR__POSTGRES_PORT=string
      - AUTOBRR__POSTGRES_SOCKET=string # connect via unix socket, replaces host/port
      - AUTOBRR__POSTGRES_DATABASE=string
      - AUTOBRR__POSTGRES_USER=string
      - AUTOBRR__POSTGRES_PASS=string
      - AUTOBRR__POSTGRES_SSLMODE=string
      - AUTOBRR__POSTGRES_EXTRA_PARAMS=string
      - AUTOBRR__CORS_ALLOWED_ORIGINS=string
      - AUTOBRR__PROFILING_ENABLED=bool
      - AUTOBRR__PROFILING_HOST=string
      - AUTOBRR__PROFILING_PORT=int
      - AUTOBRR__OIDC_ENABLED=bool
      - AUTOBRR__OIDC_ISSUER=string
      - AUTOBRR__OIDC_CLIENT_ID=string
      - AUTOBRR__OIDC_CLIENT_SECRET=string
      - AUTOBRR__OIDC_REDIRECT_URL=string
      - AUTOBRR__OIDC_DISABLE_BUILT_IN_LOGIN=bool
      - AUTOBRR__METRICS_ENABLED=bool
      - AUTOBRR__METRICS_HOST=string
      - AUTOBRR__METRICS_PORT=int
      - AUTOBRR__METRICS_BASIC_AUTH_USERS=string
```

:::tip[Docker secrets]
Every variable also accepts a `_FILE` variant whose value is read from the referenced file, e.g. `AUTOBRR__POSTGRES_PASS_FILE=/run/secrets/pg_pass`. This is meant for Docker/Podman secrets. The `_FILE` variant takes precedence over the plain variable, and the file content is trimmed of surrounding whitespace.
:::

:::info
`AUTOBRR__POSTGRES_DB` and `AUTOBRR__POSTGRES_PASSWORD` are accepted as aliases for `AUTOBRR__POSTGRES_DATABASE` and `AUTOBRR__POSTGRES_PASS`. They match the official postgres image variable names, which is convenient when sharing an env file with the postgres container. The aliases take precedence when both are set.
:::

### Manually configure autobrr (optional) {/* #manually-configure-autobrr */}

You can either let autobrr create the config itself at startup, or create one manually. For more information, please visit [configuring autobrr](../configuration/autobrr.md) which covers creating a user manually, configuring the default port, setting the desired log level, etc.

### Start the container {/* #start-the-container */}

```shell
docker compose up -d
```

## Listen address {/* #listen-address */}

:::info

By default autobrr listens on `127.0.0.1` out of security considerations. Even though autobrr has built-in Docker detection and automagically adjusts the listen address, it is recommended to manually set the listen address (in `config.toml`) to `0.0.0.0` in case you run into problems with your setup.

:::

## Reverse proxy (recommended) {/* #reverse-proxy-recommended */}

<ReverseProxy/>

## Finishing up {/* #finishing-up */}

Now it's up and running, and you should be able to visit it at `autobrr.domain.ltd` or `domain.ltd:7474` and login. Check out the next pages for further setup.
