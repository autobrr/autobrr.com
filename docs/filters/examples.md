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

import ConvertAutodlFilter from '/snippets/convert-autodl-filter.mdx';
import ReleaseAnatomySports from '/snippets/diagrams/release-anatomy-sports.mdx';

# Examples

Here are some example filters that can be useful.

## TV - Sonarr {/* #tv---sonarr */}

When using autobrr with Sonarr these are some good recommendation filters to start off.

It's advisable to setup your Sonarr properly with the help of [Trash-guides](https://trash-guides.info) and then just do some light filtering of releases to not push unwanted releases to Sonarr.

Don't forget to add a [Sonarr action](../filters/actions.md#radarr-sonarr-lidarr-readarr-and-whisparr)!

:::caution[Important]
Not all indexers announce video **container** like `mkv` or `mp4`. It's best to leave this off.
:::

### HD WEB (720p, 1080p) {/* #hd-web-720p-1080p */}

Set this to match your quality settings in Sonarr

| Field            | Values                                |
| ---------------- | ------------------------------------- |
| Resolution       | [720p, 1080p]                         |
| Sources          | [WEB, WEB-DL, WEBRip]                 |
| Match Categories | [Depends on Indexer](./categories.md) |

### 4k (2160p) {/* #4k-2160p */}

Set this to match your quality settings in Sonarr

| Field            | Values                                |
| ---------------- | ------------------------------------- |
| Resolution       | [2160p]                               |
| Sources          | [WEB, WEB-DL, WEBRip]                 |
| Match Categories | [Depends on Indexer](./categories.md) |

### HDR and DV {/* #hdr-and-dv */}

Leave blank to match either and let your arr decide, or do the following to include or exclude HDR formats:

If you **WANT ONLY HDR** formats

| Field     | Values     |
| --------- | ---------- |
| Match HDR | Select all |

If you **DON'T WANT ANY HDR** formats

| Field      | Values     |
| ---------- | ---------- |
| Except HDR | Select all |

:::caution
Selecting only `HDR` and `DV` misses dual-format releases like `DV HDR10`, which only match the combined options (`DV HDR`, `DV HDR10`, `DV HDR10+`). Select all is the safe choice; narrow it down only if you know which formats your indexer announces.
:::

### Only season packs {/* #only-season-packs */}

If you only want to match season packs:

| Field    | Values |
| -------- | ------ |
| Seasons  | 1-99   |
| Episodes | 0      |

### Only episodes, skip season packs {/* #only-episodes-skip-season-packs */}

If you only want to match episodes and no season packs:

| Field    | Values |
| -------- | ------ |
| Seasons  | 1-99   |
| Episodes | 1-99   |

## Movies - Radarr {/* #movies---radarr */}

When using autobrr with Radarr these are some good recommendation filters to start off.

It's advisable to setup your Radarr properly with the help of [Trash-guides](https://trash-guides.info) and then just do some light filtering of releases to not push unwanted releases to Radarr.

Don't forget to add a [Radarr action](./actions.md#radarr-sonarr-lidarr-readarr-and-whisparr)!

:::caution[Important]
Not all indexers announce video **container** like `mkv` or `mp4`. It's best to leave this off.
:::

### HD (720p, 1080p) {/* #hd-720p-1080p */}

Set this to match your quality settings in Radarr

| Field            | Values                                |
| ---------------- | ------------------------------------- |
| Resolution       | [720p, 1080p]                         |
| Sources          | [WEB, WEB-DL, WEBRip, BluRay]         |
| Match Categories | [Depends on Indexer](./categories.md) |

### 4k (2160p) {/* #4k-2160p-1 */}

Set this to match your quality settings in Radarr

| Field            | Values                                    |
| ---------------- | ----------------------------------------- |
| Resolution       | [2160p]                                   |
| Sources          | [WEB, WEB-DL, WEBRip, BluRay, UHD.Bluray] |
| Match Categories | [Depends on Indexer](./categories.md)     |

### HDR and DV {/* #hdr-and-dv-1 */}

Leave blank to match either and let your arr decide, or do the following to include or exclude HDR formats:

If you **WANT ONLY** HDR formats

| Field     | Values     |
| --------- | ---------- |
| Match HDR | Select all |

If you **DON'T WANT ANY HDR** formats

| Field      | Values     |
| ---------- | ---------- |
| Except HDR | Select all |

:::caution
Selecting only `HDR` and `DV` misses dual-format releases like `DV HDR10`, which only match the combined options (`DV HDR`, `DV HDR10`, `DV HDR10+`). Select all is the safe choice; narrow it down only if you know which formats your indexer announces.
:::

## Matching specific titles {/* #matching-specific-titles */}

The **Movies / Shows** field on the [TV & Movies](./tv-movies.md) tab matches against the parsed title of the release, and supports the usual wildcards: `*` for zero or more characters, `?` for exactly one. Matching is case-insensitive and must cover the whole title, so add `*` when you only know part of it.

| Pattern      | Matches                                        | Doesn't match             |
| ------------ | ---------------------------------------------- | ------------------------- |
| `The?Batman` | `The Batman`, `The.Batman`                     | `The Batmans`, `TheBatman` |
| `Dune*`      | `Dune`, `Dune Part Two`                        | `The Dune Chronicles`     |
| `*office*`   | `The Office`, `Office Space`                   |                           |
| `Severance`  | `Severance` (exact title only)                 | `Severance US`            |

:::tip
Prefixes match more than you might expect: `Dune*` also matches a title like `Dunes`. When two titles collide, add the year or a separator, e.g. `Dune?Part*`.
:::

## Sports {/* #sports */}

Sports releases parse differently from movies and TV. The league or competition becomes the **title**, while the round, event and session end up in the **sub-title**, and there is no filter field for the sub-title:

<ReleaseAnatomySports/>

This means a `Shows` value of `Formula 1` matches every F1 release: practice, qualifying and race alike. To narrow down to specific sessions, use **Match releases** on the [Advanced](./advanced.md#releases) tab, which matches against the whole release name. It matches substrings even without wildcards, and a comma-separated list works as OR:

| Field          | Values                                                        |
| -------------- | ------------------------------------------------------------- |
| Shows          | `Formula 1`                                                    |
| Resolutions    | [1080p]                                                        |
| Match releases | `Formula*1*Race*1080p*, Formula*1*Qualifying*1080p*`           |

This would match `Formula.1.2023.Round.01.BahrainGP.Race.F1.Live.1080p.SS` and the qualifying equivalent, but skip practice sessions. The same pattern works for other sports:

| Sport    | Match releases                              |
| -------- | ------------------------------------------- |
| UFC      | `UFC*PPV*1080p*, UFC*Prelims*1080p*`        |
| Football | `*Premier*League*1080p*`                    |
| MotoGP   | `MotoGP*Race*1080p*`                        |

## Build buffer {/* #build-buffer */}

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

### Other tips {/* #other-tips */}

It's generally a good idea to check the latest torrents and the browse pages to try and look for patterns of what get snatches.

Some indexers and content types the current year releases do get a lot of snatches. If there's internal groups it's highly likely they do very well also.

## Convert autodl-irssi filters {/* #convert-autodl-irssi-filters */}

<ConvertAutodlFilter />
