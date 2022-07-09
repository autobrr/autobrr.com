---
sidebar_label: Download Clients
sidebar_position: 3
title: Download clients
pagination_label: Configuration - Download clients
---

# Download Clients

Go to `Settings > Clients` to setup clients.  
Clients can be local or remote, as long as ports are open and auth available.

These are the available download clients.  
Check [Supported download clients and actions #2](https://github.com/autobrr/autobrr/issues/2) for more info.

- qBittorrent
- Deluge (v1+ and v2+)
- Radarr
- Sonarr
- Lidarr
- Whisparr

All clients have a test function to try out the connection details before saving.

## Configure Download Clients

import Downloadclients from '/snippets/downloadclients.mdx';

<Downloadclients/>

:::tip

If qBittorrent and Deluge is setup with e.g. Swizzin, it's common to bypass the reverse proxy and use `url:webui-port` directly. In this case, SSL/TLS should be off.

:::

### qBittorrent rules

You can define some basic rules which can improve your performance for racing etc.

- **Enabled**: Disabled by default.
- **Max active downloads**: Default 0 (unlimited). Limit the amount of active downloads, to give the maximum amount of bandwidth and disk for the downloads.
- **Ignore slow torrents**: Disabled by default.
- **Download speed threshold**: If max active downloads is hit, but download speed is below this limit, download anyway. Unit in KB/s.

### Deluge rules

You can define some basic rules which can improve your performance for racing etc.

- **Enabled**: Disabled by default.
- **Max active downloads**: Default 0 (unlimited). Limit the amount of active downloads, to give the maximum amount of bandwidth and disk for the downloads.
