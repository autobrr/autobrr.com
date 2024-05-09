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
    Transmission,
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

A configured action is what autobrr will push a successful match to. Each filter supports multiple actions, just in case you need to send to multiple clients or run custom commands as well. Actions are configured in the Action tab inside your filter.

Whether you're adding, updating, or removing actions in a filter, remember to **save** the filter afterwards to ensure your changes take effect.

### Macros

Many of the action fields have support for [macros](../filters/macros.md), which allow you to enhance your workflow significantly by providing custom logic/data processing to the input data provided by autobrr.

The [macro section](../filters/macros.md) has been moved to its own page.

## Supported actions

- qBittorrent
- Deluge (v1+ and v2)
- Transmission
- Porla
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
- **Category**: *optional*  
- **Tags**: *optional*

:::tip
If a category is set, then qBittorrent will control the save path. Override the save location by setting a save path if needed.
:::

#### Rules: {#qbittorrent-rules}

- **Limit download and upload speed**: *optional*  
  Takes any integer as a number. Given in `KiB/s`.
- **Ratio limit**: *optional*  
  Takes any integer or floating point number with `,` as decimal separator.  
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

:::info
Built-in re-announce will make sure it works with initially broken trackers.
:::

### Deluge

Supports both v1+ and v2+ clients.

Send to one or multiple local or remote instances of Deluge.

#### Available options: {#deluge-available-options}

- **Save path**: *optional*  
- **Label**: *optional* (must exist in Deluge in order to work)
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

### Transmission

Send to one or multiple local or remote instances of Transmission.

#### Available options: {#transmission-available-options}

- **Save Path**: *optional*
- **Add as Paused**: *default false*

### Porla

Send to one or multiple local or remote instances of Porla.

#### Available options: {#porla-available-options}

- **Save Path**: *optional*
- **Preset**: *A case-sensitive preset name as configured in Porla.*

#### Rules: {#porla-rules}

- **Limit download and upload speed**: *optional*  
  Takes any integer as a number. Given in `KiB/s`.

### Radarr, Sonarr, Lidarr, Readarr and Whisparr

Autobrr supports the ability to push directly to the *arr suite of services. Both local and remote instances.

Select the type, and then the client. Read more about setup in [download clients setup](../configuration/download-clients/dedicated).

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

### Custom Commands / Exec

For custom commands, it's best to specify the full path to the binary or program you want to run. This ensures that the command can be executed correctly, regardless of the user's environment. You can also include your own static variables to make the command more dynamic and flexible.

:::tip
For example, you could use:

- `race-{{.Indexer}}/{{.Resolution}}` as a tag or category
- `/Movies/{{.Resolution}}` as a save path

:::

### FTP / SFTP

Although autobrr does not have a native FTP upload action, you can achieve this functionality by using an Exec action and a tool like `scp`.

:::tip
Use the following command and arguments to set up an Exec action for FTP/SFTP uploads:

- Command: `scp`
- Args: `{{ .TorrentPathName }} <username>@<hostname>:<destination path>`

:::

![FTP/SFTP](/img/SCP.png "Exec action for FTP/SFTP upload")
