---
id: external
slug: /filters/external
sidebar_label: External
title: External
description: Explanation of external filter options, fields and values.
keywords: [autobrr, filters, webhook, script, external]
pagination_label: Filters - External
pagination_next: filters/actions
---

# External

With external filters you can run `scripts` and `webhooks` to do your own custom filtering. If **Expected exit status** matches it will continue. If not it stops there.

Many of the fields have support for [macros](./macros.md), which allow you to enhance your workflow significantly by providing custom logic/data processing to the input data provided by autobrr.

We have a separate repo for community scripts created by our users. https://github.com/autobrr/community-scripts

### Script

Run external script that does something. Use `exit codes` correctly, like `exit 0` for no issues. In Linux, non-zero exit codes are considered not-ok/error etc.

See [stop if disk is full](../usage/tips.md#stop-if-disk-is-full) for a good example of what it can do.

| Field                    | Description           | Examples                                                       |
| ------------------------ | --------------------- | -------------------------------------------------------------- |
| **Command**              | Command, full path    | e.g. `/usr/bin/myprogram`                                      |
| **Arguments**            | Arguments.            | e.g. `--name {{ .TorrentName }} --file {{ .TorrentPathName }}` |
| **Expected exit status** | Expected exit status. | e.g. `0`                                                       |

### Webhook

Send a payload to some custom API and do more processing. Use status codes to trigger different behaviours.

| Field                         | Description                                                                  | Examples                                  |
| ----------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------- |
| **Endpoint**                  | URL of your API.                                                             | e.g. `http://127.0.0.1:5000/api/filter`   |
| **HTTP method**               | Request method. Defaults to `POST` when not set.                             | e.g. `POST`                               |
| **HTTP Request Headers**      | Custom headers as `KEY=value` pairs, separated by `;`.                       | e.g. `X-Api-Key=mykey;Authorization=Bearer token` |
| **Data**                      | JSON payload. Sent with `Content-Type: application/json`.                    | e.g. `{ "name": "{{ .TorrentName }}" }`   |
| **Expected HTTP status code** | Status code that counts as a pass.                                           | e.g. `200`                                |
| **Retry http status code(s)** | Status codes that trigger a retry, comma separated.                          | e.g. `500,502`                            |
| **Maximum retry attempts**    | How many times to try the request in total.                                  | e.g. `3`                                  |
| **Retry delay in seconds**    | Wait time between attempts.                                                  | e.g. `5`                                  |

### On Error

Each external filter has an **On Error** setting that controls what happens when the script or webhook itself fails (for example a connection error):

- **Reject**: the release is rejected (default behavior).
- **Continue to next**: the failed external filter is skipped and filtering continues with the next check.

---
