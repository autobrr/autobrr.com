---
sidebar_position: 2
---

# Actions

Actions are set per filter for maximum flexibility. Filters support multiple actions. Very useful if you want to send to multiple clients, or run custom commands as well.

Read more about setup of [ download clients ](../configuration/download-clients ) before continuing.

When adding, updaing or removing actions on a filter, make sure to save.

## Supported actions

  * qBittorrent
  * Deluge (v1+ and v2)
  * Radarr
  * Sonarr
  * Lidarr
  * Save to watch folder
  * Run custom commands
  * Test (logs result if matched. Does not download torrent files)

### qBittorrent

Send to one or multiple local or remote instances of qBittorrent.

Available options:
* Save path: optional
* Category: optional
* Limit download and upload speed: optional
* Add as paused: default false

If category is set, then qBittorrent will control the save path. Override save location by setting `save path`.

Built in re-announce will make sure it works with initially broken trackers.

### Deluge

Supports both v1+ and v2+ clients.

Send to one or multiple local or remote instances of Deluge.

Available options:
* Save path: optional
* Label: optional
* Limit download and upload speed: optional
* Add as paused: default false

Built in re-announce will make sure it works with initially broken trackers.

### Radarr, Sonarr and Lidarr

Autobrr supports the ability to push directly to the `*arr` suite of services.

Could be useful to do some basic filtering before sending.

Select the type, and then the client. Read more about setup in [ download clients setup ](../configuration/download-clients ).

Supports both local and remote instances.

### Test

Simple action which only logs OK.

### Watch dir

For torrent clients not yet supported this is the next best thing. Useful if you want to use rTorrent, Transmission etc

Takes a path to a writeable folder.

### Available variables

  - `{{ .TorrentPathName }}`: Path to downloaded .torrent file in `/tmp`.
  - `{{ .TorrentName }}`: Release name as announced
  - `{{ .TorrentUrl }}`: Full url to download torrent
  - `{{.Indexer}}`
  - `{{.TorrentHash}}`
  - `{{.Resolution}}`
  - `{{.Source}}`
  - `{{.HDR}}`
  - `{{.Season}}`
  - `{{.Episode}}`
  - `{{.Year}}`
  - `{{.Month}}`
  - `{{.Day}}`
  - `{{.Hour}}`
  - `{{.Minute}}`
  - `{{.Second}}`

Try these variables out in the any of the following fields.

   - Watch folder
   - Label
   - Tags
   - Category
   - Save Path
   - Exec arguments

These variables are implemented using the go template engine. This is an extremely powerful scripting platform that can perform operations, evaluations, and manipulate values at the user configuration level. Further information on the functionality of this platform can be found [here](https://pkg.go.dev/text/template).

Simple examples of this extensive functionality can be found below.

   - `{{ .TorrentName | js }}`
   - `{{.Month | printf "%02d"}}`

### Custom commands / Exec

For custom commands you should specify the full path to the binary/program you want to run. And you can include your own static variables. For example:

`race-{{.Indexer}}/{{.Resolution}}` as a tag or Category.

`/Movies/{{.Resolution}}` as a save path.
