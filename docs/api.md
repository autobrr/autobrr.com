---
sidebar_position: 1
sidebar_label: API Docs
title: API Docs
description: autobrr is a powerful automation tool. With the help of our API, developers can integrate and extend the functionalities of autobrr into their own applications, tools, or systems.
keywords: [autobrr, api]
---

# autobrr API

autobrr is a powerful automation tool. With the help of our API, users and developers can integrate and extend the functionalities of autobrr into their own applications, tools, or systems.

## API Endpoint Reference

The **API Endpoint Reference** provides a comprehensive list of available endpoints for interacting with our API.

**Base URL:** `http://127.0.0.1:7474/api`

### Available Endpoints

| #   | Endpoint Description         | Endpoint Path                       |
| --- | ---------------------------- | ----------------------------------- |
| 1   | Liveness Check               | `/healthz/liveness`                 |
| 2   | Readiness Check              | `/healthz/readiness`                |
| 3   | Download Clients             | `/download_clients`                 |
| 4   | Feeds                        | `/feeds`                            |
| 5   | Specific Feed Status         | `/feeds/<FEED_ID>/enabled`          |
| 6   | Filters                      | `/filters/`                         |
| 7   | Specific Filter Status       | `/filters/<FILTER_ID>/enabled`      |
| 8   | Indexer                      | `/indexer`                          |
| 9   | Specific Indexer Status      | `/indexer/<INDEXER_ID>/enabled`     |
| 10  | IRC Networks                 | `/irc`                              |
| 11  | Restart Specific IRC Network | `/irc/network/<NETWORK_ID>/restart` |
| 12  | API Keys                     | `/keys`                             |
| 13  | Notifications                | `/notification`                     |
| 14  | Release History              | `/release`                          |
| 15  | Config                       | `/config`                           |

### Authentication

All API requests require an API key for authentication. This key can be generated from your autobrr dashboard. Remember to always keep your API key confidential.

![API dashboard](/img/api-dashboard.png)

#### Sending the API Key

When making requests to the autobrr API, you can provide your API key in two ways:

- **Header (Recommended)**: Include the API key in the request header using `X-API-Token`. This method is more secure as it avoids exposing the key in the URL.
- **URL Parameter:** Directly append the API key to the endpoint URL as a query parameter. This method is straightforward but might expose the key in logs or browser history.

**Using the API key in the header:**

```bash
curl -X GET 'http://127.0.0.1:7474/api/download_clients' -H 'X-API-Token: AUTOBRR_API_KEY' | jq
```

**Using the API key as an URL parameter:**

```bash
curl -X GET 'http://127.0.0.1:7474/api/download_clients?apikey=${AUTOBRR_API_KEY}' | jq
```

## Health Check Endpoints

autobrr provides two health check endpoints to monitor the state and readiness of the application:

### Liveness Check

This endpoint checks if the autobrr application is running.

```bash
curl -X GET 'http://127.0.0.1:7474/api/healthz/liveness' -H 'X-API-Token: AUTOBRR_API_KEY'
```

**Response:**

**200 OK:** The application is alive and running.

### Readiness Check

This endpoint checks if the application and its dependencies (e.g., database) are not only running but also ready to accept requests.

```bash
curl -X GET 'http://127.0.0.1:7474/api/healthz/readiness' -H 'X-API-Token: AUTOBRR_API_KEY'
```

**Responses:**

- **200 OK:** The application and its dependencies are ready to accept requests.
- **500 Internal Server Error:** There's an issue with one or more dependencies.
  - **Unhealthy. Database unreachable:** Indicates that there's an issue connecting to the Postgres database. Note that SQLite, if used, doesn't typically present availability issues, so this error is more relevant when using Postgres.

## Filters

### Fetch all filters

Retrieve a list of all filters available on your autobrr instance.

```bash
curl -X GET 'http://127.0.0.1:7474/api/filters' -H 'X-API-Token: AUTOBRR_API_KEY' | jq '.[] | {id, name}'
```

### Enable or disable a filter

Toggle the status of a specific filter.

```bash
curl -X PUT 'http://127.0.0.1:7474/api/filters/65/enabled' -H 'X-API-Token: AUTOBRR_API_KEY' \
     -d '{"enabled":true}'
```

### Delete a filter

Remove a specific filter from your autobrr instance.

```bash
curl -X DELETE 'http://127.0.0.1:7474/api/filters/84' -H 'X-API-Token: AUTOBRR_API_KEY'
```

### Create a filter

Create a new filter.

```bash
curl -X POST 'http://127.0.0.1:7474/api/filters' -H 'X-API-Token: AUTOBRR_API_KEY' \
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
curl -X PUT 'http://127.0.0.1:7474/api/filters/80' -H 'X-API-Token: AUTOBRR_API_KEY' \
-H 'Content-Type: application/json' \
-d '{
    "id": 80,
    "name": "New name",
    "enabled": true,
    "priority": 1,
    "use_regex": false,
    "years": "2023-2030",
    "resolutions": [],
    "sources": [],
    "codecs": [],
    "containers": [],
    "match_hdr": [],
    "except_hdr": [],
    "match_other": [],
    "except_other": [],
    "smart_episode": false,
    "except_releases": "*24bit?Lossless*",
    "tags": "electronic,deep.house,progressive.house,house,techno,melodic.house,trance,breakbeat,mainstage,dance,progressive.trance,vocal.trance",
    "except_tags": "japanese",
    "match_language": [],
    "except_language": [],
    "formats": [
        "FLAC"
    ],
    "quality": [
        "Lossless"
    ],
    "media": [],
    "match_release_types": [],
    "origins": [],
    "except_origins": [],
    "indexers": [
        {
            "id": 21,
            "name": "Redacted",
            "identifier": "redacted",
            "enabled": true
        }
    ],
    "actions": [
        {
            "name": "Anjunabeats/Anjunadeep",
            "type": "QBITTORRENT",
            "enabled": true,
            "category": "red_labels",
            "tags": "Anjuna",
            "reannounce_interval": 7,
            "reannounce_max_attempts": 25,
            "client_id": 16,
            "webhook_method": "",
            "webhook_type": ""
        }
    ],
    "external": [
        {
            "id": 4,
            "name": "webhook",
            "index": 0,
            "type": "WEBHOOK",
            "enabled": true,
            "webhook_host": "http://service:42135/hook",
            "webhook_method": "POST",
            "webhook_data": "{\n    \"torrent_id\": {{.TorrentID}},\n    \"apikey\": \"redacted.apikey\",\n    \"maxsize\": 2147483648,\n    \"record_labels\": \"Label1,Label2\"\n}",
            "webhook_expect_status": 200
        }
    ]
}'
```

## Indexers

### Fetch all indexers

Retrieve a list of all indexers configured in your autobrr instance.

```bash
curl -X GET 'http://127.0.0.1:7474/api/indexer' -H 'X-API-Token: AUTOBRR_API_KEY' | jq '.[] | {id, name, enabled}'
```

### Enable or disable an indexer

Toggle the status of a specific indexer.

:::caution Note

There is a known issue with this endpoint. It may require sending a request twice to ensure a successful change.
This behavior is observed in the web UI as well.

:::

```bash
curl -X PATCH 'http://127.0.0.1:7474/api/indexer/31/enabled' -H 'X-API-Token: AUTOBRR_API_KEY' \
     -d '{"enabled": true}'
```

## IRC Networks

### List all networks

```bash
curl -X GET 'http://127.0.0.1:7474/api/irc' -H 'X-API-Token: AUTOBRR_API_KEY' | jq '.[] | {id, name, healthy}'
```

### Restart a network

```bash
curl -X GET 'http://127.0.0.1:7474/api/irc/network/5/restart' -H 'X-API-Token: AUTOBRR_API_KEY'
```

## Feeds

### Fetch all feeds

Retrieve a list of all feeds available on your autobrr instance.

```bash
curl -X GET 'http://127.0.0.1:7474/api/feeds' -H 'X-API-Token: AUTOBRR_API_KEY' | jq '.[] | {id, name, enabled}'
```

### Enable or disable a feed

Toggle the status of a specific feed.

```bash
curl -X PATCH 'http://127.0.0.1:7474/api/feeds/8/enabled' -H 'X-API-Token: AUTOBRR_API_KEY' \
     -d '{"enabled": true}'
```

### Clear the cache of a feed

```bash
curl -X DELETE 'http://127.0.0.1:7474/api/feeds/8/cache' -H 'X-API-Token: AUTOBRR_API_KEY'
```

## Download clients

### List all download clients

```bash
curl -X GET 'http://127.0.0.1:7474/api/download_clients' -H 'X-API-Token: AUTOBRR_API_KEY' | jq
```

### Add a new download client

```bash title="qBittorrent"
curl -X POST 'http://127.0.0.1:7474/api/download_clients' -H 'X-API-Token: AUTOBRR_API_KEY' \
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
```

```bash title="*arr"
curl -X POST 'http://127.0.0.1:7474/api/download_clients' -H 'X-API-Token: AUTOBRR_API_KEY' \
-d '{
  "name": "Sonarr",
  "type": "SONARR",
  "enabled": true,
  "host": "http://sonarr:9989/sonarr",
  "settings": {
    "apikey": "ARR_API_KEY",
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

```bash title="qBittorrent"
curl -X PUT 'http://127.0.0.1:7474/api/download_clients' -H 'X-API-Token: AUTOBRR_API_KEY' \
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
```

```bash title="Deluge"
curl -X PUT 'http://127.0.0.1:7474/api/download_clients' -H 'X-API-Token: AUTOBRR_API_KEY' \
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
```

```bash title="*arrs"
curl -X PUT 'http://127.0.0.1:7474/api/download_clients' -H 'X-API-Token: AUTOBRR_API_KEY' \
-d '{
  "id": 21,
  "name": "Sonarr",
  "type": "SONARR",
  "enabled": true,
  "host": "http://sonarr4k:9990/sonarr4k",
  "settings": {
    "apikey": "ARR_API_KEY",
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
curl -X GET 'http://127.0.0.1:7474/api/notification' -H 'X-API-Token: AUTOBRR_API_KEY' | jq '.[] | {id, name, type, enabled, events}'
```

### Create a new notification agent

```bash title="Notifiarr"
curl -X POST 'http://127.0.0.1:7474/api/notification' -H 'X-API-Token: AUTOBRR_API_KEY' \
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
  "api_key": "NOTIFIARR_API_KEY"
}'
```

```bash title="Discord"
curl -X POST 'http://127.0.0.1:7474/api/notification' -H 'X-API-Token: AUTOBRR_API_KEY' \
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
```

```bash title="Telegram"
curl -X POST 'http://127.0.0.1:7474/api/notification' -H 'X-API-Token: AUTOBRR_API_KEY' \
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
```

```bash title="Gotify"
curl -X POST 'http://127.0.0.1:7474/api/notification' -H 'X-API-Token: AUTOBRR_API_KEY' \
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
```

```bash title="Pushover"
curl -X POST 'http://127.0.0.1:7474/api/notification' -H 'X-API-Token: AUTOBRR_API_KEY' \
-d '{
  "enabled": true,
  "type": "PUSHOVER",
  "name": "Pushover Agent",
  "events": [
    "APP_UPDATE_AVAILABLE"
  ],
  "api_key": "PUSHOVER_API_KEY",
  "token": "USER_KEY"
}'
```

## API keys

### List all API keys

Retrieve a list of all API keys in your autobrr instance.

```bash
curl -X GET 'http://127.0.0.1:7474/api/keys' -H 'X-API-Token: AUTOBRR_API_KEY' | jq 'map(del(.scopes))'
```

### Create a new API key

```bash
curl -X POST 'http://127.0.0.1:7474/api/keys' -H 'X-API-Token: AUTOBRR_API_KEY' \
-d '{"name":"name your key","scopes":[]}' | jq 'del(.scopes)'
```

## Release history

### Clear release history

Remove release history entries that are older than a specified number of hours.

```bash
curl -X DELETE 'http://127.0.0.1:7474/api/release?olderThan=8760' -H 'X-API-Token: AUTOBRR_API_KEY'
```

## Config

### Read the config

```bash
curl -X GET 'http://127.0.0.1:7474/api/config' -H 'X-API-Token: AUTOBRR_API_TOKEN' | jq
```

### Change log level

```bash
curl -X PATCH 'http://127.0.0.1:7474/api/config' -H 'X-API-Token: AUTOBRR_API_TOKEN' -d '{
    "log_level": "TRACE"
}'
```

### Enable or disable update check

```bash
curl -X PATCH 'http://127.0.0.1:7474/api/config' -H 'X-API-Token: AUTOBRR_API_TOKEN' -d '{
    "check_for_updates": true,
}'
```
