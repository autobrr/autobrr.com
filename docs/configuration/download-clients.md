---
sidebar_label: Download clients
sidebar_position: 3
title: Download clients
pagination_label: Configuration - Download clients
---

Go to `Settings > Clients` to setup clients.  
Clients can be local or remote, as long as ports are open and auth available.

These are the available download clients.  
Check [Supported download clients and actions #2](https://github.com/autobrr/autobrr/issues/2) for more info.

* qBittorrent
* Deluge (v1+ and v2+)
* Radarr
* Sonarr
* Lidarr
* Whisparr

All clients have a test function to try out the connection details before saving.

## qBittorrent

* **Host**: Takes an IP or URL without `http(s)`, eg `myserver.test`.
* **Port**: `<WebUI port>`
* **SSL**: Use this if the server is on https. It's usually not the case.
* **Username**: `<username>`
* **Password**: `<password>`

:::tip

If qBittorrent is setup with eg Swizzin, it's common to bypass the reverse proxy and use `url:webui-port` directly. SSL should be off.

:::

### qBittorrent rules

You can define some basic rules which can improve your performance for racing etc.

* **Enabled**: Disabled by default.
* **Max active downloads**: Default 0 (unlimited). Limit the amount of active downloads, to give the maximum amount of bandwidth and disk for the downloads.
* **Ignore slow torrents**: Disabled by default.
* **Download speed threshold**: If max active downloads is hit, but download speed is below this limit, download anyway. Unit in KB/s.

## Deluge

* **Host**: Takes an IP or URL without `http(s)`, eg `myserver.test`
* **Port**: `<daemon port>`
* **SSL**: Use this if the server is on https. It's usually not the case.
* **Username**: `<username>`
* **Password**: `<password>`

:::tip

If Deluge is setup with eg swizzin, it's common to bypass the reverse proxy and use url:webui-port directly. SSL should be off as well.

:::

### Deluge rules

You can define some basic rules which can improve your performance for racing etc.

* **Enabled**: Disabled by default.
* **Max active downloads**: Default 0 (unlimited). Limit the amount of active downloads, to give the maximum amount of bandwidth and disk for the downloads.

## Radarr

* **Host**: Takes an IP or URL with `http(s)`, eg `http://myserver.test/radarr`
* **API key**: `<API key>`
* **Basic auth**: Disabled by default. Some setups need it, others don't. Try without first.
* **Username**: `<username>`
* **Password**: `<password>`

## Sonarr

* **Host**: Takes an IP or URL with `http(s)`, eg `http://myserver.test/sonarr`
* **API key**: `<API key>`
* **Basic auth**: Disabled by default. Some setups need it, others don't. Try without first.
* **Username**: `<username>`
* **Password**: `<password>`

## Lidarr

* **Host**: Takes an IP or URL with `http(s)`, eg `http://myserver.test/lidarr`
* **API key**: `<API key>`
* **Basic auth**: Disabled by default. Some setups need it, others don't. Try without first.
* **Username**: `<username>`
* **Password**: `<password>`

## Whisparr

* **Host**: Takes an IP or URL with `http(s)`, eg `http://myserver.test/whisparr`
* **API key**: `<API key>`
* **Basic auth**: Disabled by default. Some setups need it, others don't. Try without first.
* **Username**: `<username>`
* **Password**: `<password>`
