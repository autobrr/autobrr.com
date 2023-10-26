---
id: advanced
slug: /filters/advanced
sidebar_label: Advanced
title: Advanced
description: Explanation of advanced filter options, fields and values.
keywords: [autobrr, filters, advanced, cateogires, freeleech, group, tags]
pagination_label: Filters - Advanced
pagination_next: filters/external
---

# Advanced

\* Full regex support (Golang flavour, check https://regex101.com)

## Releases

| Field                  | Description                                                                           | Examples                                            | Availability |
| ---------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------ |
| \* **Match releases**  | Comma separated list of release names to match.                                       | e.g. `*Movie*remux*, That Other movie, *that?game*` | Always       |
| \* **Except releases** | Comma separated list of release names to ignore (takes priority over Match releases). | e.g. `Bad?Movie, *bad*`                             | Always       |

## Release groups

| Field                     | Description                                                                            | Examples                        | Availability |
| ------------------------- | -------------------------------------------------------------------------------------- | ------------------------------- | ------------ |
| **Match release groups**  | Comma separated list of release groups to match.                                       | e.g. `GROUP1, OTHERGROUP`       | Always       |
| **Except release groups** | Comma separated list of release groups to ignore (takes priority over Match releases). | e.g. `BADGROUP1, OTHERBADGROUP` | Always       |

## Categories

Not all announces category, check [this list](./categories.md) for indexer specifics.

| Field                 | Description                                                                        | Examples                  | Availability                          |
| --------------------- | ---------------------------------------------------------------------------------- | ------------------------- | ------------------------------------- |
| **Match categories**  | Comma separated list of categories to match.                                       | e.g. `tv,tv/1080p`        | [Depends on Indexer](./categories.md) |
| **Except categories** | Comma separated list of categories to ignore (takes priority over Match releases). | e.g. `tv/anime,tv/sports` | [Depends on Indexer](./categories.md) |

## Tags

| Field           | Description                                                                  | Examples              | Availability       |
| --------------- | ---------------------------------------------------------------------------- | --------------------- | ------------------ |
| **Match tags**  | Comma separated list of tags to match.                                       | e.g. `action,romance` | Depends on Indexer |
| **Except tags** | Comma separated list of tags to ignore (takes priority over Match releases). | e.g. `foreign`        | Depends on Indexer |

## Uploaders

| Field                | Description                                                                       | Examples                       | Availability       |
| -------------------- | --------------------------------------------------------------------------------- | ------------------------------ | ------------------ |
| **Match uploaders**  | Comma separated list of uploaders to match.                                       | e.g. `uploader1,otheruploader` | Depends on Indexer |
| **Except uploaders** | Comma separated list of uploaders to ignore (takes priority over Match releases). | e.g. `anonymous,slow_uploader` | Depends on Indexer |

## Freeleech

Not supported by all indexers. Check [this list](./freeleech.md) for indexer specifics.

| Field                 | Description                                            | Examples           | Availability                                                 |
| --------------------- | ------------------------------------------------------ | ------------------ | ------------------------------------------------------------ |
| **Freeleech**         | Should this filter match only Freeleech releases?      |                    | [Depends on Indexer](./freeleech.md)                         |
| **Freeleech Percent** | Allowed Freeleech Percentage for this filter to match. | e.g. `50%,75-100%` | [Depends on Indexer, might not use percent.](./freeleech.md) |
