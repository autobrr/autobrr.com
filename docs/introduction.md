---
sidebar_position: 1
sidebar_label: Introduction
title: Introduction
pagination_next: installation/linux
---

autobrr is the modern download automation tool for torrents.

With inspiration and ideas from tools like trackarr, autodl-irssi and flexget we built one tool that can do it all, and then some.

As of right now, autobrr features:

- Support for 37+ trackers with IRC announces
- Torznab/RSS support via Prowlarr to easily get access to hundreds of trackers
- Powerful but simple filtering with RegEx support (like in autodl-irssi)
- Easy to use and mobile friendly web UI (with dark mode!) to manage everything
- Built on Go and React making autobrr lightweight and perfect for supporting multiple platforms (Linux, Windows, macOS) on different architectures (e.g. x86, ARM)
- Great container support (Docker, k8s/Kubernetes)
- Proper database with either SQLite or Postgres
- Notifications (Discord, Telegram, Notifiarr)
- One autobrr instance can communicate with multiple clients (both torrent and \*arr) on remote servers
- Base path / Subfolder (and subdomain) support for convenient reverse-proxy support

Available download clients and actions

- qBittorrent (with built in re-announce, categories, rules, max active downloads, etc)
- Deluge v1+ and v2+
- Transmission
- Sonarr, Radarr, Lidarr and Whisparr (pushes releases directly to them and gets in the early swarm, instead of getting them via RSS when it's already over)
- Watch folder
- Exec custom scripts
- Webhook

## Planned features

- RSS support
- Automatic cross-seeding of existing releases

## About

The development of autobrr started in Early 2020, entering rapid development in Summer 2021 due to dissatisfaction with needing 3+ tools to do one job. Autobrr has since gained quite a bit of traction and has a growing community supporting the project.

Autobrr was developed with resource consumption in mind. The software uses API calls to reduce unnecessary downloads of .torrent files from sites like BTN, RED, PTP, and GGn. On other sites, it will download the .torrent only if the information is not present in the announce message.
