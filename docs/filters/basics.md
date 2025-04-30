---
id: basics
slug: /filters
sidebar_label: Basics
title: Filter Basics
description: Explanation of filter options, fields and values.
keywords: [autobrr, filters, tv, movies, music]
pagination_label: Filters - Basics
pagination_next: filters/tv-movies
---

import ConvertAutodlFilter from '/snippets/convert-autodl-filter.mdx';

# Filters

<ConvertAutodlFilter />

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

| Field             | Description                                               | Default value |
| ----------------- | --------------------------------------------------------- | ------------- |
| **Filter name**   | The name of this filter.                                  |               |
| **Enabled**       | Is this filter active?                                    | false         |
| **Indexers**      | Which indexers should this filter work for?               |               |
| **Announce Type** | See [Announce Type](#announce-type) for more information. | ALL           |

### Announce Type

| Type          | Description                                   | Supported By |
| ------------- | --------------------------------------------- | ------------ |
| `NEW`         | Newly uploaded releases                       | All indexers |
| `CHECKED`     | Staff verified/checked releases               | PTP          |
| `PROMO`       | Promotional releases (freeleech/neutral/half) | PTP          |
| `PROMO_GP`    | Golden Popcorn marked releases                | PTP          |
| `RESURRECTED` | Reseeded/revived releases                     | PTP          |

### Rules

:::tip About Size

Some indexers don't announce the size of a release, so autobrr needs to download the torrent file to get size.
This check will only be triggered if a minimum or a maximum size in that particular filter has been set.  
To get around downloading every torrent file, some APIs for trackers that are problematic are implemented.

For TV and movies it's advised to use filters like `resolution`, `source` and `codec` since these often have known approximate sizes.

:::

| Field                 | Description                                                                                                       | Default value        |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------- |
| **Min. size**         | Minimum torrent size allowed. Supports units such as MB, MiB, GB, etc.                                            |                      |
| **Max. size**         | Maximum torrent size allowed. Supports units such as MB, MiB, GB, etc.                                            |                      |
| **Delay**             | Number of seconds to wait before running actions.                                                                 | 0                    |
| **Priority**          | Filters are checked in order of priority. Positive and negative numbers allowed. Higher number = higher priority. | 0                    |
| **Max downloads**     | Number of max downloads as specified by the respective unit.                                                      | 0 (which means +Inf) |
| **Max downloads per** | The unit of time for counting the maximum downloads per filter.                                                   |                      |

:::info
If "Max downloads" is set, the filter will only match if you have downloaded fewer than "max downloads" items since the beginning of the "max downloads per" period. For instance, if you set "max downlods" to 3 and "max downloads per" to "day" the filter won't match unless you have downloaded fewer than 3 items since the beginning of the current day, in local time.
:::

---
