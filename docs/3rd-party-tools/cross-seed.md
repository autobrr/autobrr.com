---
id: cross-seed
sidebar_label: Cross-seed
title: Cross-seed with autobrr
description: 3rd party tools that can be used with autobrr.
keywords: [cross-seed, qui, autobrr]
---

:::tip Using qBittorrent?
If you run qBittorrent, check out [qui](https://getqui.com), our multi-instance qBittorrent WebUI with first party cross-seed support. It integrates directly with autobrr and needs no extra daemon or config; see [Cross-seed with qui](../filters/cross-seed-qui.md).
:::

:::info Heads up

This is meant for advanced users. If you're not familiar with cross-seed already, we suggest you read their [documentation](https://cross-seed.org) before you continue.

Don't expect any support for setting this up. If you need help setting up cross-seed, you need to reach out to them directly.

:::

With this setup you can use autobrr with [cross-seed](https://github.com/cross-seed/cross-seed) to automatically cross-seed newly announced torrents from indexer Y that matches existing torrents in your torrent client from indexer X.

### Install cross-seed {#cross-seed-install}

See [cross-seed's documentation](https://www.cross-seed.org/docs/basics/getting-started) on how to get started.

### Create the cross-seed filter in autobrr {#cross-seed-filter}

The way this works is you create a filter with a higher priority set than any other filter to make sure every cross-seed match is forwarded to the cross-seed daemon instead of being run through other filters.

1. Get your API key with the following command:

    ```
    cross-seed api-key
    ```
    Keep this key at hand since we will need it at step 5 later on.
    In the rest of this tutorial, we will refer to this as `YOUR_API_KEY`.


2. Create a filter and name it eg. `cross-seed`.
3. Select all the indexers you want to use, preferably all of them.
4. Set a really high `priority` to make sure it's always higher than your other filters.
5. Go to the `External` tab, and add a new External filter.

   - Type: `Webhook`
   - Host: `http://localhost:2468/api/announce`
   - Headers: `x-api-key=YOUR_API_KEY`
   - HTTP Method: `POST`
   - Expected http status: `200`
   - Data (JSON):

   ```json
   {
     "name": {{ toRawJson .TorrentName }},
     "guid": "{{ .TorrentUrl }}",
     "link": "{{ .TorrentUrl }}",
     "tracker": {{ toRawJson .IndexerName }}
   }
   ```


6. Go to the `Actions` tab and create a Test action. This is required for the webhook to work.
7. Finally, make sure the filter is enabled and you're all set.

:::tip Cross-seed notifications
You can set up a Notifiarr or Apprise webhook for cross-seed notifications within the cross-seed config.
:::
