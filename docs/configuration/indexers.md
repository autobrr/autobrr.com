---
id: indexers
slug: /configuration/indexers
sidebar_label: Indexers
title: Indexers and trackers in autobrr
description: A guide on how to set up indexers and trackers in autobrr.
keywords:
  [
    autobrr,
    setup,
    bittorrent,
    torrents,
    torznab,
    newznab,
    indexer,
    indexers,
    tracker,
    trackers,
  ]
pagination_next: configuration/irc
pagination_prev: configuration/autobrr
pagination_label: Configuration - Indexers
---

import { AiFillGithub } from 'react-icons/ai';
import Indexers from '/snippets/indexers.mdx';
import IpApproval from '/snippets/ipapproval.mdx';

# Indexers

:::info
For adding more indexers to autobrr, please submit an [Indexer Request](https://github.com/autobrr/autobrr/issues/new/choose) on GitHub <AiFillGithub />
:::

## Supported Indexers

<Indexers/>

## Setup

Navigate to `Settings > Indexers` to add new indexers.

   When adding a new indexer, autobrr automatically configures the necessary IRC network and channels. Indexers usually need some extra keys to work. The common ones are:

   - `passkey`
   - `rsskey`
   - `torrent_pass`
   - `auth_key`
   - `apikey`

    Not all of these are required when setting up a new indexer. `Passkeys` and `torrent_pass` are typically found in the download url of a torrent, while `apikey`, `auth_key` and `rsskey`s are on your indexer's profile page. Check your indexers wiki/forum etc. if you're having trouble finding something specific, the question has been likely asked before and the staff probably already have their own guide on how to set up.

   For instance, TorrentLeech provides a setup guide [here](http://wiki.torrentleech.org/doku.php/autobrr).  

   :::info
   - If NickServ Password is marked with a `*`, a registered IRC account is required. Refer to [registering with NickServ](irc.md#registering-with-nickserv) for more details.
   - NickServ Account marked with a `*` indicates that it's utilized only for the nick but supports NickServ authentication.  
   - The `invite command` field under `Settings > IRC > Edit network` will come pre-populated. Input your IRC key here, and ensure the rest of the settings remain unchanged.
   :::

#### Activating the Network

Once your indexer is configured, go to `Settings > IRC` and flip the switch associated with the newly created network. Now is a good time to review all settings, including the invite command.

:::caution Important
Refer to the [IRC](../configuration/irc.md) section for detailed information about NickServ, IRC keys, and nick grouping.
:::

<IpApproval/>

### External Identifier (optional) {#external-identifier}

To enable features such as seed limits (seed ratio, seed time) when pushing releases to \*arrs, an `External identifier` is required. This identifier must correspond to the indexer name in your \*arr setup. If you are using Prowlarr, it will typically be listed as "TorrentLeech (Prowlarr)".

:::info
Available in verison `v1.42.0+`

This option will only appear when you **edit** an existing indexer.
:::

## Custom indexer definitions

autobrr supports custom indexer definitions.

In the autobrr config file, add the following to the bottom if it's not already there:

```toml
# Custom definitions
#
customDefinitions = "/home/$YOUR_USER/.config/autobrr/definitions"
```

Change `$YOUR_USER` to your username.

For Docker:

```toml
# Custom definitions
#
customDefinitions = "/config/definitions"
```

This should work if you have `/config` mapped to a volume which you hopefully have.

1. Create your definition file and place it in the directory specified in your config file.
2. Restart autobrr to apply changes.
3. Configure the new indexer by navigating to `Settings > Indexers` and setting it up as usual.
