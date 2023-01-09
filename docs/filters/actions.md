---
title: Filter Actions
description: How to setup and use filter actions
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

Read more about setup of [download clients](/configuration/download-clients) before continuing.

When adding, updating or removing actions on a filter, make sure to save.

Many of the action fields have support for macros to build dynamic values. [Macros](#macros)

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
- Limit download and upload speed: optional
- Add as paused: default false

If category is set, then qBittorrent will control the save path. Override save location by setting `save path`.

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

Select the type, and then the client. Read more about setup in [download clients setup](/configuration/download-clients).

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

#### ftp

There is no native ftp upload action but you can get around this with a Exec action and `scp` or other tool.

Cmd: `scp`
Args: `{{ .TorrentPathName }} <username>@<hostname>:<destination path`

## Macros

The following fields can use macros to transform/add values from metadata.

Try these variables out in the any of the following fields.

- Watch folder
- Label
- Tags
- Category
- Save Path
- Exec arguments

These variables are implemented using the Go template engine. This is an extremely powerful scripting platform that can perform operations, evaluations, and manipulate values at the user configuration level. Further information on the functionality of this platform can be found [here](https://pkg.go.dev/text/template).

### Available variables

| Variable               |  Description                               |
| ---------------------- | ------------------------------------------ |
| `{{.CurrentDay}}`      | Current Day                                |
| `{{.CurrentHour}}`     | Current Hour                               |
| `{{.CurrentMinute}}`   | Current Minute                             |
| `{{.CurrentMonth}}`    | Current Month                              |
| `{{.CurrentSecond}}`   | Current Second                             |
| `{{.CurrentYear}}`     | Current Year                               |
| `{{.Episode}}`         | Parsed episode                             |
| `{{.FilterName}}`      | Filter name                                |
| `{{.HDR}}`             | Parsed HDR (DV, HDR, HDR10)                |
| `{{.Indexer}}`         | Indexer                                    |
| `{{.Resolution}}`      | Parsed resolution (1080p)                  |
| `{{.Season}}`          | Parsed season                              |
| `{{.Size}}`            | Size                                       |
| `{{.Source}}`          | Parsed source (BluRay, WEB-DL)             |
| `{{.Title}}`           | Parsed title (That Movie)                  |
| `{{.TorrentHash}}`     | Torrent hash                               |
| `{{.TorrentName}}`     | Release name as announced                  |
| `{{.TorrentPathName}}` | Path to downloaded .torrent file in `/tmp` |
| `{{.TorrentUrl}}`      | Full url to download torrent               |
| `{{.Year}}`            | Parsed year                                |

### Examples

Simple examples of this extensive functionality can be found below.

- Escape torrent name - `{{ .TorrentName | js }}`

#### Dynamic categories in qBittorrent

Dynamic resolution for eg movies or tv. Very useful to keep things separated and easy to mange. With well named releases this works great as a Plex library.

Category: `movies-{{ .Resolution }}` = `movies-1080p`, `movies-2160p`

#### Tags

Dynamic tags based on indexer, resolution or other

- Tags: `{{ .Indexer }}` = `mockindexer`
- Tags: `{{ .Resolution }}` = `2160p`

#### Dynamic date and time

Could be used to build dynamic save paths etc.

- `{{ .CurrentYear }}`
- `{{ .CurrentMonth | printf "%02d"}}`

#### Dynamic movie filter with hdr/dv

Category: `movies-{{ .Resolution }}{{ if .HDR }}-{{ .HDR }}{{ end }}`
