---
id: tv-movies
slug: /filters/tv-movies
sidebar_label: TV & Movies
title: TV & Movies
description: Explanation of filter options, fields and values.
keywords: [ autobrr, filters, tv, movies, music ]
pagination_label: Filters - TV & Movies
pagination_next: filters/music
---

import FilterWildcard from '/snippets/filter-wildcard.mdx';

# TV & Movies

<FilterWildcard/>

:::info

If you want to match a string partially, then remember to use the `*` around the before/after/around what you're
looking for.
If you want to match a string exactly, then try to avoid the use of the `*` wildcard character.

:::

---

| Field            | Description                                                        | Examples                 |
|------------------|--------------------------------------------------------------------|--------------------------|
| **Movies/Shows** | Comma separated list of media names to match.                      | e.g. `That?Movie, *the*` |
| **Years**        | Comma separated list of acceptable year ranges in the string.      | e.g. `2019,2020-2022`    |
| **Seasons**      | Comma separated list of acceptable TV show seasons in the string.  | e.g. `1,3-6`             |
| **Episodes**     | Comma separated list of acceptable TV show episodes in the string. | e.g. `1,2,10-20`         |
| **Months**       | Comma separated list of acceptable months, for daily shows.        | e.g. `4,2-9`             |
| **Days**         | Comma separated list of acceptable days, for daily shows.          | e.g. `1,15-30`           |

:::info

Months and Days apply to daily shows, where releases are named with a full date (like `2026 07 12`) instead of a season
and episode. They use the same comma/range syntax as Years.

:::

:::info

The Movies/Shows field operates on the _parsed_ media title. This means it is guaranteed not contain dots and
underscores, often found in release strings. However, it's still better to err on the safer side and use the `?`
wildcard character instead.

:::

## Smart Episode

When **Smart Episode** is enabled, the filter will not match episodes older than the last one it matched. Each incoming
episode is compared against the newest release this filter has already pushed and approved for the same show: it only
matches if its season and episode (or year, month and day for daily shows) is newer.

This is useful to avoid grabbing older episodes when you start following a show mid-season, or when an indexer announces
older content again.

:::info

Repacks and propers of an episode you already grabbed are still allowed through: an incoming repack is only blocked by a
newer approved repack from the same release group, and an incoming proper only by a newer approved proper. Releases
without season/episode or date information always pass the check.

:::

## Quality

| Field            | Description                                                                                                                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Resolutions**  | Will match releases which contain any of the selected resolutions.                                                                                                                                                               |
| **Sources**      | Will match releases which contain any of the selected sources.                                                                                                                                                                   |
| **Codecs**       | Will match releases which contain any of the selected codecs.                                                                                                                                                                    |
| **Containers**   | Will match releases which contain any of the selected containers.                                                                                                                                                                |
| **Match HDR**    | Will match releases which contain any of the selected HDR designations. Dual-format releases (like `DV HDR10`) only match via the combined options (`DV HDR`, `DV HDR10`, `DV HDR10+`); selecting only `DV` will not match them. |
| **Except HDR**   | Won't match releases which contain any of the selected HDR designations (takes priority over Match HDR). Select all to reliably exclude dual-format releases too.                                                                |
| **Match Other**  | Will match releases which contain any of the selected designations.                                                                                                                                                              |
| **Except Other** | Won't match releases which contain any of the selected Other designations (takes priority over Match Other).                                                                                                                     |
