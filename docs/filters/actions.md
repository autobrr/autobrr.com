---
title: Filter Actions
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

# Actions

A configured action is what your autodl does with a successful push. You can send it any of the supported actions. Each filter supports multiple actions just incase you need to send to multiple clients, or run custom commands as well.

Make sure you've set up a [download client](./configuration/download-clients/dedicated) before continuing further.

Whether you're adding, updating or removing actions on a filter, make sure to <strong>save</strong> the filter afterwards.

### Macros

Many of the action fields have support for [macros](./filters/macros), which allow you to enhance your workflow significantly by providing custom logic/data processing to the input data provided by autobrr.

This [section](./filters/macros) has been moved to its own page.

## Supported actions

- qBittorrent
- Deluge (v1+ and v2)
- Transmission
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

Available options:

- Save path: optional
- Category: optional
- Tags: optional

:::note

If a category is set, then qBittorrent will control the save path.  
Override the save location by setting a save path.

:::

#### Rules

- Limit download and upload speed: optional  
  &ensp;&ensp;&ensp;Takes any integer as a number. Given in `KiB/s`.
- Ratio limit: optional  
  &ensp;&ensp;&ensp;Takes any integer or floating point number with `,` as decimal separator.  
  &ensp;&ensp;&ensp;The downloaded torrent will be stopped when the Ratio Limit is reached.
- Seed time limit: optional  
  &ensp;&ensp;&ensp;Takes any integer as a number. Given in minutes.
- Add paused: default false
- Content layout: optional  
  &ensp;&ensp;&ensp;Tells qBittorrent if it should keep the original torrent content layout,  
  &ensp;&ensp;&ensp;if it should create a subfolder for the downloaded torrent,  
  &ensp;&ensp;&ensp;or if it should refrain from creating a subfolder.
- Ignore client rules: default false  
  &ensp;&ensp;&ensp;Download the torrent even though the maximum active downloads  
  &ensp;&ensp;&ensp;configured in the client settings have been reached.
- Skip hash check: default false

Built in re-announce will make sure it works with initially broken trackers.

### Deluge

Supports both v1+ and v2+ clients.

Send to one or multiple local or remote instances of Deluge.

Available options:

- Save path: optional
- Label: optional (must exist in Deluge in order to work)
- Limit download and upload speed: optional
- Add as paused: default false

### rTorrent

Send to one or multiple local or remote instances of rTorrent.

Available options:

- Save path: optional
- Label: optional

### Transmission

Send to one or multiple local or remote instances of Transmission.

Available options:

- Save path: optional
- Add as paused: default false

### Radarr, Sonarr, Lidarr, Readarr and Whisparr

Autobrr supports the ability to push directly to the \*arr suite of services.

Could be useful to do some basic filtering before sending.

Select the type, and then the client. Read more about setup in [download clients setup](./configuration/download-clients/dedicated).

Supports both local and remote instances.

### Test

Simple action which will not download anything but useful for filter testing.

### Watch dir

For torrent clients not yet supported this is the next best thing.

By default if you only put the folder like `/home/USER/watch/` it will use the tmp file format like `autobrr-000.torrent`.

#### Dynamic name

Watch dir can take additional variables to dynamically build the name. If you want to change this and for example get the release name, you can do the following:

    /home/user/torrent/torrent-backup/{{.Indexer}}-{{.TorrentName}}.torrent

If the indexer is called `MockIndexer` and the release `Some.Release.2022.1080p.BluRay.x264.DTS-GROUP`

It will generate the file like `MockIndexer-Some.Release.2022.1080p.BluRay.x264.DTS-GROUP.torrent`.

### Custom commands / Exec

For custom commands you should specify the full path to the binary/program you want to run. And you can include your own static variables. For example:

- `race-{{.Indexer}}/{{.Resolution}}` as a tag or Category.
- `/Movies/{{.Resolution}}` as a save path.

### FTP / SFTP

There is no built in native FTP upload action but you can get around this with a Exec action and `scp` or other tool.

- Command: `scp`
- Args: `{{ .TorrentPathName }} <username>@<hostname>:<destination path>`

![FTP/SFTP](/img/SCP.png "Exec action")
