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
If you want more indexers added please create an [Indexer Request](https://github.com/autobrr/autobrr/issues/new/choose) <AiFillGithub />
:::

## Supported indexers

<Indexers/>

## Setup

1. Go to `Settings > Indexers` to add indexers.

   When adding a new indexer, it will set up the IRC network and channels in the background.
   Indexers usually need some extra keys to work. The common ones are:

   - `passkey`
   - `rsskey`
   - `torrent_pass`
   - `auth_key`
   - `apikey`

   Not all of these are required when setting up a new indexer. `Passkeys` and `torrent_pass` are typically found in the download url of a torrent, while `apikey`, `auth_key` and `rsskey`s are on your indexer's profile page. Check your indexers wiki/forum etc. if you're having trouble finding something specific, the question has been likely asked before and the staff probably already have their own guide on how to set up.

   For example, torrentleech provides their users with [this](http://wiki.torrentleech.org/doku.php/autobrr) page.

   - If NickServ Password is marked `*` as required, then you need to have a registered account on that IRC network. See [registering with NickServ](/configuration/irc#registering-with-nickserv).
   - If NickServ Account is marked `*` as required, that's only used as nick, but supports NickServ auth.
   - The invite command field in `Settings > IRC > Edit network` are pre filled, but you need to add your IRC key. The rest should be left as is.

1. After the indexer is set up, head to `Settings > IRC` and click the 3 dots for the newly created network, hit `Edit`, and then enable the network. This is a good time to look over everything. The invite command etc.

:::caution Important
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
