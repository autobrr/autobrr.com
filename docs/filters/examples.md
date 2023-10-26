---
title: Filter Examples
description: Filter examples for Sonarr, Radarr, building buffer and ratio.
keywords:
  [
    autobrr,
    filters,
    tv,
    movies,
    music,
    hdr,
    resolution,
    dv,
    dolby vision,
    2160p,
    1080p,
    4k,
    radarr,
    sonarr,
  ]
sidebar_label: Examples
pagination_label: Filters - Examples
---

# Examples

Here are some example filters that can be useful.

## TV - Sonarr

When using autobrr with Sonarr these are some good recommendation filters to start off.

It's advisable to setup your Sonarr properly with the help of [Trash-guides](https://trash-guides.info) and then just do some light filtering of releases to not push unwanted releases to Sonarr.

Don't forget to add a [Sonarr action](../filters/actions.md#radarr-sonarr-lidarr-readarr-and-whisparr)!

:::caution Important
Not all indexers announce video **container** like `mkv` or `mp4`. It's best to leave this off.
:::

### HD WEB (720p, 1080p)

Set this to match your quality settings in Sonarr

| Field            | Values                                |
| ---------------- | ------------------------------------- |
| Resolution       | [720p, 1080p]                         |
| Sources          | [WEB, WEB-DL, WEBRip]                 |
| Match Categories | [Depends on Indexer](./categories.md) |

### 4k (2160p)

Set this to match your quality settings in Sonarr

| Field            | Values                                |
| ---------------- | ------------------------------------- |
| Resolution       | [2160p]                               |
| Sources          | [WEB, WEB-DL, WEBRip]                 |
| Match Categories | [Depends on Indexer](./categories.md) |

### HDR and DV

Leave blank to match either and let your arr decide, or do the following to include or exclude HDR formats:

If you **WANT ONLY HDR** formats

| Field     | Values                  |
| --------- | ----------------------- |
| Match HDR | [HDR, DV] or Select all |

If you **DON'T WANT ANY HDR** formats

| Field      | Values                  |
| ---------- | ----------------------- |
| Except HDR | [HDR, DV] or Select all |

### Only season packs

If you only want to match season packs:

| Field    | Values |
| -------- | ------ |
| Seasons  | 1-99   |
| Episodes | 0      |

### Only episodes, skip season packs

If you only want to match episodes and no season packs:

| Field    | Values |
| -------- | ------ |
| Seasons  | 1-99   |
| Episodes | 1-99   |

## Movies - Radarr

When using autobrr with Radarr these are some good recommendation filters to start off.

It's advisable to setup your Radarr properly with the help of [Trash-guides](https://trash-guides.info) and then just do some light filtering of releases to not push unwanted releases to Radarr.

Don't forget to add a [Radarr action](./actions.md#radarr-sonarr-lidarr-readarr-and-whisparr)!

:::caution Important
Not all indexers announce video **container** like `mkv` or `mp4`. It's best to leave this off.
:::

### HD (720p, 1080p)

Set this to match your quality settings in Radarr

| Field            | Values                                |
| ---------------- | ------------------------------------- |
| Resolution       | [720p, 1080p]                         |
| Sources          | [WEB, WEB-DL, WEBRip, BluRay]         |
| Match Categories | [Depends on Indexer](./categories.md) |

### 4k (2160p)

Set this to match your quality settings in Radarr

| Field            | Values                                    |
| ---------------- | ----------------------------------------- |
| Resolution       | [2160p]                                   |
| Sources          | [WEB, WEB-DL, WEBRip, BluRay, UHD.Bluray] |
| Match Categories | [Depends on Indexer](./categories.md)     |

### HDR and DV

Leave blank to match either and let your arr decide, or do the following to include or exclude HDR formats:

If you **WANT ONLY** HDR formats

| Field     | Values                  |
| --------- | ----------------------- |
| Match HDR | [HDR, DV] or Select all |

If you **DON'T WANT ANY HDR** formats

| Field      | Values                  |
| ---------- | ----------------------- |
| Except HDR | [HDR, DV] or Select all |

## Build buffer

If you are in need of buffer this is an example that will work will on general indexers with freeleech/bonus systems.

Check your indexer or our [list of indexers supporting freeleech](./freeleech.md) filtering for specifics.

| Field     | Values        |
| --------- | ------------- |
| Freeleech | True / active |

And to not flood your torrent client you can use either `Max downloads Per` and set a limit on how many can be downloaded in a time period.

Or better, set the `max active downloads` rule for qBittorrent or Deluge.

This can be set in `Settings -> Clients`, click edit on your client, or create a new identical client with limits.

1. Toggle `Rules`
2. Set `Max active downloads` to 2.

This setting will make the filter check qBittorrent before adding a torrent. If the `Max active downloads` is reached, then it will not add the torrent.
This should not be confused with qBittorrent's BUILT IN setting with the same name. That will add torrents as paused and start only after the limit is below. This will hurt your ratio BAD.

Here's a small chart of recommended `Max active downloads` depending on server type, connection and disks. Try them out and increase the number until you hit negative ratios.

| Type      | Connection | Disks    | Value |
| --------- | ---------- | -------- | ----- |
| Dedicated | 1Gbit      | HDD      | 2     |
| Dedicated | 1Gbit      | SSD/NVME | 2-3   |
| Dedicated | 2Gbit      | HDD      | 2-3   |
| Dedicated | 10Gbit     | HDD      | 2-3   |
| Dedicated | 10Gbit     | SSD/NVME | 4-5+  |
| Shared    | 1Gbit      | HDD      | 1     |
| Shared    | "20Gbit+"  | HDD      | 2-3   |
| Shared    | "20Gbit+"  | SSD/NVME | 2-3   |

And if you have traffic limits, then `max downloads per` is there to help you limit it.

### Other tips

It's generally a good idea to check the latest torrents and the browse pages to try and look for patterns of what get snatches.

Some indexers and content types the current year releases do get a lot of snatches. If there's internal groups it's highly likely they do very well also.
