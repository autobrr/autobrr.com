---
id: external
slug: /filters/external
sidebar_label: External
title: External
description: Explanation of external filter options, fields and values.
keywords: [autobrr, filters, webhook, script, external]
pagination_label: Filters - External
pagination_previous: filters/music
pagination_next: filters/actions
---

# External

With external filters you can run `scripts` and `webhooks` to do your own custom filtering. If **Expected exit status** matches it will continue. If not it stops there.

All the [variables and macros](/filters/actions#macros) from actions are usable in these fields to inject dynamic variables.

### Script

Run external script that does something. Use `exit codes` correctly, like `exit 0` for no issues. In Linux, non-zero exit codes are considered not-ok/error etc.

See [stop if disk is full](/usage/tips#stop-if-disk-is-full) for a good example of what it can do.

| Field                    | Description           | Examples                                                       |
| ------------------------ | --------------------- | -------------------------------------------------------------- |
| **Command**              | Command, full path    | e.g. `/usr/bin/myprogram`                                      |
| **Arguments**            | Arguments.            | e.g. `--name {{ .TorrentName }} --file {{ .TorrentPathName }}` |
| **Expected exit status** | Expected exit status. | e.g. `0`                                                       |

### Webhook

Send a payload to some custom API and do more processing. Use status codes to trigger different behaviours.

Only supports `POST` requests for now.

| Field                    | Description           | Examples                                |
| ------------------------ | --------------------- | --------------------------------------- |
| **Host**                 | Host.                 | e.g. `http://127.0.0.1:5000/api/filter` |
| **Data**                 | Data, JSON.           | e.g. `{ "name": "{{ .TorrentName }}" }` |
| **Expected http status** | Expected http status. | e.g. `200`                              |

---