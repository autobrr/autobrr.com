---
title: Cross-seed with qui
description: Set up automatic cross-seeding with autobrr and qui.
keywords: [autobrr, qui, cross-seed, qbittorrent, webhook]
sidebar_label: Cross-seed with qui
pagination_label: Filters - Cross-seed with qui
---

import ExternalWebhookQui from '/snippets/diagrams/external-webhook-qui.mdx';

# Cross-seed with qui {#cross-seed-with-qui}

[qui](https://getqui.com) is our multi-instance qBittorrent WebUI with built-in cross-seed support. It integrates with autobrr through webhook endpoints, enabling real-time cross-seed detection when autobrr sees a new announce.

Unlike the [cross-seed](../3rd-party-tools/cross-seed.md) third party setup, this is a first party integration: no extra daemon, config file or torznab endpoints are needed. If you run qBittorrent and qui, all you need is a filter in autobrr.

## How it works {#how-it-works}

1. autobrr sees a new release from a tracker
2. autobrr sends the torrent name and indexer identifier to qui's `/api/cross-seed/webhook/check` endpoint via an external filter
3. qui searches your qBittorrent instances for matching content and responds with:
   - `200 OK`: a matching torrent is complete and ready to cross-seed
   - `202 Accepted`: a matching torrent exists but is still downloading; autobrr retries later
   - `404 Not Found`: no matching torrent exists
4. On `200 OK`, an autobrr action sends the torrent file to qui's `/api/cross-seed/apply` endpoint, which adds it to qBittorrent

<ExternalWebhookQui/>

Cross-seeded torrents are added paused with `skip_checking=true`. qui polls the torrent state and auto-resumes if progress meets the size tolerance threshold. If progress is too low, the torrent remains paused for manual review.

## Setup {#setup}

### 1. Create an API key in qui {#qui-api-key}

In qui, go to **Settings → API Keys**, click **Create API Key**, name it (e.g. `autobrr webhook`) and copy the generated key. We will refer to it as `YOUR_QUI_API_KEY` below.

### 2. Create the filter {#create-filter}

:::info
Create a new filter dedicated to qui. Select all the indexers you want to cross-seed from, preferably all of them.
:::

Create a filter named e.g. `qui cross-seed` and set a really high `priority` to make sure it runs before your other filters.

### 3. Add the external webhook {#external-webhook}

Go to the **External** tab of the filter and add a new external filter:

| Field                     | Value                                                |
| ------------------------- | ---------------------------------------------------- |
| Type                      | `Webhook`                                            |
| Name                      | `qui`                                                |
| On Error                  | `Reject`                                             |
| Endpoint                  | `http://localhost:7476/api/cross-seed/webhook/check` |
| HTTP Method               | `POST`                                               |
| HTTP Request Headers      | `X-API-Key=YOUR_QUI_API_KEY`                         |
| Expected HTTP Status Code | `200`                                                |

Data (JSON):

```json
{
  "torrentName": {{ toRawJson .TorrentName }},
  "instanceIds": [1],
  "indexer": {{ toRawJson .Indexer }}
}
```

To search all your qBittorrent instances, omit `instanceIds`:

```json
{
  "torrentName": {{ toRawJson .TorrentName }},
  "indexer": {{ toRawJson .Indexer }}
}
```

Field descriptions:

- `torrentName` (required): the release name as announced
- `instanceIds` (optional): qBittorrent instance IDs to scan; omit to search all instances
- `indexer` (optional): autobrr indexer identifier (e.g. `hdb`); required for qui's HDBits-specific missing-collection fallback
- `findIndividualEpisodes` (optional): override qui's global episode matching setting

:::tip Docker Compose
If autobrr and qui are both containers, `localhost` inside autobrr is the autobrr container, not qui. Use the qui container hostname instead (often the Compose service name), for example `http://qui:7476/api/cross-seed/webhook/check`.
:::

### 4. Configure retry handling {#retry-handling}

qui answers `202 Accepted` when a match exists but is still downloading. Use the **Retry** block of the external filter to handle this:

- **Retry HTTP status code(s):** `202`
- **Maximum retry attempts:** `10`
- **Retry delay in seconds:** `4`

### 5. Add the apply action {#apply-action}

:::caution
The external webhook only answers "is this ready to cross-seed?"; it does not add anything to qBittorrent. You must also add this action, otherwise nothing gets added.
:::

Go to the **Actions** tab of the filter and add a new action:

| Field       | Value                                                                |
| ----------- | -------------------------------------------------------------------- |
| Action Type | `Webhook`                                                            |
| Name        | `qui cross-seed`                                                     |
| Endpoint    | `http://localhost:7476/api/cross-seed/apply?apikey=YOUR_QUI_API_KEY` |

Payload (JSON):

```json
{
  "torrentData": "{{ .TorrentDataRawBytes | toString | b64enc }}",
  "instanceIds": [1],
  "indexer": {{ toRawJson .Indexer }}
}
```

Field descriptions:

- `torrentData` (required): base64-encoded torrent file bytes
- `instanceIds` (optional): target instances; omit to apply to any matching instance
- `indexer` (optional): autobrr indexer identifier (e.g. `hdb`); when qui's "Use indexer name as category" mode is enabled, qui uses this as the category
- `tags` (optional): override webhook tags from qui's settings
- `category` (optional): override category; takes precedence over `indexer`
- `startPaused` (optional): override whether torrents are added paused
- `skipIfExists` (optional): skip adding if the torrent already exists
- `findIndividualEpisodes` (optional): override qui's global episode matching setting

Finally, make sure the filter is enabled and you're all set.

## Troubleshooting {#troubleshooting}

autobrr shows the filter accepted the release, but nothing shows up in qBittorrent:

1. **Confirm you added the `/apply` action.** The external webhook (`/check`) does not add torrents.
2. **Fix Docker networking.** `http://localhost:7476/...` only works if autobrr can reach qui on its own `localhost`. In Docker Compose, use the qui service hostname, e.g. `http://qui:7476/api/cross-seed/apply?apikey=...`.
3. **Double-check auth.** `/check` uses the header `X-API-Key=...`, while `/apply` uses the query string `?apikey=...`.
4. **Verify qui can talk to qBittorrent.** In the qui UI: **Settings → Instances → Test Connection**.
5. **Check paused torrents.** Cross-seeds are often added paused; look in qBittorrent's paused list and any cross-seed tag/category you configured.

For anything beyond this, see qui's [cross-seed troubleshooting](https://getqui.com/docs/features/cross-seed/troubleshooting) docs.

## Going further {#going-further}

- **Webhook source filters:** by default qui scans all torrents on your instances when looking for matches. You can include/exclude categories and tags in the qui UI under **Cross-Seed → Auto → Webhook / autobrr**.
- **Season packs:** qui has a dedicated season pack flow with separate endpoints (`/api/cross-seed/season-pack/check` and `/api/cross-seed/season-pack/apply`) that links already downloaded episodes into an announced season pack. It requires a separate autobrr filter; see qui's [season packs](https://getqui.com/docs/features/cross-seed/season-packs) docs for full setup instructions.
- Full qui documentation: [getqui.com/docs/features/cross-seed/autobrr](https://getqui.com/docs/features/cross-seed/autobrr)
