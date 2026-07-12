---
title: Lists
description: Lists transforms items monitored by arrs or lists into autobrr filters. Useful for automating your filters for monitored media or racing criteria.
keywords:
  [
    autobrr,
    filters,
    tv,
    movies,
    books,
    music,
    2160p,
    1080p,
    4k,
    radarr,
    sonarr,
    readarr,
    lidarr,
    omegabrr,
  ]
sidebar_label: Lists
pagination_label: Filters - Lists
---

import ListFlow from '/snippets/diagrams/list-flow.mdx';
import ListRadarrCycle from '/snippets/diagrams/list-radarr-cycle.mdx';

# Lists Overview

Lists allow you to automatically transform monitored media from various sources into autobrr filters:

- Shows, movies, books and music from \*arr applications
- Titles from external services (Trakt, MDBList, Metacritic, etc.)

<ListFlow/>

## Supported list types

| Type       | Description                                                                                                                     |
|------------|---------------------------------------------------------------------------------------------------------------------------------|
| Radarr     | Monitored movies from a Radarr instance.                                                                                        |
| Sonarr     | Monitored shows from a Sonarr instance.                                                                                         |
| Lidarr     | Monitored artists and albums from a Lidarr instance.                                                                            |
| Readarr    | Monitored books from a Readarr instance. Always updates the `Match Releases` field.                                             |
| Whisparr   | Monitored titles from a Whisparr instance, handled like Sonarr.                                                                 |
| Trakt      | Built-in Trakt lists, or your own Trakt list URL. Private lists require a Trakt API key (client ID); the built-ins need no key. |
| MDBList    | Lists from [mdblist.com](https://mdblist.com).                                                                                  |
| Metacritic | Album lists (built-ins for upcoming and new albums).                                                                            |
| Plaintext  | A plain text file with one title per line, from a URL or a local file. See [Plaintext lists](#plaintext-lists).                 |
| Steam      | A Steam wishlist. Use the wishlist data URL: `https://store.steampowered.com/wishlist/id/USERNAME/wishlistdata`.                |
| AniList    | The built-in autobrr-hosted anime lists, or any URL returning the same JSON shape.                                              |

## Built-in lists

We have a couple built in lists that we maintain/update via our api. You can use your own urls in the fields but these
below are available as built-ins.

| Type       | Lists                                                                             |
|------------|-----------------------------------------------------------------------------------|
| MDBList    | `Latest TV Shows`                                                                 |
| Trakt      | `Anticipated TV`, `Popular TV`, `Upcoming Movies`, `Upcoming BluRay`, `Steven Lu` |
| Metacritic | `Upcoming Albums`, `New Albums`                                                   |
| AniList    | `Current anime season`, `Trending animes`, `Next anime season`                    |

## Quick Setup Guide

### 1. Access Lists Settings

Navigate to `Settings -> Lists` to begin setup.

### 2. Create a New List

1. Click "Add new list"
2. Fill in the basic settings:
    - List name
    - Select type (e.g., Radarr, Sonarr)
    - Choose instance

### 3. Optional Configuration

- **Match Releases**: Uses `Match Releases` field instead of `Movies/Shows` field
- **Include Unmonitored**: Includes unmonitored titles (useful for cross-seed filters)
- **Alternate Titles**: Includes alternate titles in the filter
- **Tags Included / Tags Excluded**: Radarr and Sonarr lists only. Only include items carrying one of the included tags,
  or skip items carrying an excluded tag. Matched against the tag labels in the arr instance; items without tags are
  skipped when Tags Included is set.
- **Include Year**: MDBList only. Appends the release year to movie titles as `Title*2024*` for more precise matching.
  Applies to movies only and requires (and auto-enables) Match Releases.
- **Skip clean/sanitize**: Plaintext only. By default all titles are sanitized into wildcard patterns (punctuation
  replaced with `?`/`*`); this toggle uses the list content as-is.

:::info
Lists also support custom HTTP request headers as `Key=Value` pairs for sources behind authentication. This is currently
only settable via the [API](../api.md), not the web UI.
:::

### 4. Finalize Setup

1. Select target filter(s)
2. Click "Save"

> **Note**: Filters update immediately upon save and refresh every 6 hours automatically.

## Filter Customization

You can improve filtering further by configuring fields like:

- Resolutions
- Categories
- Other filter criteria

Lists will only overwrite the specific fields they manage during updates.

## Plaintext lists

Plaintext lists read one title per line and turn the titles into a filter update.

- **Remote**: any `http(s)://` URL, as long as it serves the file with the `text/plain` content type.
- **Local file**: a `file://` URL pointing to a file on the same machine as autobrr, e.g.
  `file:///home/username/list.txt`.

Titles are sanitized into wildcard patterns by default; enable **Skip clean/sanitize** to use them exactly as written.

## Field Usage by List Type

| List Type                                                          | Fields Used                                                          |
|--------------------------------------------------------------------|----------------------------------------------------------------------|
| Music (e.g. Metacritic or Lidarr)                                  | `Artists`, `Albums` (Metacritic can use `Match Releases` if enabled) |
| Movies/TV (e.g. Sonarr, Radarr, Whisparr, Trakt, MDBList, AniList) | `Movies/Shows` (or `Match Releases` if enabled)                      |
| Plaintext                                                          | `Movies/Shows` (or `Match Releases` if enabled)                      |
| Steam                                                              | `Match Releases`                                                     |
| Readarr                                                            | `Match Releases` (always)                                            |

## Automatic Updates via Webhook

### Available Endpoints

| Endpoint                              | Methods      | Description                                    |
|---------------------------------------|--------------|------------------------------------------------|
| `/api/webhook/lists/trigger`          | `POST`,`GET` | Refresh all lists                              |
| `/api/webhook/lists/trigger/arr`      | `POST`,`GET` | Refresh all ARR lists                          |
| `/api/webhook/lists/trigger/lists`    | `POST`,`GET` | Refresh all non-ARR lists                      |
| `/api/webhook/lists/trigger/{listID}` | `POST`       | Refresh a single list by listID (Copy List ID) |

### ARR Setup Instructions

1. In your \*arr application, go to `Settings -> Connect -> Webhook`
2. Configure the webhook:
   ```
   Name: Some name
   Events: On Movie Added, On Movie Deleted
   Method: POST
   URL: https://autobrr.mydomain.com/api/webhook/lists/trigger/arr
   ```

#### Show Advanced Settings

1. Click the cogwheel icon
2. Add header:
    - Key: `X-API-Token`
    - Value: `your-autobrr-api-key`
3. Test and Save

This webhook will trigger filter updates whenever media is added or removed from your \*arr instance.

With the webhook in place the whole loop is automatic: add a movie in Radarr and the filter knows about it seconds later, ready for the next announce:

<ListRadarrCycle/>
