---
sidebar_position: 1
sidebar_label: Introduction
title: Introduction
pagination_next: installation/linux
---

autobrr is the modern download automation tool for torrents.

With inspiration and ideas from tools like trackarr, autodl-irssi and flexget we built one tool that can do it all, and then some.

As of right now, autobrr includes:

- Support for 37+ trackers with IRC announces
- Torznab/RSS support via Prowlarr to easily get access to hundreds of trackers
- Powerful but simple filtering with RegEx support (like in autodl-irssi)
- Easy to use and mobile friendly web UI (with dark mode!) to manage everything
- Built on Go and React which makes it resource friendly and perfect to support multi-platform (Linux, Windows, macOS) systems on different architectures (e.g. x86, ARM)
- Great container support (Docker, k8s/Kubernetes)
- Proper database with either SQLite or Postgres
- Notifications (Discord, Telegram, Notifiarr)
- One autobrr instance can communicate with multiple (torrent, \*arr) clients on remote servers
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

The development of what would become autobrr started early 2020 and became usable late summer 2021. It has since then kept gaining in popularity, with a growing userbase and community surrounding it.

One of the goals was to build a program that would not put unnecessary strain on trackers, and autobrr has achieved that by using API for additional metadata not available in the announce for trackers like BTN, RED, PTP and GGN. And for others it will download the actual .torrent files only if they're actually needed.
