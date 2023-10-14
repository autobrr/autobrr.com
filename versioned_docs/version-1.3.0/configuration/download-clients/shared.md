---
id: shared
slug: /configuration/download-clients/shared-seedboxes
sidebar_label: Shared seedboxes
#sidebar_position: 3
title: Connecting to download clients on a shared seedbox
description: These are confirmed working ways to connect to download clients on various shared seedbox providers.
pagination_label: Configuration - Download clients (shared seedboxes)
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
    shared,
    seedbox,
  ]
---

# Download Clients

Go to `Settings > Clients` to setup clients.
All clients have a test function to try out the connection details before saving. Don't forget to give the client a name!

## Shared seedbox providers

These are confirmed working ways to connect to download clients on various shared seedbox providers.
If you have information about other providers, please <a href="https://github.com/autobrr/autobrr.com/tree/main/docs/configuration/download-clients/shared.md" target="_blank">edit this page</a> or let us know on Discord.

### qBittorrent

import SharedqBittorrent from '/snippets/shared-download-clients/qbittorrent.mdx';

<SharedqBittorrent />

### Deluge

import SharedDeluge from '/snippets/shared-download-clients/deluge.mdx';

<SharedDeluge />

### rTorrent

import SharedrTorrent from '/snippets/shared-download-clients/rtorrent.mdx';

<SharedrTorrent />

:::caution
Some ambiguous characters (such as @ : # % and more) may escape out of the URL.  
In this case you will have to change your password for ruTorrent to be able to add the client to autobrr.
:::

### Transmission

import SharedTransmission from '/snippets/shared-download-clients/transmission.mdx';

<SharedTransmission />

### Sonarr

import SharedSonarr from '/snippets/shared-download-clients/sonarr.mdx';

<SharedSonarr />

### Radarr

import SharedRadarr from '/snippets/shared-download-clients/radarr.mdx';

<SharedRadarr />

### Lidarr

import SharedLidarr from '/snippets/shared-download-clients/lidarr.mdx';

<SharedLidarr />

### Readarr

import SharedReadarr from '/snippets/shared-download-clients/readarr.mdx';

<SharedReadarr />

import TOCInline from '@theme/TOCInline';
