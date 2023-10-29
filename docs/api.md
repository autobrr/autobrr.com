---
sidebar_position: 1
sidebar_label: API docs
pagination_next: api
title: autobrr API
description: Here are the API documentation of autobrr.
keywords: [autobrr, api]
---

# autobrr API

autobrr is a powerful tool designed to automate various tasks. With the help of our API, developers can integrate and extend the functionalities of autobrr into their own applications, tools, or systems.

## Authentication

All API requests require an API key for authentication. This key can be generated from your autobrr dashboard. Remember to always keep your API key confidential. Include your API key in your requests as demonstrated in the examples.

![API dashboard](/img/api-dashboard.png)

## API Endpoint Reference

The **API Endpoint Reference** provides a comprehensive list of available endpoints for interacting with our API.

**Base URL:** `http://127.0.0.1:7474/api`

When making a request, append the desired endpoint to the Base URL. For example, to access the download clients, the full URL would be:

```bash
curl -X GET 'http://127.0.0.1:7474/api/download_clients?apikey=${AUTOBRR_API_KEY}' | jq
```

### Available Endpoints

| #   | Endpoint Description    | Endpoint Path                                             |
| --- | ----------------------- | --------------------------------------------------------- |
| 1   | Download Clients        | `/download_clients?apikey=${AUTOBRR_API_KEY}`             |
| 2   | Feeds                   | `/feeds?apikey=${AUTOBRR_API_KEY}`                        |
| 3   | Specific Feed Status    | `/feeds/<FEED_ID>/enabled?apikey=${AUTOBRR_API_KEY}`      |
| 4   | Filters                 | `/filters/?apikey=${AUTOBRR_API_KEY}`                     |
| 5   | Specific Filter Status  | `/filters/<FILTER_ID>/enabled?apikey=${AUTOBRR_API_KEY}`  |
| 6   | Indexer                 | `/indexer?apikey=${AUTOBRR_API_KEY}`                      |
| 7   | Specific Indexer Status | `/indexer/<INDEXER_ID>/enabled?apikey=${AUTOBRR_API_KEY}` |
| 8   | API Keys                | `/keys?apikey=${AUTOBRR_API_KEY}`                         |
| 9   | Notifications           | `/notification?apikey=${AUTOBRR_API_KEY}`                 |
| 10  | Release History         | `/release?olderThan=<HOURS>&apikey=${AUTOBRR_API_KEY}`    |

## Filters

### Fetch all filters

Retrieve a list of all filters available on your autobrr instance.

```bash
curl -X GET "http://127.0.0.1:7474/api/filters?apikey=${AUTOBRR_API_KEY}" | jq '.[] | {id, name}'
```

### Enable or disable a filter

Toggle the status of a specific filter.

```bash
curl -X PUT "http://127.0.0.1:7474/api/filters/65/enabled?apikey=${AUTOBRR_API_KEY}" \
     -d '{"enabled":true}'
```

### Delete a filter

Remove a specific filter from your autobrr instance.

```bash
curl -X DELETE "http://127.0.0.1:7474/api/filters/84?apikey=${AUTOBRR_API_KEY}"
```

### Create a filter

Create a new filter.

```bash
curl -X POST 'http://127.0.0.1:7474/api/filters?apikey=${AUTOBRR_API_KEY}' \
-d '{
    "name": "filter name",
    "enabled": false,
    "resolutions": [],
    "codecs": [],
    "sources": [],
    "containers": [],
    "origins": []
}'
```

### Update an existing filter

```bash
curl -X PUT 'http://127.0.0.1:7474/api/filters/84?apikey=${AUTOBRR_API_KEY}' \
-H 'Content-Type: application/json' \
-d '{
    "id": 84,
    "name": "test filter",
    "enabled": false,
    "priority": 0,
    "use_regex": false,
    "years": "2020",
    "resolutions": ["1080p", "720p"],
    "sources": ["WEB-DL", "WEB"],
    "codecs": [],
    "containers": [],
    "match_hdr": [],
    "except_hdr": [],
    "match_other": [],
    "except_other": [],
    "smart_episode": false,
    "match_releases": "*AMZN*",
    "match_release_groups": "flux",
    "match_language": [],
    "except_language": [],
    "formats": [],
    "quality": [],
    "media": [],
    "match_release_types": [],
    "origins": [],
    "except_origins": [],
    "indexers": [
        {
            "id": 24,
            "name": "Aither"
        },
        {
            "id": 21,
            "name": "Redacted"
        }
    ],
    "actions": [],
    "external": []
}'
```

## Indexers

### Fetch all indexers

Retrieve a list of all indexers configured in your autobrr instance.

```bash
curl -X GET "http://127.0.0.1:7474/api/indexer?apikey=${AUTOBRR_API_KEY}" | jq '.[] | {id, name, enabled}'
```

### Enable or disable an indexer

Toggle the status of a specific indexer.

:::caution Note

There is a known issue with this endpoint. It may require sending a request twice to ensure a successful change.
This behavior is observed in the web UI as well.

:::

```bash
curl -X PATCH "http://127.0.0.1:7474/api/indexer/31/enabled?apikey=${AUTOBRR_API_KEY}" \
     -d '{"enabled": true}'

```

## Feeds

### Fetch all feeds

Retrieve a list of all feeds available on your autobrr instance.

```bash
curl -X GET "http://127.0.0.1:7474/api/feeds?apikey=${AUTOBRR_API_KEY}" | jq '.[] | {id, name, enabled}'
```

### Enable or disable a feed

Toggle the status of a specific feed.

```bash
curl -X PATCH "http://127.0.0.1:7474/api/feeds/8/enabled?apikey=${AUTOBRR_API_KEY}" \
     -d '{"enabled": true}'
```

## Download clients

### List all download clients

```bash
curl -X GET 'http://127.0.0.1:7474/api/download_clients?apikey=${AUTOBRR_API_KEY}' | jq
```

### Add a new download client

```bash
# Qbittorrent
curl -X POST 'http://127.0.0.1:7474/api/download_clients?apikey=${AUTOBRR_API_KEY}' \
-d '{
  "name": "qbit",
  "type": "QBITTORRENT",
  "enabled": true,
  "host": "http://172.17.0.1:10963",
  "port": 0,
  "tls": false,
  "tls_skip_verify": false,
  "username": "username",
  "password": "password",
  "settings": {
    "basic": {
      "auth": true,
      "username": "username",
      "password": "password"
    },
    "rules": {
      "enabled": true,
      "max_active_downloads": 1,
      "ignore_slow_torrents": true,
      "ignore_slow_torrents_condition": "MAX_DOWNLOADS_REACHED",
      "download_speed_threshold": 10000,
      "upload_speed_threshold": 400
    }
  }
}'

# Arr
curl -X POST 'http://127.0.0.1:7474/api/download_clients?apikey=${AUTOBRR_API_KEY}' \
-d '{
  "name": "Sonarr",
  "type": "SONARR",
  "enabled": true,
  "host": "http://sonarr:9989/sonarr",
  "settings": {
    "apikey": "${AUTOBRR_API_KEY}",
    "basic": {
      "auth": true,
      "username": "USERNAME",
      "password": "PASSWORD"
    },
    "external_download_client_id": 0
  }
}'
```

### Update existing download client

```bash
# Qbittorrent
curl -X PUT 'http://127.0.0.1:7474/api/download_clients?apikey=${AUTOBRR_API_KEY}' \
-d '{
  "id": 21,
  "name": "Qbit",
  "type": "QBITTORRENT",
  "enabled": true,
  "host": "https://qbit.autobrr.com",
  "tls": true,
  "tls_skip_verify": true,
  "username": "USERNAME",
  "password": "NEW_PASSWORD",
  "settings": {
    "basic": {
      "auth": true,
      "username": "USERNAME",
      "password": "NEW_PASSWORD"
    },
    "rules": {
      "enabled": true,
      "max_active_downloads": 2,
      "ignore_slow_torrents": true,
      "download_speed_threshold": 10000,
      "upload_speed_threshold": 2000,
      "ignore_slow_torrents_condition": "ALWAYS or MAX_DOWNLOADS_REACHED"
    },
    "external_download_client_id": 1
  }
}'

# Deluge
curl -X PUT 'http://127.0.0.1:7474/api/download_clients?apikey=${AUTOBRR_API_KEY}' \
-d '{
  "id": 13,
  "name": "Deluge",
  "type": "DELUGE_V2",
  "enabled": false,
  "host": "127.0.0.1",
  "port": 12064,
  "tls": false,
  "tls_skip_verify": false,
  "username": "USERNAME",
  "password": "PASSWORD",
  "settings": {
    "basic": {},
    "rules": {
      "enabled": true,
      "max_active_downloads": 2,
      "ignore_slow_torrents": false,
      "download_speed_threshold": 0,
      "upload_speed_threshold": 0
    }
  }
}'

# Arr
curl -X PUT 'http://127.0.0.1:7474/api/download_clients?apikey=${AUTOBRR_API_KEY}' \
-d '{
  "id": 21,
  "name": "Sonarr",
  "type": "SONARR",
  "enabled": true,
  "host": "http://sonarr4k:9990/sonarr4k",
  "settings": {
    "apikey": "${AUTOBRR_API_KEY}",
    "basic": {
      "auth": true,
      "username": "USERNAME",
      "password": "NEW_PASSWORD"
    },
    "external_download_client_id": 1
  }
}'
```

## Notifications

### List all notification agents

Retrieve a list of all notification agents configured in your autobrr instance.

```bash
curl -X GET 'http://127.0.0.1:7474/api/notification?apikey=${AUTOBRR_API_KEY}' | jq '.[] | {id, name, type, enabled, events}'
```

### Create a new notification agent

```bash
# Notifiarr
curl -X POST 'http://127.0.0.1:7474/api/notification?apikey=${AUTOBRR_API_KEY}' \
-d '{
  "enabled": true,
  "type": "NOTIFIARR",
  "name": "Notifiarr Agent",
  "webhook": "",
  "events": [
    "PUSH_REJECTED",
    "PUSH_APPROVED",
    "PUSH_ERROR",
    "IRC_DISCONNECTED",
    "APP_UPDATE_AVAILABLE",
    "IRC_RECONNECTED"
  ],
  "${AUTOBRR_API_KEY}": "${AUTOBRR_API_KEY}"
}'

# Discord
curl -X POST 'http://127.0.0.1:7474/api/notification?apikey=${AUTOBRR_API_KEY}' \
-d  '{
  "enabled": true,
  "name": "Discord Agent",
  "type": "DISCORD",
  "enabled": true,
  "events": [
    "PUSH_APPROVED"
  ],
  "webhook": "https://discord-webhook.url"
}'

# Telegram
curl -X POST 'http://127.0.0.1:7474/api/notification?apikey=${AUTOBRR_API_KEY}' \
-d '{
  "enabled": true,
  "type": "TELEGRAM",
  "name": "Telegram Agent",
  "events": [
    "PUSH_REJECTED",
    "PUSH_APPROVED"
  ],
  "token": "BOT_TOKEN",
  "channel": "CHAT_ID",
  "topic": "MESSAGE_THREAD_ID"
}'

# Gotify
curl -X POST 'http://127.0.0.1:7474/api/notification?apikey=${AUTOBRR_API_KEY}' \
-d '{
  "enabled": true,
  "type": "GOTIFY",
  "name": "Gotify Agent",
  "events": [
    "PUSH_ERROR"
  ],
  "host": "https://gotify.url",
  "token": "APP_TOKEN"
}'

# Pushover
curl -X POST 'http://127.0.0.1:7474/api/notification?apikey=${AUTOBRR_API_KEY}' \
-d '{
  "enabled": true,
  "type": "PUSHOVER",
  "name": "Pushover Agent",
  "events": [
    "APP_UPDATE_AVAILABLE"
  ],
  "${AUTOBRR_API_KEY}": "API_TOKEN",
  "token": "USER_KEY"
}'
```

## API keys

### List all API keys

Retrieve a list of all API keys in your autobrr instance.

```bash
curl -X GET 'http://127.0.0.1:7474/api/keys?apikey=${AUTOBRR_API_KEY}' | jq 'map(del(.scopes))'
```

### Create a new API key

```bash
curl -X POST 'http://127.0.0.1:7474/api/keys?apikey=${AUTOBRR_API_KEY}' \
-d '{"name":"name your key","scopes":[]}' | jq 'del(.scopes)'
```

## Release history

### Clear release history

Remove release history entries that are older than a specified number of hours.

```bash
curl -X DELETE "http://127.0.0.1:7474/api/release?olderThan=8760&apikey=${AUTOBRR_API_KEY}"
```
