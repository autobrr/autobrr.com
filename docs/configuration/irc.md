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
    bouncer,
    bnc,
    znc,
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

The initial setup of IRC networks and channels are done during the setup of [indexers](../configuration/indexers.md).

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

## Troubleshoot

If you have any issues with IRC not connecting or staying red then do the following:

1. Go into `Settings -> Logs` and set Level to `TRACE`
2. Go into `Settings -> IRC` and either hit the enabled toggle or click the thre dots button press the `Restart` option
3. Go to the `Logs` page and look what it is doing

There will be a lot of info with Trace logs so you'll have to read carefully. `NickServ` and `SASL` errors are related to auth and could mean you have not registered when it's required, or put in the wrong info.

autobrr uses the **Auth Mechanism** `SASL` by default. Some networks does not support it and a change of **Auth Mechanism** to `NickServ` will generally fix it. Some does not require NickServ registration at all and then you can set it to `None`-

If you need some assistance then the best way to get help is [Discord](https://discord.gg/8s5d8pFhba).

## Bouncing around (optional)

:::warning

This is meant for advanced users or those that need a single irc connection for certain networks or for those using multiple servers with multiple autobrr instances.

:::

Due the current way of the release-parsing pipeline works, you may want to use a dedicated autobrr instance for your downloader. For this purpose, having a IRC bouncer in front will be beneficial, as it enables you to use the same irc-bot account for multiple autobrr instances. This still require you to have gone trough the above steps of setting up a bot account.

### Setting up ZNC

This write-up will use the [Linuxserver ZNC](https://github.com/linuxserver/docker-znc) docker image.

```yml
---
version: "2.1"
services:
  znc:
    image: lscr.io/linuxserver/znc:latest
    container_name: znc
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
    volumes:
      - /path/to/data:/config
    ports:
      - 6501:6501
    restart: unless-stopped
```

This example will get you a working baseline, there will be some tips to enable SSL further down.

Theres two ways to configure ZNC, straight in irc, or trough the webui, this write-up will use the webui where possible.

Consult the containers readme for up-to-date info on the current default credentials(at the time of writing it is `admin/admin`), use these to log in to the webui on port 6501. Go to "Your Settings" on the menu on the top left, as you will want to change the default password, you can also change the default irc nick here. Save by selecting "Save and continue", as you want to stay on this page for the next step.

Now you want to set up the networks, the exact settings varies, fortunately autobrr´s irc definitions holds all the information you want. The write-up will use the current (as of writing) [definition for AR](https://github.com/autobrr/autobrr/blob/v1.29.0/internal/indexer/definitions/alpharatio.yaml).

You want to set `Network Name` to something recognizable as it is the identifier you will use when connecting to this network in autobrr. Set `Nickname`, `Alt. Nickname`, `Ident` and `Realname` to the bot nickname.

Leave `Active` to true, this way ZNC automatically connects to the network once it starts up.

Next up you want to add the server for this network, under the `Servers of this IRC network` section. Read the definition for the server, port and tls settings needed. For the linked definition, this will be line 30, 31 and 32 respectively.

You may need to enable some modules for the network based on the networks setup. You usually need either the [SASL](https://wiki.znc.in/Sasl) or [NickServ](https://wiki.znc.in/Nickserv) module. There is currently no way based on the definition to tell if a network supports SASL, so you might need to resort to NickServ. There is no reason to set up channels here, as autobrr will join the one specified in the definition (or send the private message needed), like it would without the bouncer.

#### Enabling SSL

While this is not required, it might be easier to get going than you think. This section is based on already having Linuxserver´s SWAG generating a certificate for `znc.mydomain.com`, while keeping all traffic between containers inside the same docker network.

There is two changes that need to be done to the compose example to allow this to work.

```yml
version: "2.1"
services:
  znc:
    volumes:
      - /path-to-swag-config/etc:/swag-ssl
    networks:
      default:
        aliases:
          - znc.mydomain.com
```

This utilizes the [documented](https://github.com/linuxserver/docker-swag#using-certs-in-other-containers) way to share SWAGs certificates to other containers. To have DNS match, we tell docker to add a alias to the container using the domain we have a certificate for.

Before you apply this change, you also want to update the znc.conf in the persistent data of ZNC.

```ini
SSLCertFile = /swag-ssl/letsencrypt/live/<mydomain.com>/fullchain.pem
SSLDHParamFile = /swag-ssl/letsencrypt/live/<mydomain.com>/fullchain.pem
SSLKeyFile = /swag-ssl/letsencrypt/live/<mydomain.com>/privkey.pem
```

### Prepare the network

While the SASL module offers a way to configure it in the webui, doing it over irc was easier, as you would need to do so for NickServ if SASL failed.

Connect to the network you set up in ZNC with your favorite client, like mentioned in the Prerequisites step. The IRC server is running on the same port as the webui in the default config for the Linuxserver image. For the username, use the bot nickname. The password tells ZNC which network you want to connect to, therefore it follows a preset syntax, there is some helper-text about this on the top of the network page in the webui. For this example it would be `admin/AlphaRatio:admin`.

Once connected to the ZNC network, you need to set up authentication.

#### SASL

You can set up SASL by telling it about your bot username and password.

```text
/query *sasl Set <username> [<password>]
```

SASL is only negotiated on connection, so you need to tell ZNC to do a reconnect to the network.

```text
/query *status jump
```

If you are still not authenticated with the bot username, you need to use NickServ.

#### NickServ

To tell the module about your password, you use almost the same command as with SASL

```text
/query *nickserv set <password>
```

At this point you can disable/unload the module for the authentication method you are not using.

### Using the bouncer in Autobrr

You tell autobrr to use the bouncer by toggling the `Bouncer (BNC)` switch in the IRC settings, this presents you with a field to enter the address of the bouncer, in `HOST:PORT` format, where host can be ip or a domain. You also need to to fill the password for the network with the same scheme(`admin/AlphaRatio:admin`) as you did when you connected your client to the bouncer.
Once you save these changes, you should now be able to confirm that the bouncer network is used, by looking at your network list in ZNC, it should now have increased the numbers of clients on the network.
