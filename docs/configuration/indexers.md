---
id: indexers
slug: /configuration/indexers
sidebar_label: Indexers
title: Indexers and trackers in autobrr
description: The indexers and trackers available in autobrr
keywords: [autobrr, setup, bittorrent, torrents, torznab]
pagination_next: configuration/irc
pagination_prev: configuration/autobrr
pagination_label: Configuration - Indexers
---

# Indexers

## Supported indexers

:::info
Check [Supported indexers #1](https://github.com/autobrr/autobrr/issues/1) on Github for more info.
If you want more indexers added please either create a PR for it, post a comment on that issue or create a new one.
:::

import Indexers from '/snippets/indexers.mdx';
import IpApproval from '/snippets/ipapproval.mdx';

<Indexers/>

## Setup

1. Go to `Settings > Indexers` to add indexers

    When adding a new indexer, it will set up the IRC network and channels in the background.
    Indexers usually need some extra keys to work. The common ones are:

    - `passkey`
    - `rsskey`
    - `torrent_pass`
    - `auth_key`
    - `apikey`

    You'll see which ones are needed when setting up an indexer. Check your indexers wiki/forum etc. to find where they are located.

2. After the indexer is set up, head to `Settings > IRC` and click the 3 dots for the newly created network, hit `Edit`, and then enable the network. This is a good time to look over everything. The invite command etc.

:::important Important
Please check the [IRC](/configuration/irc) section for more details regarding NickServ, IRC keys, and grouping of nicks.
:::

<IpApproval/>

## Custom indexer definitions

autobrr supports custom indexer definitions.

In the autobrr config file, add the following to the bottom if it's not already there:

```bash
# Custom definitions
#
customDefinitions = "/home/$YOUR_USER/.config/autobrr/definitions"
```

Change `$YOUR_USER` to your username.

For Docker:

```bash
# Custom definitions
#
customDefinitions = "/config/definitions"
```

This should work if you have `/config` mapped to a volume which you hopefully have.

1. Put the definition file to disk and place it in the folder you just entered in the config.
2. Restart autobrr.
3. Set up the indexer in `Settings > Indexers` as usual.
