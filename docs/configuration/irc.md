---
sidebar_position: 2
---

# IRC

The initial setup of irc networks and channels are done during the setup of indexers.

If you need to edit something, you can do it here after.

## Setup

If you for some reason need to setup a network you can do that in the `settings/irc` tab.

Before setup, make sure you have generated neccessary keys for setup. Some networks have invite commands with extra keys. Some require to be registered with NickServ, while others don't. 

* If NickServ Password is marked as `*`, required, then you need to have a registered account on that irc network.
* If NickServ Account is marked as required, that's only used as nick, but supports NickServ auth.

You can group your primary user and a bot user to keep them separate, which is advisable. Here's a good guide how to do that [how-to-group-nicknames](https://digitalirc.org/2012/09/how-to-group-nicknames/).


:::caution Caution

Quite a few indexers use the same network, specifically `irc.p2p-network.net`.

* If you have the same nick on multiple of them, it will reuse the same connection.
* If you have more than one nick on the same network in will create a new connection.

Adding or removing `indexers/networks/channels` can therefore break things.

:::