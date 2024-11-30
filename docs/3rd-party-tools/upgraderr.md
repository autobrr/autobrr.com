---
id: upgraderr
sidebar_label: Upgraderr
title: Upgraderr
description: arr, deduplication andd cross-seed functionality.
keywords: [cross-seed,duplicates,deduplication,arr]
---

## Arr, deduplication, and cross-seed functionality {#upgraderr}

:::info Heads up
This is meant for any kind of user. There is no configuration, and it's nearly impossible to make a mistake so long as the guide is followed with the modest amount of care.
:::

### What is this {#what-is-upgraderr}

Upgraderr is a title parser that matches existing titles present in your qBittorrent client with the title submitted and returns a HTTP return code. The return codes indicate an action to perform next, if applicable.

### Arr functionality {#upgraderr-arr-functionality}

On any filter, you may utilize the external tab as a pre-filter. Using this with a return code of 200 permits any unique titles to be added, or if they're a quality upgrade. This also acts as a deduplicator should you wish.

Coupling this with the extensive filtering built into autobrr, you can define the quality above which you no longer want to accept upgrades, if you wish. This allows you to replace applications such as Sonarr / Radarr.

On the external Webhook action, utilize the following payload, replacing the host(s), user and password with your configuration. The expected return code is 200.

- Host:

```
http://upgraderr:6940/api/upgrade
```

- Payload:

```json
{
  "host": "http://qbittorrent:8080",
  "user": "username",
  "password": "password",
  "name": {{ toRawJson .TorrentName }}
}
```

### Cross-Seed functionality {#upgraderr-cross-seed-functionality}

At the time of this writing, Upgraderr has excellent cross-seed functionality that runs in milliseconds.
Currently, a partial matching system is in place where if 80% of the data matches an existing torrent, any conflicting files in the new torrent (if they exist) will be renamed to avoid corrupting the original torrent.

On the external Webhook action, utilize the following payload, replacing the host(s), user and password with your configuration. The expected return code is 250.

- Host:

```
http://upgraderr:6940/api/upgrade
```

- Payload:

```json
{
  "host": "http://qbittorrent:8080",
  "user": "username",
  "password": "password",
  "name": {{ toRawJson .TorrentName }}
}
```

Once the pre-hook succeeds, create a Webhook action, replacing the same variables as before.

- Host:

```
http://upgraderr:6940/api/cross
```

- Payload:

```json
{
  "host": "http://qbittorrent:8080",
  "user": "username",
  "password": "password",
  "name": {{ toRawJson .TorrentName }},
  "hash": "{{ .TorrentHash }}",
  "torrent": "{{ .TorrentDataRawBytes | js }}"
}
```

### Finally {#upgraderr-final-words}

This is a toolchest, other functionality can be achieved by using other return codes, and attaching other tools to actions taken by the application.

More Information: [github.com/kylesanderson/upgraderr](https://github.com/kylesanderson/upgraderr)
