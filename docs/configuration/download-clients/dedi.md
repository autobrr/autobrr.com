---
sidebar_label: Dedicated servers
slug: /configuration/download-clients/dedicated
title: Download Clients
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
    radarr,
    sonarr,
    lidarr,
    whisparr,
  ]
pagination_label: Configuration - Download clients
---

# Download Clients

Go to `Settings > Clients` to setup clients.  
Clients can be local or remote, as long as ports are open and auth available.

These are the available download clients.

- qBittorrent
- Deluge (v1+ and v2+)
- rTorrent / ruTorrent
- Transmission
- Radarr
- Sonarr
- Lidarr
- Readarr
- Whisparr

All clients have a test function to try out the connection details before saving.

Don't forget to give the client a name!

## Configure Download Clients

## qBittorrent

You can run autobrr and qBittorrent on the following setups.

- Local server
- Remote server
- Docker / container

### Local {#qbittorrent-local}

For a local client, meaning autobrr and qBittorrent **on the same server** then this should work. Check qBittorrent settings to get the `WEBUI_PORT`.

- Host: `http://127.0.0.1:WEBUI_PORT`
- TLS: disabled
- Username: `<username>`
- Password: `<password>`

### Remote {#qbittorrent-remote}

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

### Docker {#qbittorrent-docker}

With **Docker** / containers make sure autobrr and qBittorrent share the same network to be able to use the `container_name` as address.

- Host: `http://qbittorrent:WEBUI_PORT`
- TLS: disabled
- Username: `<username>`
- Password: `<password>`

## qBittorrent rules

You can define some basic rules which can improve your performance for racing etc.

- **Enabled**: Disabled by default.
- **Max active downloads**: Default 0 (unlimited). Limit the amount of active downloads, to give the maximum amount of bandwidth and disk for the downloads.
- **Ignore slow torrents**: Disabled by default.
- **Download speed threshold**: If max active downloads is hit, but download speed is below this limit, download anyway. Unit in KB/s.

## Deluge

You can run autobrr and Deluge on the following setups.

- Local server
- Remote server
- Docker / container

Deluge is split into two versions:

- `Deluge` which is v1 like `1.3.15`
- `Deluge 2` which is v2 like `2.0.0+`

Select `TYPE` then set these.

### Local {#deluge-local}

For a local client, meaning autobrr and Deluge **on the same server** then this should work. Check Deluge settings to get the `DAEMON_PORT`.

- Host: `127.0.0.1`
- Port: `DAEMON_PORT`
- TLS: disabled
- Username: `<username>`
- Password: `<password>`

### Remote {#deluge-remote}

For a remote client, meaning autobrr and Deluge are **not on the same server** then things might be a bit different.

- Host: `myserver.brr`
- Port: `DAEMON_PORT`
- TLS: disabled
- Username: `<username>`
- Password: `<password>`

Some setups like **Swizzin** requires to also use **Basic Auth** when connecting to it from a remote server.

- Basic Auth: enabled
- Username: `<username>`
- Password: `<password>`

### Docker {#deluge-docker}

With **Docker** / containers make sure autobrr and Deluge share the same network to be able to use the `container_name` as address.

- Host: `deluge`
- Port: `DAEMON_PORT`
- TLS: disabled
- Username: `<username>`
- Password: `<password>`

## Deluge rules

You can define some basic rules which can improve your performance for racing etc.

- **Enabled**: Disabled by default.
- **Max active downloads**: Default 0 (unlimited). Limit the amount of active downloads, to give the maximum amount of bandwidth and disk for the downloads.

## rTorrent / ruTorrent

You can run autobrr and rTorrent / ruTorrent on the following setups.

- Local server
- Remote server
- Docker / container

### Local {#rtorrent-local}

For a local client, meaning autobrr and ruTorrent **on the same server** try these.

Here are a couple of common ways for how to access ruTorrent. Username and password needs to be set in the url as basic auth.

- Host: `http://user:password@127.0.0.1/rutorrent/plugins/httprpc/action.php`
- Host: `http://user:password@localhost/rutorrent/plugins/httprpc/action.php`
- Host: `http://user:password@localhost/RPC2`

If you are on a shared seedbox you might need your username in the url like:

- Host: `http://user:password@localhost/USERNAME/rutorrent/plugins/httprpc/action.php`

### Remote {#rtorrent-remote}

For a remote client, meaning autobrr and rTorrent are **not on the same server** then things might be a bit different.

- Host: `http://user:password@EXTERNAL_IP/rutorrent/plugins/httprpc/action.php`
- Host: `http://user:password@mydomain.com/rutorrent/plugins/httprpc/action.php`

### Docker {#rtorrent-docker}

With **Docker** / containers make sure autobrr and rTorrent share the same network to be able to use the `container_name` as address.

- Host: `http://user:password@rtorrent/rutorrent/plugins/httprpc/action.php`

## Transmission

You can run autobrr and Transmission on the following setups.

- Local server
- Remote server
- Docker / container

### Local {#transmission-local}

For a local client, meaning autobrr and Transmission **on the same server** then this should work. Check Transmission settings to get the `WEBUI_PORT`. Default is 9091.

- Host: `127.0.0.1`
- Port: 9091
- TLS: disabled
- Username: `<username>`
- Password: `<password>`

### Remote {#transmission-remote}

For a remote client, meaning autobrr and Transmission are **not on the same server** then things might be a bit different.

- Host: `myserver.brr` or `IP`
- Port: 9091
- TLS: enabled
- Skip TLS verification: disabled (try this first)
- Username: `<username>`
- Password: `<password>`

HTTPS / TLS

- Host: `myserver.brr/transmission` or `IP`
- Port: 443
- TLS: enabled
- Skip TLS verification: disabled (try this first)
- Username: `<username>`
- Password: `<password>`

### Docker {#transmission-docker}

With **Docker** / containers make sure autobrr and Transmission share the same network to be able to use the `container_name` as address.

- Host: `transmission`
- Port: 9091
- TLS: disabled
- Username: `<username>`
- Password: `<password>`

## Sonarr

You can run autobrr and Sonarr apps on the following setups.

- Local server
- Remote server
- Docker / container

### Local {#sonarr-local}

For a local client, meaning autobrr and Sonarr **on the same server** then this should work.

- Host: `http://127.0.0.1:8989`
- API Key: `API KEY`

On **Swizzin** or if you are running Sonarr with a baseUrl set that in the url as well like:

- Host: `http://127.0.0.1:8989/sonarr`

### Remote {#sonarr-remote}

For a remote client, meaning autobrr and Sonarr are **not on the same server** then things might be a bit different.

- Host: `http://mydomain.com:8989` or `https://mydomain.com/sonarr`
- API Key: `API KEY`

On **Swizzin** or if you are running Sonarr with a baseUrl set that in the url as well like:

- Host: `https://mydomain.com/sonarr`

### Docker {#sonarr-docker}

With **Docker** / containers make sure autobrr and Sonarr share the same network to be able to use the `container_name` as address.

- Host: `http://sonarr:8989`
- API Key: `API KEY`

## Radarr

You can run autobrr and Radarr apps on the following setups.

- Local server
- Remote server
- Docker / container

### Local {#radarr-local}

For a local client, meaning autobrr and Radarr **on the same server** then this should work.

- Host: `http://127.0.0.1:7878`
- API Key: `API KEY`

On **Swizzin** or if you are running Radarr with a baseUrl set that in the url as well like:

- Host: `http://127.0.0.1:7878/radarr`

### Remote {#radarr-local}

For a remote client, meaning autobrr and Radarr are **not on the same server** then things might be a bit different.

- Host: `http://mydomain.com:7878` or `https://mydomain.com/radarr`
- API Key: `API KEY`

On **Swizzin** or if you are running Radarr with a baseUrl set that in the url as well like:

- Host: `https://mydomain.com/radarr`

### Docker {#radarr-docker}

With **Docker** / containers make sure autobrr and Radarr share the same network to be able to use the `container_name` as address.

- Host: `http://radarr:7878`
- API Key: `API KEY`

## Lidarr

See Radarr and Sonarr but port `8686`.

## Whisparr

See Radarr and Sonarr but port `6969`.
