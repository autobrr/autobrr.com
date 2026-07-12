---
title: Actions
description: A configured action is what your autodl does with a successful push. You can send it any of the supported actions. Each filter supports multiple actions just in case you need to send to multiple clients, or run custom commands as well.
keywords:
  [
    autobrr,
    filters,
    actions,
    qBittorrent,
    qbit,
    Deluge,
    rTorrent,
    Transmission,
    Porla,
    SABnzbd,
    NZBGet,
    Radarr,
    Sonarr,
    Lidarr,
    Whisparr,
    Webhook,
    watch dir,
    watch folder,
  ]
sidebar_label: Actions
pagination_label: Filters - Actions
---

:::note
Make sure you've set up a [download client](../configuration/download-clients/dedicated) before continuing further.
:::

import ActionClient from '/snippets/diagrams/action-client.mdx';
import ActionReannounce from '/snippets/diagrams/action-reannounce.mdx';
import ActionArr from '/snippets/diagrams/action-arr.mdx';

A configured action is what autobrr will push a successful match to. Each filter supports multiple actions, just in case you need to send to multiple clients or run custom commands as well. Actions are configured in the Action tab inside your filter.

The most common setup is sending straight to a download client, with the category, save path and limits you set on the action:

<ActionClient/>

Whether you're adding, updating, or removing actions in a filter, remember to **save** the filter afterwards to ensure your changes take effect.

### Macros

Many of the action fields have support for [macros](../filters/macros.md), which allow you to enhance your workflow significantly by providing custom logic/data processing to the input data provided by autobrr.

The [macro section](../filters/macros.md) has been moved to its own page.

## Supported actions

- qBittorrent
- Deluge (v1+ and v2)
- rTorrent
- Transmission
- Porla
- SABnzbd (Usenet)
- NZBGet (Usenet)
- Radarr
- Sonarr
- Lidarr
- Readarr
- Whisparr
- Save to watch folder
- Exec - Run custom commands
- Webhook - Post a payload to some http url
- Test (logs result if matched. Does not download torrent files)

### qBittorrent

Send to one or multiple local or remote instances of qBittorrent.

#### Available options: {#qbittorrent-available-options}

- **Save path**: *optional*  
- **Download path**: *optional*  
  A separate path for incomplete downloads. If you use categories with Automatic Torrent Management, qBittorrent controls this instead.
- **Category**: *optional*  
- **Tags**: *optional*

:::tip
If a category is set, then qBittorrent will control the save path. Override the save location by setting a save path if needed.
:::

#### Rules: {#qbittorrent-rules}

- **Limit download and upload speed**: *optional*  
  Takes any integer as a number. Given in `KiB/s`.
- **Ratio limit**: *optional*  
  Takes an integer or decimal number in increments of `0.25`, with `.` as decimal separator, e.g. `2.0`.  
  The downloaded torrent will be stopped when the ratio limit is reached.
- **Seed time limit**: *optional*  
  Takes any integer as a number. Given in minutes.
  The downloaded torrent will be stopped when the seed time limit is reached.
- **Add paused**: *default false*
- **Content layout**: *optional*  
  Tells qBittorrent if it should:  
    - Keep the original torrent content layout,  
    - Create a subfolder for the downloaded torrent,  
    - Refrain from creating a subfolder.
- **Ignore client rules**: *default false*  
  Download the torrent even though the maximum active downloads configured in the client settings have been reached.
- **Skip hash check**: *default false*
- **Download first and last pieces first**: *default false*
- **Priority**: *optional*  
  Choose between:
  - Top of queue
  - Bottom of queue
  - Disabled

:::warning Heads up!
When using the Priority feature, Torrent Queueing will be automatically enabled in qBit if it is disabled. Ensure you set your preferred limits for Torrent Queueing.
:::

#### Announce: {#qbittorrent-announce}

Built-in re-announce makes sure the torrent works with initially broken trackers. When you race, the .torrent often reaches the client before the tracker has registered it; autobrr keeps re-announcing until the tracker responds:

<ActionReannounce/>

It is enabled by default and can be tuned per action:

- **Disable reannounce**: *default false*  
  Turn off the built-in re-announce for this action.
- **Reannounce interval**: *optional*  
  Seconds between attempts. `7` is the default and recommended.
- **Max attempts**: *optional*  
  How many times to retry before giving up. Default `50`.
- **Delete stalled**: *default false*  
  Remove the torrent from the client if it is still not working after the maximum attempts.

:::info
Re-announce is skipped when the torrent is added with **Add paused** enabled.
:::

### Deluge

Supports both v1+ and v2+ clients.

Send to one or multiple local or remote instances of Deluge.

#### Available options: {#deluge-available-options}

- **Save path**: *optional*  
- **Label**: *optional* (created automatically if it does not exist; requires the Label plugin to be enabled in Deluge, otherwise the label is skipped)
- **Add as paused**: *default false*
- **Skip hash check (v2 only)**: *default false*

#### Rules: {#deluge-rules}

- **Limit download and upload speed**: *optional*  
  Takes any integer as a number. Given in `KiB/s`.

### rTorrent

Send to one or multiple local or remote instances of rTorrent.

#### Available options: {#rtorrent-available-options}

- **Save path**: *optional*
- **Label**: *optional*
- **Add paused**: *default false*  
  Adds the torrent in a stopped state.
- **Do not add torrent name to path**: *default No*  
  When set to Yes, the save path is used as the base directory, so no subfolder named after the torrent is created.

### Transmission

Send to one or multiple local or remote instances of Transmission.

#### Available options: {#transmission-available-options}

- **Save Path**: *optional*
- **Torrent Label(s)**: *optional*  
  Takes a comma separated list to apply multiple labels, e.g. `label1,label2`.
- **Add as Paused**: *default false*

#### Limits: {#transmission-limits}

- **Limit download and upload speed**: *optional*  
  Takes any integer as a number. Given in `KiB/s`.
- **Ratio limit**: *optional*  
  Seeding stops when the ratio is reached.
- **Seed time limit**: *optional*  
  Given in minutes. Set as Transmission's idle seed limit, meaning minutes of idle seeding rather than total seed time.

#### Announce: {#transmission-announce}

Works like the [qBittorrent re-announce](#qbittorrent-announce): enabled by default, with the same **Disable reannounce**, **Reannounce interval** (default `7` seconds), **Max attempts** (default `50`) and **Delete stalled** options.

:::info
Re-announce only runs when the torrent is added unpaused, and is skipped for magnet links.
:::

### Porla

Send to one or multiple local or remote instances of Porla.

#### Available options: {#porla-available-options}

- **Save Path**: *optional*
- **Preset**: *A case-sensitive preset name as configured in Porla.*

#### Rules: {#porla-rules}

- **Limit download and upload speed**: *optional*  
  Takes any integer as a number. Given in `KiB/s`.

### SABnzbd / NZBGet

Send NZBs to one or multiple local or remote instances of SABnzbd or NZBGet.

These actions only work for usenet (NZB) releases, for example from [Newznab or NZB-type RSS feeds](../configuration/feeds.md). Torrent releases cannot be sent to them.

#### Available options: {#sabnzbd-nzbget-available-options}

- **Category**: *optional* (must already exist in the client)

### Radarr, Sonarr, Lidarr, Readarr and Whisparr

Autobrr supports the ability to push directly to the *arr suite of services. Both local and remote instances.

*arr actions are special: the *arr decides whether it actually wants the release. If it approves, it grabs the release and autobrr stops there. If it rejects (say the show isn't monitored, or the release isn't an upgrade), autobrr moves on and tries the next filter that matches the release, without pushing to the same client again:

<ActionArr/>

Select the type, and then the client. Read more about setup in [download clients setup](../configuration/download-clients/dedicated).

Pushes to Radarr and Sonarr include indexer flags such as freeleech, so any indexer flag preferences you have configured on the arr side are applied.

:::tip
It could be useful to do some basic filtering.

See [examples here](/filters/examples).
:::

### Test

A simple action which will not download anything, but is useful for **filter testing**.

### Watch Dir

For torrent clients not yet supported, the watch dir is the next best option.

By default, if you only specify the folder path (e.g., `/home/USER/watch/`), it will use the temporary file format, such as `autobrr-000.torrent`.

:::tip Dynamic Naming

Watch Dir can utilize additional variables to dynamically build the file name. If you want to change the naming convention and, for example, include the indexer name and the torrent name, you can use the following format:

    `/home/user/torrent/torrent-backup/{{.Indexer}}-{{.TorrentName}}.torrent`

If the indexer is called `MockIndexer` and the release is `Some.Release.2022.1080p.BluRay.x264.DTS-GROUP`, the generated file name will be `MockIndexer-Some.Release.2022.1080p.BluRay.x264.DTS-GROUP.torrent`.
:::

:::caution
The watch folder action does not support magnet links and will error for magnet-only releases. Use a supported torrent client action for those indexers.
:::

### Custom Commands / Exec

For custom commands, it's best to specify the full path to the binary or program you want to run. This ensures that the command can be executed correctly, regardless of the user's environment. You can also include your own static variables to make the command more dynamic and flexible.

:::tip
For example, you could use:

- `race-{{.Indexer}}/{{.Resolution}}` as a tag or category
- `/Movies/{{.Resolution}}` as a save path

:::

### Webhook

Post a payload to an HTTP endpoint when the filter matches. Useful for integrating with your own scripts and services.

- **Endpoint**: the URL to send the request to, e.g. `http://127.0.0.1:5000/api/upgrade`
- **Payload (json)**: the JSON body to send, with full [macro](../filters/macros.md) support, e.g. `{ "name": "{{ .TorrentName }}" }`

The request is always an HTTP `POST` with `Content-Type: application/json`.

:::tip
If you want the result of the request to decide whether the filter matches, use an [external filter webhook](./external.md) instead. The Webhook action fires after the filter has already matched.
:::

### FTP / SFTP

Although autobrr does not have a native FTP upload action, you can achieve this functionality by using an Exec action and a tool like `scp`.

:::tip
Use the following command and arguments to set up an Exec action for FTP/SFTP uploads:

- Command: `scp`
- Args: `{{ .TorrentPathName }} <username>@<hostname>:<destination path>`

:::

![FTP/SFTP](/img/SCP.png "Exec action for FTP/SFTP upload")
