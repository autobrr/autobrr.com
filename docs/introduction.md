---
sidebar_position: 1
sidebar_label: Introduction
title: Introduction
pagination_next: installation/linux
---

autobrr is the modern download automation tool for torrents and a replacement for the old and unmaintained autodl-irssi.

But autobrr isn't only a replacement, it's even more than that. In fact, autobrr can replace the functionality of autodl-irssi, flexget and trackarr all in one.

As of right now, autobrr includes:

- Support for 37+ trackers with IRC announces
- RSS and Torznab (via Prowlarr) to support the rest
- Powerful filtering with RegEx support (like in autodl-irssi)
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

## About

It's been in development for about 2 years and been widely used since late summer 2021 with a growing userbase and community around it.

One of the goals was to build a program that would put less strain on trackers compared to autodl-irssi, and autobrr has achived that by using API for trackers like BTN, RED, PTP and GGN, downloading the actual .torrent files only if they're actually needed.

This is in comparison to autodl-irssi which would download all files all the time in order to parse different values with no way to change that behavior.
