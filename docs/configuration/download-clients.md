---
sidebar_position: 3
---

# Download clients

Go to `settings/clients` to setup clients.

Clients can be local or remote, as long as ports are open and auth available.

## General

Available download clients are. For more info check [ Supported download clients and actions #2 ](https://github.com/autobrr/autobrr/issues/2)

* qBittorrent
* Deluge (v1+ and v2+)
* Radarr
* Sonarr
* Lidarr
* Whisparr

All clients have a test function to try out the connection details before saving.

## qBittorrent

* **Host**: Takes an ip or url without `http(s)`, eg `myserver.test`
* **Port**: This is the WebUI port
* **SSL**: Use this if the server is on https. It's usually not the case
* **Username**: username
* **Password**: password

:::tip

If qBittorrent is setup with eg Swizzin, it's common to bypass the reverse proxy and use url:webui-port directly. SSL should be off as well.

:::

### Rules

You can define some basic rules which can improve your performance for racing etc.

* **Enabled**: Disabled by default.
* **Max active downloads**: Default 0 (unlimited) Limit the amount of active downloads, to give the maximum amount of bandwith and disk for the downloads.
* **Ignore slow torrents**: Disabled by default.
* **Download speed threshold**: If max active downloads is hit, but download speed is below this limit, download anyways. Unit in KB/s

## Deluge

* **Host**: Takes an ip or url without `http(s)`, eg `myserver.test`
* **Port**: This is the daemon port
* **SSL**: Use this if the server is on https. It's usually not the case
* **Username**: username
* **Password**: password

:::tip

If Deluge is setup with eg Swizzin, it's common to bypass the reverse proxy and use url:webui-port directly. SSL should be off as well.

:::

### Deluge via docker

If autobrr isn't reaching Deluge when running Docker you can try this:

* `Host` should be the deluge container you're trying to reach, it will probably just be `deluge`.
Make sure that your docker containers are on the same network, so they can reach each other. If you're using a single compose file, it should be by default.
* `Port` should be the daemon port, not the webui port. Find the correct one by logging into Deluge webui, and checking in Preferences or under Connection Manager (default: 58846).
* `Authentication` is required for deluge daemon, not the webui.
It can be found at `/docker/appdata/deluge/auth`, the default one looks like `localclient:password:10`.
You can add your own if you wish. Like `username:password:powerlevel`.

### Rules

You can define some basic rules which can improve your performance for racing etc.

* **Enabled**: Disabled by default.
* **Max active downloads**: Default 0 (unlimited) Limit the amount of active downloads, to give the maximum amount of bandwith and disk for the downloads.

## Radarr

* **Host**: Takes an ip or url with `http(s)`, eg `http://myserver.test/radarr`
* **Apikey**: Api key
* **Basic auth**: Disabled by default. Some setups need it, others don't. Try without first.
* **Username**: username
* **Password**: password

## Sonarr

* **Host**: Takes an ip or url with `http(s)`, eg `http://myserver.test/sonarr`
* **Apikey**: Api key
* **Basic auth**: Disabled by default. Some setups need it, others don't. Try without first.
* **Username**: username
* **Password**: password

## Lidarr

* **Host**: Takes an ip or url with `http(s)`, eg `http://myserver.test/lidarr`
* **Apikey**: Api key
* **Basic auth**: Disabled by default. Some setups need it, others don't. Try without first.
* **Username**: username
* **Password**: password

## Whisparr

* **Host**: Takes an ip or url with `http(s)`, eg `http://myserver.test/whisparr`
* **Apikey**: Api key
* **Basic auth**: Disabled by default. Some setups need it, others don't. Try without first.
* **Username**: username
* **Password**: password
