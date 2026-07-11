---
id: search
sidebar_label: Search
title: Search function
description: The Releases tab will show you every matched and rejected release. You can search through this list by typing your query and/or with selected keywords.
keywords: [autobrr, releases, search, tv, movies, music]
pagination_next: usage/tips
---

The Releases tab will show you every matched and rejected release.
You can search through this list by typing your query and/or with selected keywords.

## Supported keywords

`category`
`codec`
`episode`
`filter`
`group`
`hdr`
`resolution`
`season`
`source`
`title`
`type`
`year`

:::tip
There are a lot of different categories. A crowd sourced list can be found [here](../filters/categories.md).
This is not a complete list by any means, so if you want to add missing categories to our docs, read [this](../filters/categories.md#how-to-export-categories-from-autobrrdb).
:::

## Usage

As an example, if you want to search for all 1080p releases from the year 2022:

- `year:2022 resolution:1080p`

If you want to list all Dolby Vision releases by a certain group:

- `group:framestor hdr:DV`

If you want to list all 1080p releases with the keyword `Movie Title`:

- `Movie Title resolution:1080p`

If you want to list episode 3 of season 5 in `The Show`:

- `The Show season:05 episode:03`

If you want to list all movies:

- `type:movie`

Type matches how the release name was parsed: `movie`, `episode` (single episodes), `series` (season packs), `music`, `game`, `app`, `book` and so on.
