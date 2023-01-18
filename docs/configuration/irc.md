---
sidebar_label: IRC
sidebar_position: 2
pagination_label: Configuration - IRC
title: IRC
description: A guide on how to set up IRC networks and announce channels in autobrr.
keywords:
  [
    autobrr,
    setup,
    irc,
    announce,
    announce channel,
    pre,
    bittorrent,
    torrents,
    nickserv,
    group,
    invite command,
    connect command,
  ]
---

IRC stands for Internet Relay Chat. autobrr has its own IRC client built in which lets it monitor the #announce channels without the need for additional software.

## Prerequisites

You need a registered nick on most IRC servers to be able to join channels. We will set up a registered user in a few easy steps.

You need a separate IRC client to do this.
Here are some free and open source options:

- [Konversation](https://konversation.kde.org/) - Linux
- [LimeChat](http://limechat.net/mac/) - MacOS
- [HexChat](https://hexchat.github.io/) - Windows/Linux
- [The Lounge](https://thelounge.chat) - A web based, self hosted option.

Make sure your indexer is supported before proceeding.

import Indexers from '/snippets/indexers.mdx';

<Indexers/>

### Registering with NickServ

When you first open the IRC client it usually tells you to set up your nickname and choose what server to connect to. You should preferably choose the username you use on the tracker(s) you want autobrr to monitor for this.

1. Connect to the IRC network using your IRC client of choice.
2. Register your nick with NickServ: `/msg nickserv register PASSWORD EMAIL`

The password should **not** match the one you use for logging in to the tracker.
The e-mail address doesn't have to match either.

:::caution
If you do not plan to use grouped nicks (read the next section), make sure to disconnect from the IRC server in your IRC client before attempting to set it up in autobrr.
:::

### Grouping nicks

It is recommended to set up autobrr with a grouped IRC nick since you might want to talk in the other channels in a separate IRC client while autobrr monitors the #announce channel.

import Botnaming from '/snippets/botnaming.mdx';

<Botnaming/>

NickServ allows you to group two nicks to the same account in a few easy steps:

1. While connected to the IRC server with `username`, do `/nick USERNAME|AUTODL` to change to the nick you want autobrr to use.
2. Ask NickServ to group your nicks: `/msg nickserv group USERNAME PASSWORD`
3. Change back to your username: `/nick USERNAME`

You have now successfully grouped your nicks and can safely connect autobrr to the IRC network with `username|autodl` while using `username` in another IRC client if you want.

### Getting banned on IRC

In some rare occurrences your bot might get banned from the IRC network. This can happen if the network suddenly changes how people are allowed to connect for example.

Some networks won't require special authentication, while others do, but they could implement it at any time. If they do, and your bot isn't set up for it, it will just retry to join the channel into infinity on a set interval. The network owners might ban you in this case.

Usually these things can often be resolved by contacting their support. Most trackers have a #support channel as well as a ticket system on their site.

You shouldn't need to worry about it, but it's nice now to know what you need to do if that were to happen.

## Setup

The initial setup of IRC networks and channels are done during the setup of [indexers](/configuration/indexers).

If you for some reason need to setup a network manually, or edit an existing one, you can do that in `Settings > IRC`.

Before setup, make sure you have generated the necessary keys. Some networks have invite commands with extra keys. Some require you to be registered with NickServ (see [registering with NickServ](#registering-with-nickserv)). Trackers have documentation for the extra authentication protocols in their wiki pages.

- If NickServ Password is marked `*` as required, then you need to have a registered account on that IRC network. See [registering with NickServ](#registering-with-nickserv) above.
- If NickServ Account is marked `*` as required, that's only used as nick, but supports NickServ auth.
- The invite command field in `Settings > IRC > Edit network` are pre filled, but you need to add your IRC key. The rest should be left as is.

:::caution Caution

Quite a few indexers use the same network, specifically `irc.p2p-network.net`.

- If you use the same nick with multiple indexers, it will reuse the same connection for them.
- If you have more than one nick on the same network in will create a new connection for each.

Adding or removing `indexers/networks/channels` can therefore break things.

:::
