---
id: search
sidebar_label: Search
title: Search
description: Explanation of keyword searches, supported keywords and values
keywords: [autobrr, releases, search, tv, movies, music]
pagination_label: Usage - Search
pagination_next: 3rd-party-scripts
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
`year`

:::tip
There are a lot of different categories. A crowd sourced list can be found [here](/filters/categories).
This is not a complete list by any means, so if you want to add missing categories to our docs, read [this](/filters/categories#how-to-export-categories-from-autobrrdb).
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
