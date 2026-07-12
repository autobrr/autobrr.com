---
id: advanced
slug: /filters/advanced
sidebar_label: Advanced
title: Advanced
description: Explanation of advanced filter options, fields and values.
keywords: [autobrr, filters, advanced, cateogires, freeleech, group, tags, language, origins, seeders, leechers, description, release tags]
pagination_label: Filters - Advanced
pagination_next: filters/external
---

# Advanced

## Releases {/* #releases */}

:::info

Full regex support (Golang flavour, check https://regex101.com). These fields hardcode the mode `(?i)` **case-insensitive**

:::

| Field                  | Description                                                                           | Examples                                            | Availability |
| ---------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------ |
| \* **Match releases**  | Comma separated list of release names to match.                                       | e.g. `*Movie*remux*, That Other movie, *that?game*` | Always       |
| \* **Except releases** | Comma separated list of release names to ignore (takes priority over Match releases). | e.g. `Bad?Movie, *bad*`                             | Always       |

:::caution[Substring matching]
Unlike most other filter fields, in non-regex mode each comma separated term here is matched as a case-insensitive **substring** of the release name. Wildcards still work but are not required for partial matches, and exact-only matching is not possible without regex. Be careful with short Except terms: `web` also rejects every `WEB-DL` release.
:::

## Release groups {/* #release-groups */}

| Field                     | Description                                                                            | Examples                        | Availability |
| ------------------------- | -------------------------------------------------------------------------------------- | ------------------------------- | ------------ |
| **Match release groups**  | Comma separated list of release groups to match.                                       | e.g. `GROUP1, OTHERGROUP`       | Always       |
| **Except release groups** | Comma separated list of release groups to ignore (takes priority over Match releases). | e.g. `BADGROUP1, OTHERBADGROUP` | Always       |

## Categories {/* #categories */}

Not all announces category, check [this list](./categories.md) for indexer specifics.

| Field                 | Description                                                                        | Examples                  | Availability                          |
| --------------------- | ---------------------------------------------------------------------------------- | ------------------------- | ------------------------------------- |
| **Match categories**  | Comma separated list of categories to match.                                       | e.g. `tv,tv/1080p`        | [Depends on Indexer](./categories.md) |
| **Except categories** | Comma separated list of categories to ignore (takes priority over Match releases). | e.g. `tv/anime,tv/sports` | [Depends on Indexer](./categories.md) |

## Tags {/* #tags */}

| Field            | Description                                                                                                 | Examples              | Availability       |
| ---------------- | ------------------------------------------------------------------------------------------------------------ | --------------------- | ------------------ |
| **Match tags**   | Comma separated list of tags to match.                                                                       | e.g. `action,romance` | Depends on Indexer |
| **Match logic**  | How multiple Match tags combine: `ANY` matches if at least one tag is present, `ALL` requires every tag.     | `ANY` (default)       | Always             |
| **Except tags**  | Comma separated list of tags to ignore (takes priority over Match releases).                                 | e.g. `foreign`        | Depends on Indexer |
| **Except logic** | How multiple Except tags combine: `ANY` rejects if at least one tag is present, `ALL` requires every tag.    | `ANY` (default)       | Always             |

## Uploaders {/* #uploaders */}

| Field                | Description                                                                       | Examples                       | Availability       |
| -------------------- | --------------------------------------------------------------------------------- | ------------------------------ | ------------------ |
| **Match uploaders**  | Comma separated list of uploaders to match.                                       | e.g. `uploader1,otheruploader` | Depends on Indexer |
| **Except uploaders** | Comma separated list of uploaders to ignore (takes priority over Match releases). | e.g. `anonymous,slow_uploader` | Depends on Indexer |

:::info
On Redacted and Orpheus, announces do not include the uploader. autobrr fetches it from the tracker API instead and re-checks the filter, so uploader filtering still works there. This requires the indexer's API key to be configured in autobrr.
:::

## Languages {/* #languages */}

Only works when the indexer announces language information.

| Field               | Description                                                                       | Examples          | Availability       |
| ------------------- | ---------------------------------------------------------------------------------- | ----------------- | ------------------ |
| **Match language**  | Match releases containing any of the selected languages.                          | e.g. `MULTi`      | Depends on Indexer |
| **Except language** | Ignore releases containing any of the selected languages (takes priority).        | e.g. `FRENCH`     | Depends on Indexer |

## Origins {/* #origins */}

Only works when the indexer announces the release origin.

| Field              | Description                                                                       | Examples      | Availability       |
| ------------------ | ---------------------------------------------------------------------------------- | ------------- | ------------------ |
| **Match origins**  | Match releases with any of the selected origins: `P2P`, `Internal`, `SCENE`, `O-SCENE`. | e.g. `Internal` | Depends on Indexer |
| **Except origins** | Ignore releases with any of the selected origins (takes priority).                | e.g. `P2P`    | Depends on Indexer |

## Freeleech {/* #freeleech */}

Not supported by all indexers. Check [this list](./freeleech.md) for indexer specifics.

| Field                 | Description                                            | Examples           | Availability                                                 |
| --------------------- | ------------------------------------------------------ | ------------------ | ------------------------------------------------------------ |
| **Freeleech**         | Should this filter match only Freeleech releases?      |                    | [Depends on Indexer](./freeleech.md)                         |
| **Freeleech Percent** | Allowed Freeleech Percentage for this filter to match. | e.g. `50%,75-100%` | [Depends on Indexer, might not use percent.](./freeleech.md) |

## RSS/Torznab/Newznab-specific {/* #feed-specific */}

These options only work for [Feeds](../configuration/feeds.md) such as RSS, Torznab and Newznab. They have no effect on IRC announces.

| Field                  | Description                                                                                | Examples                          | Availability            |
| ---------------------- | ------------------------------------------------------------------------------------------ | --------------------------------- | ----------------------- |
| **Match description**  | Comma separated list matched against the feed item description.                           | e.g. `*some?movie*,*some?show*s01*` | Feeds only              |
| **Except description** | Comma separated list to ignore in the description (takes priority over Match description). | e.g. `*hardcoded*subs*`           | Feeds only              |
| **Use regex**          | Toggle regex mode for the two description fields above.                                    |                                   | Feeds only              |
| **Min / Max seeders**  | Only match when the number of seeders is within the given bounds.                          | e.g. `1` / `100`                  | Torznab feeds only      |
| **Min / Max leechers** | Only match when the number of leechers is within the given bounds.                         | e.g. `0` / `50`                   | Torznab feeds only      |

## Raw Release Tags {/* #raw-release-tags */}

For advanced users. These fields match against the raw, unparsed `releaseTags` string from the announce, like `FLAC / Lossless / Log / Cue` or `x264 / 1080p / MKV`, before autobrr parses it into separate fields.

| Field                   | Description                                                                          | Examples             | Availability       |
| ----------------------- | -------------------------------------------------------------------------------------- | -------------------- | ------------------ |
| **Match release tags**  | Comma separated list to match, wildcards supported.                                  | e.g. `*mkv*,*foreign*` | Depends on Indexer |
| **Except release tags** | Comma separated list to ignore (takes priority over Match release tags).             | e.g. `*log?100*`     | Depends on Indexer |
| **Use regex**           | Toggle regex mode for the two release tag fields above.                              |                      | Depends on Indexer |
