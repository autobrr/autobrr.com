---
id: dedi
sidebar_label: Dedicated servers
title: Download Clients
slug: /configuration/download-clients/dedicated
description: A guide on how to set up download clients in autobrr.
keywords:
  [
    autobrr,
    config,
    setup,
    download client,
    client,
    bittorrent,
    torrents,
    qbittorrent,
    deluge,
    rtorrent,
    rutorrent,
    transmission,
    porla,
    sabnzbd,
    nzbget,
    radarr,
    sonarr,
    lidarr,
    readarr,
    whisparr,
  ]
pagination_label: Configuration - Download clients
---

import ArrOverride from '/snippets/override-arr-dl-client.mdx';

# Download Clients

Go to `Settings > Clients` to setup clients.
Clients can be local or remote, as long as ports are open and auth available.

These are the available download clients.

- qBittorrent
- Deluge (v1+ and v2+)
- rTorrent / ruTorrent
- Transmission
- Porla
- Sabnzbd (Usenet)
- NZBGet (Usenet)
- Radarr
- Sonarr
- Lidarr
- Readarr
- Whisparr

All clients have a test function to try out the connection details before saving.

Don't forget to give the client a name!

## Configure Download Clients {/* #configure-download-clients */}

## qBittorrent {/* #qbittorrent */}

You can run autobrr and qBittorrent on the following setups.

- Local server
- Remote server
- Docker / container

### Local {/* #qbittorrent-local */}

For a local client, meaning autobrr and qBittorrent **on the same server** then this should work. Check qBittorrent settings to get the `WEBUI_PORT`.

- Host: `http://127.0.0.1:WEBUI_PORT`
- TLS: disabled
- Username: `<username>`
- Password: `<password>`

### Remote {/* #qbittorrent-remote */}

For a remote client, meaning autobrr and qBittorrent are **not on the same server** then things might be a bit different.

- Host: `https://myserver.brr/qbittorrent`
- TLS: enabled
- Skip TLS verification: disabled (try this first)
- Username: `<username>`
- Password: `<password>`

Some setups like **Swizzin** requires to also use **Basic Auth** when connecting to it from a remote server.

- Basic Auth: enabled
- Username: `<username>`
- Password: `<password>`

### Docker {/* #qbittorrent-docker */}

With **Docker** / containers make sure autobrr and qBittorrent share the same network to be able to use the `container_name` as address.

- Host: `http://qbittorrent:WEBUI_PORT`
- TLS: disabled
- Username: `<username>`
- Password: `<password>`

:::info
qBittorrent can also be authenticated with an optional **API key** instead of username and password, for WebUIs set up with API key authentication. Requires qBittorrent v5.2.x+
:::

## qBittorrent rules {/* #qbittorrent-rules */}

You can define some basic rules which can improve your performance for racing etc.

- **Enabled**: Disabled by default.
- **Max active downloads**: Default 0 (unlimited). Limit the amount of active downloads, to give the maximum amount of bandwidth and disk for the downloads.
- **Ignore slow torrents**: Disabled by default.
- **Ignore condition**: When the slow-torrent check runs.
  - `Max downloads reached`: speed thresholds are only checked once Max active downloads is hit.
  - `Always`: speed thresholds are checked on every push, regardless of the number of active downloads.
- **Download speed threshold**: If the total download speed is below this limit when the check runs, download anyway. Unit in KB/s.
- **Upload speed threshold**: If the total upload speed is below this limit when the check runs, download anyway. Unit in KB/s.

## Deluge {/* #deluge */}

You can run autobrr and Deluge on the following setups.

- Local server
- Remote server
- Docker / container

Deluge is split into two versions:

- `Deluge` which is v1 like `1.3.15`
- `Deluge 2` which is v2 like `2.0.0+`

Select `TYPE` then set these.

### Local {/* #deluge-local */}

For a local client, meaning autobrr and Deluge **on the same server** then this should work. Check Deluge settings to get the `DAEMON_PORT`.

- Host: `127.0.0.1`
- Port: `DAEMON_PORT`
- TLS: disabled
- Username: `<username>`
- Password: `<password>`

### Remote {/* #deluge-remote */}

For a remote client, meaning autobrr and Deluge are **not on the same server** then things might be a bit different.

- Host: `myserver.brr`
- Port: `DAEMON_PORT`
- TLS: disabled
- Username: `<username>`
- Password: `<password>`

:::info
autobrr connects directly to the Deluge daemon (the same connection a thin client uses), not to the Deluge web UI, so there is no Basic Auth option for Deluge. Use the daemon port and daemon credentials from `auth`, not the web UI password.
:::

### Docker {/* #deluge-docker */}

With **Docker** / containers make sure autobrr and Deluge share the same network to be able to use the `container_name` as address.

- Host: `deluge`
- Port: `DAEMON_PORT`
- TLS: disabled
- Username: `<username>`
- Password: `<password>`

## Deluge rules {/* #deluge-rules */}

You can define some basic rules which can improve your performance for racing etc.

- **Enabled**: Disabled by default.
- **Max active downloads**: Default 0 (unlimited). Limit the amount of active downloads, to give the maximum amount of bandwidth and disk for the downloads.

## rTorrent / ruTorrent {/* #rtorrent--rutorrent */}

You can run autobrr and rTorrent / ruTorrent on the following setups.

- Local server
- Remote server
- Docker / container

:::info
When Auth is enabled you can pick the **Auth type**: `Basic Auth` or `Digest Auth`. Basic Auth is correct in most cases, but some providers (like RapidSeedbox) use Digest Auth.
:::

### Local {/* #rtorrent-local */}

For a local client, meaning autobrr and ruTorrent **on the same server** try these.

Here are a couple of common ways for how to access ruTorrent.

- Host: `http://127.0.0.1/rutorrent/plugins/httprpc/action.php`
- Host: `http://localhost/rutorrent/plugins/httprpc/action.php`
- Host: `http://localhost/RPC2`

- TLS: disabled
- Basic Auth: enabled
- Username: `<username>`
- Password: `<password>`

If you are on a shared seedbox you might need your username in the url like:

- Host: `http://localhost/USERNAME/rutorrent/plugins/httprpc/action.php`

#### Swizzin {/* #rtorrent-local-swizzin */}

- Host: `https://127.0.0.1/rutorrent/plugins/httprpc/action.php`
- TLS: enabled
- Skip TLS verification: enabled
- Basic Auth: enabled
- Username: `<username>`
- Password: `<password>`

### Remote {/* #rtorrent-remote */}

For a remote client, meaning autobrr and rTorrent are **not on the same server** then things might be a bit different.

- Host: `http://EXTERNAL_IP/rutorrent/plugins/httprpc/action.php`
- Host: `http://mydomain.com/rutorrent/plugins/httprpc/action.php`
- TLS: disabled
- Basic Auth: enabled
- Username: `<username>`
- Password: `<password>`

### Docker {/* #rtorrent-docker */}

With **Docker** / containers make sure autobrr and rTorrent share the same network to be able to use the `container_name` as address.

- Host: `http://rtorrent/rutorrent/plugins/httprpc/action.php`
- TLS: disabled
- Basic Auth: enabled
- Username: `<username>`
- Password: `<password>`

## Transmission {/* #transmission */}

You can run autobrr and Transmission on the following setups.

- Local server
- Remote server
- Docker / container

### Local {/* #transmission-local */}

For a local client, meaning autobrr and Transmission **on the same server** then this should work. Check Transmission settings to get the `WEBUI_PORT`. Default is 9091.

- Host: `http://127.0.0.1:9091/transmission`
- TLS: disabled
- Username: `<username>`
- Password: `<password>`

### Remote {/* #transmission-remote */}

For a remote client, meaning autobrr and Transmission are **not on the same server** then things might be a bit different.

- Host: `http://myserver.brr/transmission` or `http://IP:PORT/transmission`
- TLS: enabled
- Skip TLS verification: disabled (try this first)
- Username: `<username>`
- Password: `<password>`

HTTPS / TLS

- Host: `https://myserver.brr/transmission`
- TLS: enabled
- Skip TLS verification: disabled (try this first)
- Username: `<username>`
- Password: `<password>`

### Docker {/* #transmission-docker */}

With **Docker** / containers make sure autobrr and Transmission share the same network to be able to use the `container_name` as address.

- Host: `http://transmission:9091` or `http://transmission:9091/transmission`
- TLS: disabled
- Username: `<username>`
- Password: `<password>`

## Transmission rules {/* #transmission-rules */}

You can define some basic rules which can improve your performance for racing etc.

- **Enabled**: Disabled by default.
- **Max active downloads**: Default 0 (unlimited). Limit the amount of active downloads, to give the maximum amount of bandwidth and disk for the downloads.

## Porla {/* #porla */}

Connects to the Porla web API.

- Host: `http(s)://host:port`
- Auth token: `<token>` (required, generate it in Porla)
- TLS: enable for `https://` hosts, with **Skip TLS verification** available for self-signed certificates

Some setups also require **Basic Auth** with a username and password, like other clients behind an HTTP-auth proxy.

## Porla rules {/* #porla-rules */}

You can define some basic rules which can improve your performance for racing etc.

- **Enabled**: Disabled by default.
- **Max active downloads**: Default 0 (unlimited). Limit the amount of active downloads, to give the maximum amount of bandwidth and disk for the downloads.

## SABnzbd {/* #sabnzbd */}

You can run autobrr and SABnzbd on the following setups.

- Local server
- Remote server

### Local {/* #sabnzbd-local */}

For a local client, meaning autobrr and SABnzbd **on the same server** then this should work. Check SABnzbd settings to get the `SABNZBD_PORT`.

- Host: `http://127.0.0.1:SABNZBD_PORT`
- TLS: disabled
- API key

### Remote {/* #sabnzbd-remote */}

For a remote client, meaning autobrr and SABnzbd are **not on the same server** then things might be a bit different.

- Host: `https://myserver.brr/sabnzbd`
- TLS: enabled
- API key

Some setups like **Swizzin** requires to also use **Basic Auth** when connecting to it from a remote server.

- Basic Auth: enabled
- Username: `<username>`
- Password: `<password>`

## NZBGet {/* #nzbget */}

You can run autobrr and NZBGet on the following setups.

- Local server
- Remote server

### Local {/* #nzbget-local */}

For a local client, meaning autobrr and NZBGet **on the same server** then this should work. Check NZBGet settings to get the `NZBGET_PORT`.

- Host: `http://127.0.0.1:NZBGET_PORT`
- Username: `<username>`
- Password: `<password>`

### Remote {/* #nzbget-remote */}

For a remote client, meaning autobrr and NZBGet are **not on the same server** then things might be a bit different.

- Host: `https://myserver.brr/nzbget`
- Username: `<username>`
- Password: `<password>`

:::info
There is no TLS toggle for NZBGet - whether the connection uses https is decided by the scheme of the Host URL (`http://` or `https://`).
:::

## Sonarr {/* #sonarr */}

You can run autobrr and Sonarr apps on the following setups.

- Local server
- Remote server
- Docker / container

<ArrOverride/>

:::info
All arr clients also have **TLS** and **Skip TLS verification** toggles (enable skip-verify for self-signed certificates), and an optional **Basic Auth** setting for instances behind an HTTP-auth proxy.
:::

### Local {/* #sonarr-local */}

For a local client, meaning autobrr and Sonarr **on the same server** then this should work.

- Host: `http://127.0.0.1:8989`
- API Key: `API KEY`

On **Swizzin** or if you are running Sonarr with a baseUrl set that in the url as well like:

- Host: `http://127.0.0.1:8989/sonarr`

### Remote {/* #sonarr-remote */}

For a remote client, meaning autobrr and Sonarr are **not on the same server** then things might be a bit different.

- Host: `http://mydomain.com:8989` or `https://mydomain.com/sonarr`
- API Key: `API KEY`

On **Swizzin** or if you are running Sonarr with a baseUrl set that in the url as well like:

- Host: `https://mydomain.com/sonarr`

### Docker {/* #sonarr-docker */}

With **Docker** / containers make sure autobrr and Sonarr share the same network to be able to use the `container_name` as address.

- Host: `http://sonarr:8989`
- API Key: `API KEY`

## Radarr {/* #radarr */}

You can run autobrr and Radarr apps on the following setups.

- Local server
- Remote server
- Docker / container

<ArrOverride/>

### Local {/* #radarr-local */}

For a local client, meaning autobrr and Radarr **on the same server** then this should work.

- Host: `http://127.0.0.1:7878`
- API Key: `API KEY`

On **Swizzin** or if you are running Radarr with a baseUrl set that in the url as well like:

- Host: `http://127.0.0.1:7878/radarr`

### Remote {/* #radarr-local */}

For a remote client, meaning autobrr and Radarr are **not on the same server** then things might be a bit different.

- Host: `http://mydomain.com:7878` or `https://mydomain.com/radarr`
- API Key: `API KEY`

On **Swizzin** or if you are running Radarr with a baseUrl set that in the url as well like:

- Host: `https://mydomain.com/radarr`

### Docker {/* #radarr-docker */}

With **Docker** / containers make sure autobrr and Radarr share the same network to be able to use the `container_name` as address.

- Host: `http://radarr:7878`
- API Key: `API KEY`

## Lidarr {/* #lidarr */}

See Radarr and Sonarr but port `8686`.

## Readarr {/* #readarr */}

See Radarr and Sonarr but port `8787`.

## Whisparr {/* #whisparr */}

See Radarr and Sonarr but port `6969`.
