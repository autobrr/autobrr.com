---
sidebar_position: 1
sidebar_label: Introduction
pagination_next: quick-start
title: Introduction
description: With inspiration and ideas from tools like trackarr, autodl-irssi and flexget we built one tool that can do it all, and then some. autobrr is the modern download automation tool for torrents.
keywords:
  [
    autobrr,
    indexers,
    trackers,
    torrents,
    bittorrent,
    racing,
    p2p,
    autodl-irssi,
    replacement,
    autodl replacement,
    autodl-irssi replacement,
    irssi,
    trackarr,
    flexget,
    irc,
    announce,
    torznab,
    newznab,
    prowlarr,
    rss,
    Golang,
    regex,
    docker,
    discord,
    telegram,
    notifiarr,
    qbittorrent,
    deluge,
    transmission,
    sonarr,
    radarr,
    lidarr,
    whisparr,
    webhook,
    cross-seed,
    seeding,
    x-seed,
    xseed,
    cabal,
    api,
    license,
  ]
---

With inspiration and ideas from tools like trackarr, autodl-irssi and flexget we built one tool that can do it all, and then some.

autobrr is the modern download automation tool for torrents.

## What is autobrr and how does it fit into the ecosystem? {#what-is-autobrr}

We can start by talking about torrent trackers (hereby referred to as indexers) and maintaining ratio.
You are required to maintain a ratio with most indexers. Ratio is built by seeding your torrents.
The earlier you're seeding a torrent, the more peers you make yourself available to on that torrent.

Software like Radarr and Sonarr utilizes RSS to look for new torrents. RSS feeds are updated regularly, but too slow to let you be a part of what we call the initial swarm of a torrent. This is where autobrr comes into play.

Many indexers announce new torrents on their [IRC](./configuration/irc) channels the second it is uploaded to the site. autobrr monitors such channels in real time and grabs the torrent file as soon as it's uploaded based on certain conditions (hereby referred to as [filters](./filters/basics)) that you set up within autobrr. It then sends that torrent file to a download client of your choice via an [action](./filters/actions) set within the filter. A download client can be anything from qBittorrent and Deluge, to Radarr and Sonarr, or a watch folder.

When your autobrr filter is set to send the torrent files to Radarr and Sonarr, they will decide if it's something they want, and then forward it to the torrent client they are set up with.

autobrr can also send matches (torrent files that meets your filter's criteria) directly to torrent clients like qBittorrent, Deluge, r(u)Torrent and Transmission. You don't need to use the \*arr suite to make use of autobrr.

### The typical workflow

1. autobrr monitors IRC channels and/or RSS feeds for new torrents that fits your criteria set within your autobrr [filters](./filters/basics).
2. A successful match is forwarded to your [download client](./configuration/download-clients/dedi) via an [action](./filters/actions) set inside your filters.
3. If the download client is a torrent client, then the torrent client accepts the torrent file and starts downloading it.
4. If the download client is Radarr (or any other kind of \*arr), then Radarr will check that torrent file and see if it meets Radarr's criteria.

   Criteria like:

   - Is the movie monitored?
   - Is the torrent autobrr sent considered an upgrade of your existing version of that movie?

   Radarr will reject it if it doesn't meet its criteria.
   If Radarr accepts it, then it will forward it to its download client and handle the rest from here.

5. You are now among the very first people seeding this torrent which means you will have more peers connecting to you than if you'd be grabbing that file after the initial swarm. This results in a higher ratio on your indexers.

### RSS support for indexers without an IRC announcer

A lot of indexers do not announce new torrents in an IRC channel. You can still make use of these indexers with autobrr since it has built in support for feeds as well. We support Torznab, Newznab, as well as regular RSS feeds.
RSS indexers are treated the same way as regular indexers within autobrr.

This isn't needed if your use case is feeding the \*arrs only. Since they have RSS support already.

## Features

As of right now, autobrr features:

- Support for 70+ trackers with IRC announces
- RSS and Torznab/Newznab support via Prowlarr to easily get access to hundreds of indexers
- Powerful but simple filtering with RegEx support (like in autodl-irssi)
- Easy to use and mobile friendly web UI (with dark mode!) to manage everything
- Built on Go and React making autobrr lightweight and perfect for supporting multiple platforms (Linux, FreeBSD, Windows, macOS) on different architectures (e.g. x86, ARM)
- Great container support (Docker, k8s/Kubernetes)
- Database engine supporting both PostgreSQL and SQLite
- Notifications (Discord, Telegram, Notifiarr)
- One autobrr instance can communicate with multiple clients (both torrent and \*arr) on remote servers
- Base path / Subfolder (and subdomain) support for convenient reverse-proxy support

Available download clients and actions

- qBittorrent (with built-in re-announce, categories, rules, max active downloads, etc.)
- Deluge v1+ and v2+
- rTorrent / ruTorrent
- Transmission
- Porla
- Sonarr, Radarr, Lidarr, Readarr and Whisparr (pushes releases directly to them and gets in the early swarm, instead of getting them via RSS when it's already over)
- Watch folder
- Exec custom scripts
- Webhook

## Planned features

- Automatic cross-seeding of existing releases

## About

The development of autobrr started in Early 2020, entering rapid development in Summer 2021 due to dissatisfaction with needing 3+ tools to do one job. Autobrr has since gained quite a bit of traction and has a growing community supporting the project.

Autobrr was developed with resource consumption in mind. The software uses API calls to reduce unnecessary downloads of .torrent files from sites like BTN, RED, PTP, and GGn. On other sites, it will download the .torrent only if the information is not present in the announce message.

### License

autobrr is licensed under the GNU General Public License v2.0.

The GNU GPL is the most widely used free software license and has a strong copyleft requirement. When distributing derived works, the source code of the work must be made available under the same license. There are multiple variants of the GNU GPL, each with different requirements.
