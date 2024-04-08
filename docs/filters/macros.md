---
title: Macros
description: Actions and external filters support a powerful templating engine which you might not want to miss out on!
keywords: [autobrr, filters, actions, macros, sprig, template, external]
sidebar_label: Macros
pagination_label: Filters - Macros
---

# Macros

Macros are a great way to enhance your workflow by adding custom logic/data processing to the input data provided by autobrr. Macros are currently supported by input fields by Filters, in two sections: <strong>Actions</strong> and <strong>External (filters)</strong>.

## Implementation

The template functionality is provided by the Go template engine. This is an extremely powerful scripting platform that can perform operations, evaluations, and manipulate values at the user configuration level. Further information on the functionality of this platform can be found [on its official documentation page](https://pkg.go.dev/text/template).

Autobrr enhances the Go template engine with [Sprig template functions](https://masterminds.github.io/sprig/) which provide the possibility for workflows involving more complex logic than initially provided by the Go template engine.

Please take note that Sprig has some of its own edge-cases:

> Most of the [Sprig] regex functions are unfortunately significantly broken when it comes to using them in pipelines. By broken I mean the functions technically work, but their usage I don't think would be intuitive to anyone, and that usage is difficult.
>
> -- <cite>[Open issue on Sprig's Github page](https://github.com/Masterminds/sprig/issues/86)</cite>

Another intricate edge-case from which Sprig suffers from is that every RegEx directive containing a backslash has to be escaped twice. Put another way, what was once a _single_ backslash, now becomes a _double_ backslash. For example, `\d` becomes `\\d`.

## Available functions

For the functions provided by the Go template engine, please reference its [its official documentation page](https://pkg.go.dev/text/template).

Available Sprig function, along with the relevant examples can be found [at Pydio.com](https://pydio.com/en/docs/cells-flows/sprig).

## Available variables

| Variable               | Description                                |
| ---------------------- | ------------------------------------------ |
| `{{.Artists}}`         | Artists                                    |
| `{{.Categories}}`      | Categories                                 |
| `{{.Category}}`        | Category                                   |
| `{{.CurrentDay}}`      | Current Day                                |
| `{{.CurrentHour}}`     | Current Hour                               |
| `{{.CurrentMinute}}`   | Current Minute                             |
| `{{.CurrentMonth}}`    | Current Month                              |
| `{{.CurrentSecond}}`   | Current Second                             |
| `{{.CurrentYear}}`     | Current Year                               |
| `{{.DownloadURL}}`     | Download URL                               |
| `{{.Episode}}`         | Parsed episode                             |
| `{{.FilterName}}`      | Filter name                                |
| `{{.Group}}`           | Release group                              |
| `{{.GroupID}}`         | GroupID                                    |
| `{{.HDR}}`             | Parsed HDR (DV, HDR, HDR10)                |
| `{{.Indexer}}`         | Indexer                                    |
| `{{.InfoUrl}}`         | Info URL                                   |
| `{{.Resolution}}`      | Parsed resolution (1080p)                  |
| `{{.Season}}`          | Parsed season                              |
| `{{.Size}}`            | Size (in bytes)                            |
| `{{.SizeString}}`      | SizeString (including unit string)         |
| `{{.Source}}`          | Parsed source (BluRay, WEB-DL)             |
| `{{.Title}}`           | Parsed title (That Movie)                  |
| `{{.TorrentHash}}`     | Torrent hash                               |
| `{{.TorrentID}}`       | TorrentID                                  |
| `{{.TorrentName}}`     | Release name as announced                  |
| `{{.TorrentPathName}}` | Path to downloaded .torrent file in `/tmp` |
| `{{.TorrentUrl}}`      | Full url to download torrent               |
| `{{.Type}}`            | Type e.g. episode                          |
| `{{.Year}}`            | Parsed year                                |

## Examples

Simple examples of this extensive functionality can be found below.

- Escape torrent name - `{{ .TorrentName | js }}`

### Dynamic categories in qBittorrent

Dynamic resolution for eg movies or tv. Very useful to keep things separated and easy to manage. With well-named releases this works great as a Plex library.

Category: `movies-{{ .Resolution }}` = `movies-1080p`, `movies-2160p`

### Tags

Dynamic tags based on indexer, resolution or other

- Tags: `{{ .Indexer }}` = `mockindexer`
- Tags: `{{ .Resolution }}` = `2160p`

### Dynamic date and time

Could be used to build dynamic save paths etc.

- `{{ .CurrentYear }}`
- `{{ .CurrentMonth | printf "%02d"}}`

### Dynamic movie filter with hdr/dv

Category: `movies-{{ .Resolution }}{{ if .HDR }}-{{ .HDR }}{{ end }}`

### Custom regex example

One user in our Discord wanted to have a custom watch folder for TV shows but without the episode in the name.
The best solution we could find was to use... a bit of regex. It's not great, but it's not terrible either.

The relevant query is:

```
{{- $filename := (regexReplaceAll "(?i)(.*).torrent$" (osBase .TorrentPathName) "${1}") -}}
{{- $pattern := "([\\.\\s\\-\\(])([Ss]\\d+)[\\.\\s\\-]?([Ee]\\d+)?([\\.\\s\\-\\)])" -}}
{{- $repl := "${1}${2}${4}" -}}
{{- if ge (len .TorrentName) (len $filename) -}}
  {{- regexReplaceAll $pattern .TorrentName $repl -}}
{{- else -}}
	{{- regexReplaceAll $pattern $filename $repl -}}
{{- end -}}
```

:::info Heads up
Do note that the minus (-) signs here denote that the template bars are not allowed to emit/allow any whitespace before/after them (as would've been the case without the minus signs).
:::
