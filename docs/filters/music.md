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

# Music

:::tip
You can easily convert your autodl-irssi filters into autobrr filters using our conversion tool. Visit https://convert.autobrr.com and follow the simple steps to convert each filter individually.
:::

Most fields can take a comma separated list like `value1, value2`.

The comma separated lists supports wildcards, where `*` means 0 or more characters and `?` means exactly one character. An example would be: `*this*,that?movie`. In this case we would match any title containing `this` (or `tHiS`) or in the second case, any title which matches exactly like `That Movie` or `tHaT MoViE` or even `THAT.MOVIE`.

If no value is specified in a field, then that field will match any/all possible values. That means if nothing but `Filter Name` and `Indexers` is given, then the filter it will match all/any releases for the specified indexers.

Please note that all filters are **case-insensitive**, so write them however you desire. Another thing to note is that it is not possible to escape wildcard fields.

:::info

If you want to match a string partially, then don't forget to use the `*` around the before/after/around what you're looking for.
If you want to match a string exactly, then try to avoid the use of the `*` wildcard character.

:::

---

## Music

| Field       | Description                                                   | Examples                       |
| ----------- | ------------------------------------------------------------- | ------------------------------ |
| **Artists** | Comma separated list of media names to match.                 | e.g. `That?Artist`             |
| **Albums**  | Comma separated list of acceptable year ranges in the string. | e.g. `That?Album, *the?album*` |
| **Years**   | Comma separated list of acceptable years in the string.       | e.g. `2019,2020-2022`          |

### Quality

| Field            | Description                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Format**       | Will only match releases with any of the selected formats.                                                              |
| **Quality**      | Will only match releases with any of the selected qualities.                                                            |
| **Sources**      | Will only match releases with any of the selected sources.                                                              |
| **Type**         | Will only match releases with any of the selected types.                                                                |
| **Log**          | Whether Log **must** be included.                                                                                       |
| **Log Score**    | Matches Log percent for indexers that announce it. Check your indexer, the announced Log Score might not be in percent. |
| **Cue**          | Enforces Cue requirement.                                                                                               |
| **Perfect FLAC** | Overrides all options about quality, source, format, and Cue/Log/Log score.                                             |

---
