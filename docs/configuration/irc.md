---
sidebar_position: 2
---

# IRC

## Introduction to IRC

IRC stands for Internet Relay Chat. It is a simple chat program. You first connect to an IRC server and then you can join rooms (called channels).

### Grouping nicks

It is recommended to set up autobrr with a grouped IRC nick since you might want to talk in the other channels in a separate IRC client while autobrr monitors the `#announce`-channel.

The best way to do this is to first start up your favourite IRC client.

Here are some free and open source options:
* [The Lounge](https://thelounge.chat) - A web based, self hosted option
* [Konversation](https://konversation.kde.org/) - Linux
* [HexChat](https://hexchat.github.io/) - Windows and Flatpak
* [LimeChat](http://limechat.net/mac/) - MacOS

When you first open the IRC client it usually tells you to set up your nickname and choose what server to connect to. You should preferrably choose the same nick as you use on the trackers for this.

Once that is out of the way and you have connected to the server, you can start talking to NickServ to register your nick.

1. Register your main nick: `/msg NickServ REGISTER "password" "e-mail"` without the quotes

Once that is done it's time to make your grouped nick that you will use with autobrr.

2. Do `/nick "site-username|autodl"` without the quotes to change to the nick you want to use with autobrr
3. Tell NickServ to group your nicks: `/msg NickServ GROUP "site-username" "password"` without the quotes
4. Change back to site-username: `/nick site-username`

You have now successfully grouped your nicks and can safely connect autobrr to the irc network with `site-username|autodl` and still connect your `site-username` to your irc-client of choice if you want.

### Getting banned on irc

In some rare occurrences your bot might get banned from the IRC network. This can happen if the network suddenly changes how people are allowed to connect for example.

Some networks won't require special authentication, while others do, but they could implement it at any time. If they do, and your bot isn't set up for it, it will just retry to join the channel into infinity on a set interval. The network owners might ban you in this case.

Usually these things can often be resolved by contacting their support. Most trackers have a `#support`-channel as well as a ticket system on their site.

## Setup

The initial setup of irc networks and channels are done during the setup of [indexers](../configuration/indexers.md).

If you for some reason need to setup a network manually or edit an existing one you can do that in the `settings/irc` tab.

Before setup, make sure you have generated neccessary keys for setup. Some networks have invite commands with extra keys. Some require to be registered with NickServ, while others don't. 

* If NickServ Password is marked as `*`, required, then you need to have a registered account on that irc network.
* If NickServ Account is marked as required, that's only used as nick, but supports NickServ auth.

:::caution Caution

Quite a few indexers use the same network, specifically `irc.p2p-network.net`.

* If you have the same nick on multiple of them, it will reuse the same connection.
* If you have more than one nick on the same network in will create a new connection.

Adding or removing `indexers/networks/channels` can therefore break things.

:::