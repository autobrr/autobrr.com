---
id: basics
slug: /filters
sidebar_label: Basics
title: Filter Basics
description: Explanation of filter options, fields and values.
keywords: [autobrr, filters, tv, movies, music]
pagination_label: Filters - Basics
pagination_next: filters/actions
---

# Filters

Most fields can take a comma separated list like `value1, value2`.

The comma separated lists supports wildcards, where `*` means 0 or more characters and `?` means exactly one character. An example would be: `*this*,that?movie`. In this case we would match any title containing `this` (or `tHiS`) or in the second case, any title which matches exactly like `That Movie` or `tHaT MoViE` or even `THAT.MOVIE`.

If no value is specified in a field, then that field will match any/all possible values. That means if nothing but `Filter Name` and `Indexers` is given, then the filter it will match all/any releases for the specified indexers.

Please note that all filters are **case-insensitive**, so write them however you desire. Another thing to note is that it is not possible to escape wildcard fields.

:::info

If you want to match a string partially, then don't forget to use the `*` around the before/after/around what you're looking for.
If you want to match a string exactly, then try to avoid the use of the `*` wildcard character.

:::

---

## General

| Field           | Description                                 | Default value |
| --------------- | ------------------------------------------- | ------------- |
| **Filter name** | The name of this filter.                    |               |
| **Enabled**     | Is this filter active?                      | false         |
| **Indexers**    | Which indexers should this filter work for? |               |

:::info

Note that all filters by default are **DISABLED** and you will have to enable them manually.

:::

### Rules

Some basic filtering rules.

:::tip about size

Some indexers doesn't announce the size, so it needs to download the torrent file and parse it to get size if set.
autodl-irssi works like this as well. To get around this some api's will be implemented for trackers that are problematic.

For TV and movies it's advised to use filters like `resolution`, `source` and `codec` since these often have known sizes.

:::

| Field                 | Description                                                                                                       | Default value        |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------- |
| **Max. size**         | Maximum torrent size allowed. Supports units such as MB, MiB, GB, etc.                                            |                      |
| **Min. size**         | Minimum torrent size allowed. Supports units such as MB, MiB, GB, etc.                                            |                      |
| **Delay**             | Number of seconds to wait before running actions.                                                                 | 0                    |
| **Priority**          | Filters are checked in order of priority. Positive and negative numbers allowed. Higher number = higher priority. | 0                    |
| **Max downloads**     | Number of max downloads as specified by the respective unit.                                                      | 0 (which means +Inf) |
| **Max downloads per** | The unit of time for counting the maximum downloads per filter.                                                   |                      |

---

## TV/Movies

| Field            | Description                                                        | Examples                 |
| ---------------- | ------------------------------------------------------------------ | ------------------------ |
| **Movies/Shows** | Comma separated list of media names to match.                      | e.g. `That?Movie, *the*` |
| **Years**        | Comma separated list of acceptable year ranges in the string.      | e.g. `2019,2020-2022`    |
| **Seasons**      | Comma separated list of acceptable TV show seasons in the string.  | e.g. `1,3-6`             |
| **Episodes**     | Comma separated list of acceptable TV show episodes in the string. | e.g. `1,2,10-20`         |

:::info

The Movies/Shows field operates on the _parsed_ media title. This means it is guaranteed not contain dots and underscores, often found in release strings. However, it's still better to err on the safer side and use the `?` wildcard character instead.

:::

### Quality

| Field            | Description                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| **Resolutions**  | Will match releases which contain any of the selected resolutions.                                           |
| **Sources**      | Will match releases which contain any of the selected sources.                                               |
| **Codecs**       | Will match releases which contain any of the selected codecs.                                                |
| **Containers**   | Will match releases which contain any of the selected containers.                                            |
| **Match HDR**    | Will match releases which contain any of the selected HDR designations.                                      |
| **Except HDR**   | Won't match releases which contain any of the selected HDR designations (takes priority over Match HDR).     |
| **Match Other**  | Will match releases which contain any of the selected designations.                                          |
| **Except Other** | Won't match releases which contain any of the selected Other designations (takes priority over Match Other). |

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

## External

With external filters you can run `scripts` and `webhooks` to do your own custom filtering. If **Expected exit status** matches it will continue. If not it stops there.

All the [variables and macros](/filters/actions#macros) from actions are usable in these fields to inject dynamic variables.

### Script

Run external script that does something. Use `exit codes` correctly, like `exit 0` for no issues. In Linux, non-zero exit codes are considered not-ok/error etc.

See [stop if disk is full](/usage/tips#stop-if-disk-is-full) for a good example of what it can do.

| Field                    | Description           | Examples                                                       |
| ------------------------ | --------------------- | -------------------------------------------------------------- |
| **Command**              | Command, full path    | e.g. `/usr/bin/myprogram`                                      |
| **Arguments**            | Arguments.            | e.g. `--name {{ .TorrentName }} --file {{ .TorrentPathName }}` |
| **Expected exit status** | Expected exit status. | e.g. `0`                                                       |

### Webhook

Send a payload to some custom API and do more processing. Use status codes to trigger different behaviours.

Only supports `POST` requests for now.

| Field                    | Description           | Examples                                |
| ------------------------ | --------------------- | --------------------------------------- |
| **Host**                 | Host.                 | e.g. `http://127.0.0.1:5000/api/filter` |
| **Data**                 | Data, JSON.           | e.g. `{ "name": "{{ .TorrentName }}" }` |
| **Expected http status** | Expected http status. | e.g. `200`                              |

---

## Advanced

\* Full regex support (Golang flavour, check https://regex101.com)

| Field                     | Description                                                                           | Examples                                            | Availability                                                     |
| ------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------- |------------------------------------------------------------------|
| \* **Match releases**     | Comma separated list of release names to match.                                       | e.g. `*Movie*remux*, That Other movie, *that?game*` | Always                                                           |
| \* **Except releases**    | Comma separated list of release names to ignore (takes priority over Match releases). | e.g. `Bad?Movie, *bad*`                             | Always                                                           |
| **Match release groups**  | Comma separated list of release groups to match.                                       | e.g. `GROUP1, OTHERGROUP`                           | Always                                                           |
| **Except release groups** | Comma separated list of release groups to ignore (takes priority over Match releases). | e.g. `BADGROUP1, OTHERBADGROUP`                     | Always                                                           |
| **Match categories**      | Comma separated list of categories to match.                                       | e.g. `tv,tv/1080p`                                  | Depends on Indexer                                               |
| **Except categories**     | Comma separated list of categories to ignore (takes priority over Match releases). | e.g. `tv/anime,tv/sports`                           | Depends on Indexer                                               |
| **Match tags**            | Comma separated list of tags to match.                                       | e.g. `action,romance`                               | Depends on Indexer                                               |
| **Except tags**           | Comma separated list of tags to ignore (takes priority over Match releases). | e.g. `foreign`                                      | Depends on Indexer                                               |
| **Match uploaders**       | Comma separated list of uploaders to match.                                       | e.g. `uploader1,otheruploader`                      | Depends on Indexer                                               |
| **Except uploaders**      | Comma separated list of uploaders to ignore (takes priority over Match releases). | e.g. `anonymous,slow_uploader`                      | Depends on Indexer                                               |
| **Freeleech**             | Should this filter match only Freeleech releases?                                     |                                                     | [Depends on Indexer](/filters/freeleech)                         |
| **Freeleech Percent**     | Allowed Freeleech Percentage for this filter to match.                                | e.g. `50%,75-100%`                                  | [Depends on Indexer, might not use percent.](/filters/freeleech) |