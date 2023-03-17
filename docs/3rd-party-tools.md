---
sidebar_label: 3rd party tools
sidebar_position: 6
title: 3rd party tools
description: 3rd party tools that can be used with autobrr.
keywords: [cross-seed, regbrr]
---

## Cross-seed with autobrr

:::info Heads up

This is meant for advanced users. If you're not familiar with cross-seed already, we suggest you read their [documentation](https://cross-seed.org) before you continue.

Don't expect any support for setting this up. If you need help setting up cross-seed, you need to reach out to them directly.

:::

With this setup you can utilize autobrr with [cross-seed](https://github.com/cross-seed/cross-seed) to automatically cross-seed newly announced torrents from indexer Y that matches existing torrents in your torrent client from indexer X.

### Install cross-seed and its dependencies

You can install cross-seed in several ways. Docker is recommended, but installing via npm or yarn (requires node 14 or greater) is also fine.

In this guide we will install it with npm. This method requires node 14 or greater.
<https://github.com/nodesource/distributions/blob/master/README.md#using-debian-as-root-3>

```bash
# Elevate to root and install Node.js LTS (v18.x)
sudo su -
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - &&\
apt-get install -y nodejs

# Install cross-seed
npm install -g cross-seed
```

### Generate config and make sure the port isn't exposed to the internet

```bash
# Generate a cross-seed config file
cross-seed gen-config

# Open the file
nano /home/$USER/.cross-seed/config.js

# Make sure the following parameters are set within the config

# You need to add at least one torznab URL from Prowlarr to the config for it to be valid
# They will not be used by autobrr

# outputDir needs to exist, but will not be used

torznab: [
    "http://127.0.0.1:9696/1/api?apikey=APIKEY&tracker=Tracker1",
    "http://127.0.0.1:9696/2/api?apikey=APIKEY&tracker=Tracker2"
],
torrentDir: "/home/$USER/.local/share/qBittorrent/BT_backup",
outputDir: "/home/$USER/torrentfiles",
action: "inject",
qbittorrentUrl: "http://user:pass@localhost:port",
```

:::danger Make sure the port is not exposed to the internet

Since cross-seed doesn't have API auth, we need to make sure its port isn't open to the internet. You can use iptables or UFW to solve this. Cross-seed daemon uses port 2468 by default.

```text
sudo apt-get install iptables

iptables -A INPUT -p tcp --dport 2468 -s 127.0.0.1 -j ACCEPT
iptables -A INPUT -p tcp --dport 2468 -j DROP
```

:::

### Start the cross-seed daemon

To make autobrr communicate with cross-seed, you need to run cross-seed in [daemon mode](https://www.cross-seed.org/docs/basics/daemon).
In this guide we will set up a [systemd service](https://www.cross-seed.org/docs/basics/daemon#systemd-linux). You can also set it up with [screen](https://www.cross-seed.org/docs/basics/daemon#screen) or [docker](https://www.cross-seed.org/docs/basics/daemon#docker).

#### Systemd

```shell
touch /etc/systemd/system/cross-seed.service
```

You'll want to customize the following variables:

- `{user}`: your user, or another user if you want to create a separate user
  for `cross-seed`
- `{group}`: your group, or another group if you want to create a separate
  group for `cross-seed`
- `/path/to/node`: run the command `which node` in your terminal, then paste
  the output here.

```systemd title="/etc/systemd/system/cross-seed.service"
[Unit]
Description=cross-seed daemon
[Service]
User={user}
Group={group}
Restart=always
Type=simple
ExecStart=/path/to/node cross-seed daemon
[Install]
WantedBy=multi-user.target
```

```shell
sudo systemctl daemon-reload # tell systemd to discover the unit file you just created
sudo systemctl enable cross-seed # enable it to run on restart
sudo systemctl start cross-seed # start the service
sudo journalctl -u cross-seed # view the logs
```

### Create the cross-seed filter in autobrr

The way this works is you create a filter with a higher priority set than any other filter to make sure every cross-seed match is forwarded to the cross-seed daemon instead of being run through other filters.

1. Create a filter and name it eg. `cross-seed`.
2. Select all the indexers you want to use, preferably all of them.
3. Set a really high `priority` to make sure it's always higher than your other filters.
4. Go to the `External` tab, enable the `Webhook` switch, and add the following below it:

   Host: `http://localhost:2468/api/announce`  
   Expected http status: `200`  
   Data (JSON):

   ```json
   {
     "name": "{{ .TorrentName }}",
     "guid": "{{ .TorrentUrl }}",
     "link": "{{ .TorrentUrl }}",
     "tracker": "{{ .Indexer | js}}"
   }
   ```

5. Go to the `Actions` tab and create a Test action. This is required for the webhook to work.
6. Finally, make sure the filter is enabled and you're all set.

:::tip Cross-seed notifications
You can set up a Notifiarr or Apprise webhook for cross-seed notifications within the cross-seed config.
:::

## regbrr

:::warning Caution

This script is not officially supported, nor do we guarantee that we can help you make it work. You should understand how it works if you choose to use it.

Please do not contact the creator of this script for support, but feel free to ask in our [Discord](https://discord.gg/WQ2eUycxyT) for community support.

:::

This is a script that will take input for filters, then match them against a set of pre-defined strings. If it finds a match in the filter name, it will update the respective filter. This was rewritten this way because some users have 4K/4K DV filters and want them to match without introducing additional variables. By using a bash array, as declared on line 3, we are able to specify a number of filters and loop through them.

The script basically pulls anticipated and popular titles from a source, and then feeds them into your assigned filters.

### Download the script

import { AiFillGithub } from 'react-icons/ai';

`regbrr.sh` can be found [here <AiFillGithub />](https://gist.github.com/brettpetch/2f3147eaff75294003261df9dfd0208a)

### Installation

1. Create the filters in autobrr. (here we use the examples of race-TV, race-TV4K, race-TVDV, race-Movies, race-Movies4K, race-MoviesDV, race-BluRay, race-BluRay4K, race-BluRayDV)
2. Run the script.
3. Setup the actions for each filter within autobrr.
4. Setup a cronjob. (Anticipated releases are fully changed every 7 days.)

**There are no warranties or guarantees when running this script. It is your responsibility to ensure that all domains resolve correctly and that your database doesn't get messed up.**

## Arr, deduplication, and cross-seed functionality with Upgraderr

:::info Heads up
This is meant for any kind of user. There is no configuration, and it's nearly impossible to make a mistake so long as the guide is followed with the modest amount of care.
:::

## What is this

Upgraderr is a title parser that matches existing titles present in your qBittorrent client with the title submitted and returns a HTTP return code. The return codes indicate an action to perform next, if applicable.

### Arr functionality

On any filter, you may utilize the external tab as a pre-filter. Using this with a return code of 200 permits any unique titles to be added, or if they're a quality upgrade. This also acts as a deduplicator should you wish.

Coupling this with the extensive filtering built-in to autobrr allows you to specify qualities to stop accepting upgrades at, should you wish. This allows you to replace applications such as the "infamous" Sonarr / Radarr.

On the external Webhook action, utilize the following payload, replacing the host(s), user and password with your configuration. The expected return code is 200.
* Host: http://upgraderr.upgraderr:6940/api/upgrade
( Payload:
```
{ "host":"http://qbittorrent.cat:8080",
  "user":"zees",
  "password":"bsmom",
  "name":"{{ .TorrentName | js }}" }
```

### Cross-Seed functionality

At the time of this writing, Upgraderr has excellent cross-seed functionality that runs in milliseconds. Presently there's a partial matcher implemented, where if 80% of the data matches the existing torrent, the new torrent will have the conflicting files (should they exist) renamed, to not corrupt the existing torrent.

On the external Webhook action, utilize the following payload, replacing the host(s), user and password with your configuration. The expected return code is 250.
* Host: http://upgraderr.upgraderr:6940/api/upgrade
* Payload:
```
{ "host":"http://qbittorrent.cat:8080",
  "user":"zees",
  "password":"bsmom",
  "name":"{{ .TorrentName | js }}" }
```

Once the pre-hook succeeds, create a Webhook action, replacing the same variables as before.
* Host: http://upgraderr.upgraderr:6940/api/cross
* Payload:
```
{  "host":"http://qbittorrent.cat:8080",
   "user":"zees",
   "password":"bsmom",
   "name":"{{ .TorrentName | js }}",
   "hash":"{{ .TorrentHash }}",
   "torrent":"{{ .TorrentDataRawBytes | js }}" }
```

### Finally

This is a toolchest, other functionality can be achieved by using other return codes, and attaching other tools to actions taken by the application.

More Information: https://github.com/kylesanderson/upgraderr
