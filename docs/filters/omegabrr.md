---
title: Omegabrr
description: Omegabrr transforms monitored shows, movies, books and music from Radarr, Sonarr, Lidarr and Readarr into autobrr filters.
keywords:
  [
    autobrr,
    filters,
    tv,
    movies,
    books,
    music,
    2160p,
    1080p,
    4k,
    radarr,
    sonarr,
    readarr,
    lidarr,
    omegabrr,
  ]
sidebar_label: Omegabrr
pagination_label: Filters - Omegabrr
---

Omegabrr is the successor to arrbrr. Omegabrr transforms monitored shows, movies, books and music from Radarr, Sonarr, Lidarr, Readarr and Whisparr into autobrr filters.

## Installation

### Download

import { AiFillGithub } from 'react-icons/ai';

Download the [latest release <AiFillGithub />](https://github.com/autobrr/omegabrr/releases/latest), or download the [source code <AiFillGithub />](https://github.com/autobrr/omegabrr) and build it yourself using `make build`.

```shell
wget $(curl -s https://api.github.com/repos/autobrr/omegabrr/releases/latest | grep download | grep linux_x86_64 | cut -d\" -f4)
```

### Extract

```shell
sudo tar -C /usr/local/bin -xzf omegabrr*.tar.gz
```

## Docker compose

1. Set `user: 1000:1000` with your user ID, or remove to run as **root**. You can your user ID with the `id` command.
2. Set the `volume` so it matches your system. To run from the same path as the `docker compose` first create a config dir like `mkdir config`, and place `./config:/config` in the compose file. This will create a default config on the first run.

If you have custom networks then make sure to add those, so it can communicate with autobrr, Sonarr and Radarr.

```yaml title="docker-compose.yml"
version: "3.9"

services:
  omegabrr:
    container_name: omegabrr
    image: ghcr.io/autobrr/omegabrr:latest
    ports:
      - "7441:7441"
    user: 1000:1000
    volumes:
      - "./config:/config"
```

## Config

You can set multiple filters per arr. Find the filter ID by going into the autobrr webui and get the ID from the url like `http://localhost:7474/filters/10` where `10` is the filter ID.

Create a config like `config.yaml` somewhere like `~/.config/omegabrr`.

`mkdir ~/.config/omegabrr && touch ~/.config/omegabrr/config.yaml`

```yaml title="~/.config/omegabrr/config.yaml"
server:
  host: 0.0.0.0
  port: 7441
  apiToken: GENERATED_TOKEN
schedule: "0 */6 * * *"
clients:
  autobrr:
  #  host: http://localhost:7474
  #  apikey: AUTOBRR_API_KEY
  #    basicAuth:
  #    user: username
  #    pass: password
  arr:
  #  - name: radarr
  #    type: radarr
  #    host: http://localhost:7878
  #    apikey: API_KEY
  #    filters:
  #      - 15 # Change me

  #  - name: radarr4k
  #    type: radarr
  #    host: http://localhost:7878
  #    apikey: API_KEY
  #    filters:
  #      - 16 # Change me

  #  - name: sonarr
  #    type: sonarr
  #    host: http://localhost:8989
  #    apikey: API_KEY
  #    filters:
  #      - 14 # Change me
  #    #excludeAlternateTitles: true # defaults to false
	
  #  - name: readarr
  #    type: readarr
  #    host: http://localhost:8787
  #    apikey: API_KEY
  #    filters:
  #      - 18 # Change me
		
  # - name: lidarr
  #   type: lidarr
  #   host: http://localhost:8686
  #   apikey: API_KEY
  #   filters:
  #     - 32 # Change me

  # - name: whisparr
  #   type: whisparr
  #   host: http://localhost:6969
  #   apikey: API_KEY
  #   filters:
  #     - 69 # Change me
  ```

If you're trying to reach Radarr or Sonarr hosted on swizzin from some other location, you need to do it like this with basic auth:

```yaml
arr:
  - name: radarr
    type: radarr
    host: https://domain.com/radarr
    apikey: YOUR_API_KEY
    basicAuth:
      user: username
      pass: password
    filters:
      - 15
```

Same goes for autobrr if it's behind basic auth.

```yaml
autobrr:
  host: http://localhost:7474
  apikey: YOUR_API_KEY
  basicAuth:
    user: username
    pass: password
```

### Optionally use Match Releases field in your autobrr filter

By setting `matchRelease: true` in your config, it will use the Match releases field in your autobrr filter instead of fields like Movies / Shows and Albums.

Readarr will only use the Match releases field for now, so setting matchRelease: false for Readarr will be ignored.

### Exclude alternative titles from Sonarr

You can drop alternate show titles from being added by setting `excludeAlternateTitles: true` for Sonarr in your config.

### Tags

This works for both Sonarr and Radarr.

If you want to match only certain tags you can use the `tagsInclude`.

```yaml
- name: sonarr
  type: sonarr
  host: http://localhost:8989
  apikey: API_KEY
  filters:
    - 14
  tagsInclude:
    - mytag
```

If you want to exclude certain tags, you can use the `tagsExclude`.

```yaml
- name: sonarr
  type: sonarr
  host: http://localhost:8989
  apikey: API_KEY
  filters:
    - 14
  tagsExclude:
    - myothertag
```

## Commands

Available commands.

### `generate-token`

Generate an API Token to use when triggering via webhook. Copy the output and put in your config like

```shell
omegabrr generate-token
```

If you are using docker:

```docker
docker exec omegabrr omegabrr generate-token
```

```yaml
server:
  host: 0.0.0.0
  port: 7441
  apiToken: MY_NEW_LONG_SECURE_TOKEN
```

### `arr`

```shell
omegabrr arr --config config.yaml
```

Supports to run with `--dry-run` to only fetch shows and skip filter update.

### `run`

```shell
omegabrr run --config config.yaml
```

Run as a service and process on cron schedule. Defaults to every 6 hour `0 */6 * * *`.

## Service

When run as a service it exposes an HTTP server as well. Generate an **API Token** (see instructions above) and add to your config.

To refresh the filters you can make a **POST** or **GET** request to `http://localhost:7441/api/webhook/trigger`.

The API Token can be set as either an HTTP header like `X-API-Token`, or be passed in the url as a query param like `?apikey=MY_NEW_LONG_SECURE_TOKEN`.
