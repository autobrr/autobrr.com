---
sidebar_label: 3rd party tools
sidebar_position: 6
title: 3rd party tools
description: 3rd party tools for autobrr
keywords: [cross-seed, omegabrr, regbrr]
---

## Cross-Seed implementation

You can utilize autobrr with [cross-seed](https://github.com/cross-seed/cross-seed) to automatically cross-seed torrents previously matched by autobrr from indexer A with identical releases announced from indexer B and C.

If you're not familiar with cross-seed already, we suggest you read their [documentation](https://cross-seed.org) before you continue.

You can install cross-seed in several ways. Docker is recommended, but installing via npm or yarn (requires node 14 or greater) is also fine.

To make autobrr communicate with cross-seed, you need to run cross-seed in [daemon mode](https://www.cross-seed.org/docs/basics/daemon).

In this guide we will do this in a [tmux](https://github.com/tmux/tmux/wiki) screen, but you can also set it up with [regular screen](https://www.cross-seed.org/docs/basics/daemon#screen), [systemd](https://www.cross-seed.org/docs/basics/daemon#systemd-linux) or [docker](https://www.cross-seed.org/docs/basics/daemon#docker).

### Install cross-seed and its dependencies

Since cross-seed doesn't have API auth, we need to make sure it's port isn't open to the web. You can use iptables or UFW to solve this. Cross-seed daemon uses port 2468 by default.

    ```bash
    #install node as root
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - &&\
    sudo apt-get install -y nodejs

    #install cross-seed
    npm install -g cross-seed
    ```

### Generate config and make sure the port isn't open to the web

     ```bash
        # generate a cross-seed config file
        cross-seed gen-config

        # open the file
        nano /home/$USER/.cross-seed/config.js

        # Make sure these parameters are set
        # outputDir needs to exist, but will not be used
        torrentDir: "/home/$USER/.local/share/qBittorrent/BT_backup"
        outputDir: "/home/$USER/torrentfiles"
        action: "inject"
        qbittorrentUrl: "http://127.0.0.1:10963"

        # Make sure the port is not exposed to the internet
        iptables -A INPUT -p tcp --dport 2468 -s 127.0.0.1 -j ACCEPT
        iptables -A INPUT -p tcp --dport 2468 -j DROP

        ```

1. Create a new tmux screen and enter it

        ```bash
        tmux new -s cross-seed
        tmux a -t cross-seed
        ```

2. Start the daemon

        ```bash
        cross-seed daemon
        ```

:::warning Caution

These scripts are not officially supported, nor do we guarantee that we can help you make them work. You should understand how these work if you choose to use them.

Please do not contact the creator of these scripts for support, but feel free to ask in our [Discord](https://discord.gg/WQ2eUycxyT) for community support.

:::

## arrbrr (deprecated)

:::caution
arrbrr has been depcreated in favor for [autobrr/omegabrr](https://github.com/autobrr/omegabrr) which does the same thing and more.
:::

Arrbrr imports your monitored movies and shows from your \*arrs to assigned filters in autobrr.

Essentially, you setup the variables and run it via a crontab job. It will then check to see if each item is monitored in the \*arrs, and if it is, it will be added to the filter for autobrr in a somewhat compliant way.

Please read the code before running the script, do not put this directly into a terminal without understanding what it does.

### Download the script

`arrbrr_swizzin.sh` and `arrbrr_docker.sh` can be found [here <AiFillGithub />](https://gist.github.com/brettpetch/9475c9117e0d58791c02587529786ad9)  
For Synology and other distributions which do not having iconv, please use [this <AiFillGithub />](https://gist.github.com/quorn23/222a62c7c6141eabde18f8a1f626b0de)

:::info
`arrbrr_swizzin.sh` is meant for installs which utilize a base path in the reverse proxy.  
`arrbrr_docker.sh` is meant for installs which do **not** utilize a base path in the reverse proxy.
:::

### Installation

1. Create filters in autobrr with names that `arrbrr.sh` can match.
2. Set the path for the autobrr database in `arrbrr.sh`.
3. Input the names of the filters you created in step 1 at the appropriate variables in `arrbrr.sh`.
4. Collect the API info from your \*arrs.
5. Input the necessary info for your \*arrs into the provided blocks in `arrbrr.sh`.
6. Setup the actions for each filter within autobrr.
7. Run the script and setup a cronjob.

## regbrr

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
