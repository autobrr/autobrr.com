---
id: music
slug: /filters/music
sidebar_label: Music
title: Music
description: Explanation of music filter options, fields and values.
keywords: [autobrr, filters, music]
pagination_label: Filters - Music
pagination_next: filters/advanced
---
import ConvertAutodlFilter from '/snippets/convert-autodl-filter.mdx';
import FilterMusic from '/snippets/diagrams/filter-music.mdx';

# Music

<ConvertAutodlFilter />

A typical music filter checks the announced format, quality, media and release type; every field you set must match, and fields you leave empty are skipped:

<FilterMusic/>

---

Most fields can take a comma-separated list like `value1, value2`.

The comma-separated lists support wildcards, where `*` means zero or more characters and `?` means exactly one character. An example would be: `*this*,that?movie`. In this case we would match any title containing `this` (or `tHiS`) or in the second case, any title that matches exactly like `That Movie` or `tHaT MoViE` or even `THAT.MOVIE`.

If no value is specified in a field, then that field will match any/all possible values. That means if nothing but `Filter Name` and `Indexers` is given, then the filter it will match all/any releases for the specified indexers.

Please note that all filters are **case-insensitive**, so write them however you desire. Another thing to note is that it is not possible to escape wildcard fields.

:::info

If you want to match a string partially, then remember to use the `*` around the before/after/around what you're looking for.
If you want to match a string exactly, then try to avoid the use of the `*` wildcard character.

:::

---

## Music

| Field                    | Description                                                                                | Examples                        |
|--------------------------|--------------------------------------------------------------------------------------------|---------------------------------|
| **Artists**              | Comma separated list of media names to match.                                              | e.g. `That?Artist`              |
| **Albums**               | Comma separated list of acceptable year ranges in the string.                              | e.g. `That?Album, *the?album*`  |
| **Years**                | Comma separated list of acceptable years in the string.                                    | e.g. `2019,2020-2022`           |
| **Match record labels**  | Comma separated list of record labels to match, wildcards supported.                       | e.g. `Deathwish*,Profound Lore` |
| **Except record labels** | Comma separated list of record labels to ignore (takes priority over Match record labels). | e.g. `*bootleg*`                |

:::info
Record label matching is only supported by Redacted and Orpheus. When the announce does not include the record label, autobrr fetches it from the tracker API, which requires the indexer's API key to be configured in autobrr.
:::

### Quality

| Field            | Description                                                                                                                                                                                                                                     |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Format**       | Will only match releases with any of the selected formats.                                                                                                                                                                                      |
| **Quality**      | Will only match releases with any of the selected qualities.                                                                                                                                                                                    |
| **Media**        | Will only match releases with any of the selected media, e.g. `CD`, `Vinyl`, `WEB`.                                                                                                                                                             |
| **Music Type**   | Will only match releases with any of the selected types (`Album`, `Single`, `EP`, etc.). Found under Release Details.                                                                                                                           |
| **Log**          | Whether Log **must** be included.                                                                                                                                                                                                               |
| **Log Score**    | Matches Log percent for indexers that announce it. Requires Log to be enabled, and matches the announced score exactly, not as a minimum: `100` only matches perfect logs. Check your indexer, the announced Log Score might not be in percent. |
| **Cue**          | Enforces Cue requirement.                                                                                                                                                                                                                       |
| **Perfect FLAC** | Overrides all options about quality, source, format, and Cue/Log/Log score. Requires: CD media, FLAC, Lossless or 24bit Lossless, Cue, and Log with a 100% log score.                                                                           |

---
