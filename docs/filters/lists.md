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

# Lists Overview

Lists allow you to automatically transform monitored media from various sources into autobrr filters:

- Shows, movies, books and music from \*arr applications
- Titles from external services (Trakt, MDBList, Metacritic, etc.)

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

## Field Usage by List Type

| Media Type                                      | Fields Used                                     |
| ----------------------------------------------- | ----------------------------------------------- |
| Music (e.g. Metacritic or Lidarr)               | `Artists`, `Albums`                             |
| Movies/TV (e.g. Sonarr, Radarr, Trakt, MDBList) | `Movies/Shows` (or `Match Releases` if enabled) |
| Plaintext/Steam                                 | `Match Releases`                                |

## Automatic Updates via Webhook

### Setup Instructions

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
