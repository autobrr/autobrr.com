---
title: Omegabrr
description: Omegabrr transforms items monitored by arrs or lists into autobrr filters. Useful for automating your filters for monitored media or racing criteria.
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

Omegabrr transforms items monitored by [arrs](#arr) or [lists](#lists) into autobrr filters. Useful for automating your filters for monitored media or racing criteria.

## Installation

### Download

import { AiFillGithub } from 'react-icons/ai';

Download the [latest release <AiFillGithub />](https://github.com/autobrr/omegabrr/releases/latest), or download the [source code <AiFillGithub />](https://github.com/autobrr/omegabrr) and build it yourself using `make build`.

```shell
wget $(curl -s https://api.github.com/repos/autobrr/omegabrr/releases/latest | grep download | grep linux_amd64 | cut -d\" -f4)
```

### Extract

```shell
sudo tar -C /usr/local/bin -xzf omegabrr*.tar.gz
```

## Docker compose {#docker-compose}

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

## Configuration

### Arr

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

#### Optionally use Match Releases field in your autobrr filter {#arr-match-releases}

By setting `matchRelease: true` in your config, it will use the Match releases field in your autobrr filter instead of fields like Movies / Shows and Albums.

Readarr will only use the Match releases field for now, so setting matchRelease: false for Readarr will be ignored.

#### Exclude alternative titles from Sonarr {#arr-exclude-alternate-titles}

You can drop alternate show titles from being added by setting `excludeAlternateTitles: true` for Sonarr in your config.

#### Tags {#arr-tags}

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

### Lists configuration {#lists}

Formerly known as regbrr and maintained by community members is now integrated into omegabrr.

#### Supported list types {#lists-supported-types}

#### `trakt` - Trakt.tv lists {#lists-trakt}

:::info
Please check the [Trakt info section](#trakt-info) if you plan to use offical trakt.tv endpoints.  

This does not apply to lists hosted by autobrr.
:::

Trakt lists hosted by autobrr:

```text
https://api.autobrr.com/lists/trakt/popular-tv
https://api.autobrr.com/lists/trakt/anticipated-tv
https://api.autobrr.com/lists/trakt/upcoming-movies
https://api.autobrr.com/lists/trakt/upcoming-bluray
https://api.autobrr.com/lists/stevenlu # needs to be specified as a trakt list
```

```yaml
lists:
  - name: Anticipated TV
    type: trakt
    url: https://api.autobrr.com/lists/trakt/anticipated-tv
    filters:
      - 22 # Change me
```

#### `mdblists` - MDBLists {#lists-mdblists}

Takes any mdblist url with `/json` appended to the end of the URL.

```yaml
lists:
  - name: Latest TV Shows
    type: mdblist
    url: https://mdblist.com/lists/garycrawfordgc/latest-tv-shows/json
    filters:
      - 1 # Change me
```

#### `metacritic` - Music lists curated by Metacritic {#lists-metacritic}

These URLs are supported:

```yaml
https://api.autobrr.com/lists/metacritic/upcoming-albums
https://api.autobrr.com/lists/metacritic/new-albums
```

```yaml
lists:
  - name: New Albums
    type: metacritic
    url: https://api.autobrr.com/lists/metacritic/new-albums
    filters:
      - 9 # Change me
```

#### Steam wishlist {#lists-steam-wishlist}

Takes any Steam wishlist URL like `https://store.steampowered.com/wishlist/id/USERNAME/wishlistdata`

```yaml
lists:
  - name: New Games
    type: steam
    url: https://store.steampowered.com/wishlist/id/USERNAME/wishlistdata
    filters:
      - 1 # Change me
```

#### `plaintext` - Plaintext lists {#lists-plaintext}

Plaintext lists can be anything, therefore you can optionally set `matchRelease: true` or `album: true` to use these fields in your autobrr filter. If not set, it will use the Movies / Shows field.

```yaml
lists:
  - name: Personal list
    type: plaintext
    url: https://gist.githubusercontent.com/autobrr/somegist/raw
    filters:
      - 27 # change me
    album: true # optional
    #matchRelease: true # optional
```

#### Trakt info {#trakt-info}

If you are using the Trakt api directly you need to have an API key which you can set via the headers object along with any other header needed for the request.

```yaml
lists:
  - name: Some custom Trakt endpoint
    type: trakt
    url: https://api.trakt.tv/calendars/all
    headers:
      trakt-api-key: your_key_goes_here
    filters:
      - 22 # Change me
```

### Sample configuration {#configuration-sample}

```yaml title="~/.config/omegabrr/config.yaml"
server:
  host: 0.0.0.0
  port: 7441
  apiToken: GENERATED_TOKEN
schedule: "0 */6 * * *"
clients:
  autobrr:
    host: http://localhost:7474
    apikey: YOUR_API_KEY
  arr:
    - name: Radarr
      type: radarr
      host: https://yourdomain.com/radarr
      apikey: YOUR_API_KEY
      filters:
        - 15 # Change me
      #matchRelease: false / true

    - name: Radarr-4K
      type: radarr
      host: https://yourdomain.com/radarr4k
      apikey: YOUR_API_KEY
      filters:
        - 16 # Change me
      #matchRelease: false / true

    - name: Sonarr
      type: sonarr
      host: https://yourdomain.com/sonarr
      apikey: YOUR_API_KEY
      basicAuth:
        user: username
        pass: password
      filters:
        - 14 # Change me
      #matchRelease: false / true
      #excludeAlternateTitles: false / true

    - name: lidarr
      type: lidarr
      host: https://yourdomain.com/lidarr
      apikey: YOUR_API_KEY
      filters:
        - 13 # Change me
      #matchRelease: false / true

    - name: readarr
      type: readarr
      host: https://yourdomain.com/readarr
      apikey: YOUR_API_KEY
      filters:
        - 12 # Change me

    - name: whisparr
      type: whisparr
      host: https://yourdomain.com/whisparr
      apikey: YOUR_API_KEY
      filters:
        - 69 # Change me
      #matchRelease: false / true

lists:
  - name: Latest TV Shows
    type: mdblist
    url: https://mdblist.com/lists/garycrawfordgc/latest-tv-shows/json
    filters:
      - 1 # Change me

  - name: Anticipated TV
    type: trakt
    url: https://api.autobrr.com/lists/trakt/anticipated-tv
    filters:
      - 22 # Change me

  - name: Upcoming Movies
    type: trakt
    url: https://api.autobrr.com/lists/trakt/upcoming-movies
    filters:
      - 21 # Change me

  - name: Upcoming Bluray
    type: trakt
    url: https://api.autobrr.com/lists/trakt/upcoming-bluray
    filters:
      - 24 # Change me

  - name: Popular TV
    type: trakt
    url: https://api.autobrr.com/lists/trakt/popular-tv
    filters:
      - 25 # Change me
  
  - name: StevenLu
    type: trakt
    url: https://api.autobrr.com/lists/stevenlu
    filters:
      - 23 # Change me

  - name: New Albums
    type: metacritic
    url: https://api.autobrr.com/lists/metacritic/new-albums
    filters:
      - 9 # Change me

  - name: Upcoming Albums
    type: metacritic
    url: https://api.autobrr.com/lists/metacritic/upcoming-albums
    filters:
      - 20 # Change me

  - name: Personal list
    type: plaintext
    url: https://gist.githubusercontent.com/autobrr/somegist/raw
    filters:
      - 27 # change me
    album: true # album or matchRelease can be optionally set to use these fields in your autobrr filter. If not set, it will use the Movies / Shows field.

  - name: Steam Wishlist
    type: steam
    url: https://store.steampowered.com/wishlist/id/USERNAME/wishlistdata
    filters:
      - 20 # Change me
```

## Commands

Available commands.

### `run` {#commands-run}

```shell
omegabrr run --config config.yaml
```

Run as a service and process on cron schedule. Defaults to every 6 hour `0 */6 * * *`.

### `arr` {#commands-arr}

```shell
omegabrr arr --config config.yaml
```

Supports to run with `--dry-run` to only fetch shows and skip filter update.

### `lists` {#commands-lists}

```shell
omegabrr lists --config config.yaml
```

Supports to run with --dry-run to only fetch shows and skip filter update.

### `generate-token` {#commands-generate-token}

Generate an API Token to use when triggering via webhook.

```shell
omegabrr generate-token
```
```shell
docker exec omegabrr omegabrr generate-token
```

Optionally call with `--length <number>` for a custom length.

Copy the output and put it in your config:
```yaml
server:
  host: 0.0.0.0
  port: 7441
  apiToken: MY_NEW_LONG_SECURE_TOKEN
```

## Webhook endpoints

Hit these to trigger an update outside the cron schedule.
Can be set up inside the \*arrs to trigger an update when you add new monitored titles etc.

**arrs only:**

```bash
curl -X POST 'http://127.0.0.1:7441/api/webhook/trigger/arr?apikey=api_key' # arrs only
```

**Lists only:**

```bash
curl -X POST 'http://127.0.0.1:7441/api/webhook/trigger/lists?apikey=api_key' # lists only
```

**Everything:**
```bash
curl -X POST 'http://127.0.0.1:7441/api/webhook/trigger?apikey=api_key' # everything
```

## Service {#service}

When run as a service it exposes an HTTP server as well. Generate an **API Token** (see instructions above) and add to your config.

To refresh the filters you can make a **POST** or **GET** request to `http://localhost:7441/api/webhook/trigger`.

The API Token can be set as either an HTTP header like `X-API-Token`, or be passed in the url as a query param like `?apikey=MY_NEW_LONG_SECURE_TOKEN`.
