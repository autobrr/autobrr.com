---
sidebar_label: Feeds (RSS / Torznab)
sidebar_position: 4
pagination_label: Configuration - Feeds
title: Indexers Torznab and RSS feeds
description: Setup torznab and rss feeds for autobrr
keywords: [autobrr, setup, indexers, torznab, torrents, rss, feeds]
---

# Feeds

Some indexers does not have an IRC announce channel.
Luckily, most of them have RSS support.  
You will treat Torznab and RSS feeds as regular indexers when setting up your filters.

## Torznab Setup

Torznab is essentially like browsing the torrents page, but automated and unified.

Prowlarr and Jackett are supported. We recommend that you use Prowlarr.

Go to `Settings > Indexers` and add `Generic Torznab` from the list.

- **Name**: `<name of indexer>`
- **Torznab URL**: `http://localhost:port/ID/api`
- **API Key**: `<API key>`

Once saved, head over to `Settings > Feeds` to enable it.

:::tip
The `ID` part of the URL is the number given to the indexer by Prowlarr.
You can see which number it is by clicking the `i` on the right side of it within Prowlarr.

The `/api` part of the URL is not to be confused with `<API key>` in the field below it.
:::

autobrr will get the latest 25 items from the RSS feed. On first run it will check all and cache the entries, on the second run it will check for any new entries and run them through the assigned filters.

## RSS

Find the RSS feature of your indexer and grab the RSS link.

:::info
We don't currently support MAGNET links, so using public RSS feeds might not work.
:::

Go to `Settings > Indexers` and add `Generic RSS` from the list.

- **Name**: `<name of indexer>`
- **RSS URL**: `http://myindexer.com/rss`

Once saved, head over to `Settings > Feeds` to enable it.

autobrr will get the latest items from the RSS feed. On first run it will check all and cache the entries, on the second run it will check for any new entries and run them through the assigned filters.
