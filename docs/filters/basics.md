---
id: basics
slug: /filters
sidebar_label: Basics
title: Filter Basics
description: Explanation of filter options, fields and values.
keywords: [ autobrr, filters, tv, movies, music ]
pagination_label: Filters - Basics
pagination_next: filters/tv-movies
---

import ConvertAutodlFilter from '/snippets/convert-autodl-filter.mdx';
import FilterMatch from '/snippets/diagrams/filter-match.mdx';
import FilterReject from '/snippets/diagrams/filter-reject.mdx';
import FilterRejectGroup from '/snippets/diagrams/filter-reject-group.mdx';
import FilterOrder from '/snippets/diagrams/filter-order.mdx';
import FilterOrderFlow from '/snippets/diagrams/filter-order-flow.mdx';

# Filters

<ConvertAutodlFilter />

## How a filter is evaluated {#how-a-filter-is-evaluated}

Every field you set in a filter must match for a release to be approved; fields you leave empty are skipped entirely. A typical TV filter checks a handful of fields against the parsed release name:

<FilterMatch/>

If any single check fails, the release is rejected. Rejected releases don't show up on the Releases page; only releases that matched a filter do. To see why something was skipped, check the logs with log level `DEBUG`:

<FilterReject/>

The `Except` fields work the other way around: a match there is a reason to reject. Here the release passes every quality check, but its group is on the filter's except list:

<FilterRejectGroup/>

### Check order {#check-order}

Checks run from cheap to expensive, and a failure at any step stops the rest:

<FilterOrder/>

The regular fields are checked first, against what the announce itself contains. The gold steps only run when your filter needs a value the announce didn't include: if you set size limits and the indexer doesn't announce size, autobrr fetches it out of band, via the indexer's API where available, or by downloading the .torrent file as a last resort. The same applies to uploader and record label checks on API-enabled indexers. [External filters](./external.md) always run last, so your scripts and webhooks are only called for releases that already passed everything else.

The same order as a flowchart; every reject path ends the same way, only a release that clears every step reaches the actions:

<FilterOrderFlow/>

---

Most fields can take a comma-separated list like `value1, value2`.

The comma-separated lists support wildcards, where `*` means zero or more characters and `?` means exactly one character.
An example would be: `*this*,that?movie`. In this case we would match any title containing `this` (or `tHiS`) or in the
second case, any title that matches exactly like `That Movie` or `tHaT MoViE` or even `THAT.MOVIE`.

If no value is specified in a field, then that field will match any/all possible values. That means if nothing but
`Filter Name` and `Indexers` is given, then the filter it will match all/any releases for the specified indexers.

Please note that all filters are **case-insensitive**, so write them however you desire. Another thing to note is that
it is not possible to escape wildcard fields.

:::info

If you want to match a string partially, then remember to use the `*` around the before/after/around what you're
looking for.
If you want to match a string exactly, then try to avoid the use of the `*` wildcard character.

Exception: the Match/Except releases, description and release tags fields on the [Advanced](advanced.md#releases) tab
match substrings even without wildcards and cannot match exactly in non-regex mode.

:::

---

## General

| Field             | Description                                               | Default value |
|-------------------|-----------------------------------------------------------|---------------|
| **Filter name**   | The name of this filter.                                  |               |
| **Enabled**       | Is this filter active?                                    | false         |
| **Indexers**      | Which indexers should this filter work for?               |               |
| **Announce Type** | See [Announce Type](#announce-type) for more information. | NEW           |

### Announce Type

| Type          | Description                                   | Supported By   |
|---------------|-----------------------------------------------|----------------|
| `NEW`         | Newly uploaded releases                       | All indexers   |
| `CHECKED`     | Staff verified/checked releases               | PTP            |
| `PROMO`       | Promotional releases (freeleech/neutral/half) | PTP and others |
| `PROMO_GP`    | Golden Popcorn marked releases                | PTP            |
| `RESURRECTED` | Reseeded/revived releases                     | PTP and others |

:::info
New filters default to `NEW`. If you also want to match staff-checked, promotional or resurrected releases, you must add
those announce types to the filter explicitly. `CHECKED` and `PROMO_GP` are PTP-specific, while `PROMO` and
`RESURRECTED` are also announced by some other trackers.
:::

### Rules

:::tip About Size

Some indexers don't announce the size of a release, so autobrr will download the torrent file to get a size.  
This check is only triggered if a minimum or a maximum size in that particular filter has been set.  
For workflows that require an external size check for an external application set `Min. size` to 1.  
To get around downloading every torrent file, some APIs for trackers that are problematic are implemented.

For TV and movies it's advised to use filters like `resolution`, `source` and `codec`  
since these often have known approximate sizes.

:::

| Field                       | Description                                                                                                                                                          | Default value        |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| **Min. size**               | Minimum torrent size allowed. Supports units such as MB, MiB, GB, etc.                                                                                               |                      |
| **Max. size**               | Maximum torrent size allowed. Supports units such as MB, MiB, GB, etc.                                                                                               |                      |
| **Delay**                   | Number of seconds to wait before running actions.                                                                                                                    | 0                    |
| **Priority**                | Filters are checked in order of priority. Positive and negative numbers allowed. Higher number = higher priority.                                                    | 0                    |
| **Max downloads**           | Number of max downloads as specified by the respective unit.                                                                                                         | 0 (which means +Inf) |
| **Max downloads per**       | The unit of time for counting the maximum downloads per filter: `HOUR`, `DAY`, `WEEK`, `MONTH` or `EVER`. `EVER` caps the total downloads for the filter's lifetime. |                      |
| **Skip duplicates profile** | The profile describing how to prevent duplicate downloads.  See [Skip Duplicates](skip-duplicates.md).                                                               | None                 |

:::info
If "Max downloads" is set, the filter will only match if you have downloaded fewer than "max downloads" items since the
beginning of the "max downloads per" period. For instance, if you set "max downloads" to 3 and "max downloads per" to "
day" the filter won't match unless you have downloaded fewer than 3 items since the beginning of the current day, in
local time.
:::

## Sharing filters

Filters can be exported and imported as JSON, which makes it easy to back them up or share them with others:

- **Export**: Open the dropdown next to a filter in the filter list and pick **Export JSON**, or **Export JSON (Discord)
  ** to get the same JSON wrapped in a Discord code block. The result is copied to your clipboard.
- **Import**: Click the arrow next to **Create Filter** and choose **Import Filter**. It accepts autobrr filter JSON as
  well as autodl-irssi `.tracker` configs, and imported filters are renamed automatically if the name is already taken.

---
