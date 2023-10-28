---
sidebar_position: 1
sidebar_label: API docs
pagination_next: api
title: autobrr API
description: Here are the API documentation of autobrr.
keywords: [autobrr, api]
---

# autobrr API

Dive into our comprehensive API guide to harness the full potential of autobrr.

## Filters

### Fetch All Filters

Retrieve a list of all filters available on your autobrr instance.

```bash
curl -X GET "http://127.0.0.1:11456/api/filters?apikey=API_KEY" | jq '.[] | {id, name}'
```

## Enable or Disable a Filter

Toggle the status of a specific filter.

```bash
curl -X PUT "http://127.0.0.1:11456/api/filters/65/enabled?apikey=API_KEY" \
     -d '{"enabled":true}'
```

## Delete filter

Remove a specific filter from your autobrr instance.

```bash
curl -X DELETE "http://127.0.0.1:11456/api/filters/84?apikey=API_KEY"
```

## Create A Filter

Create a new filter.

```bash
curl -X POST 'http://127.0.0.1:11456/api/filters?apikey=API_KEY' \
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

## Update An Existing Filter

```bash
curl -X PUT 'http://127.0.0.1:11456/api/filters/84?apikey=API_KEY' \
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

### Fetch All Indexers

Retrieve a list of all indexers configured in your autobrr instance.

```bash
curl -X GET "http://127.0.0.1:11456/api/indexer?apikey=API_KEY" | jq '.[] | {id, name}'
```

### Enable or Disable an Indexer

Toggle the status of a specific indexer.

```bash
curl -X PATCH "http://127.0.0.1:11456/api/indexer/31/enabled?apikey=API_KEY" \
     -H "Content-Type: application/json" \
     -H "Authorization: Basic base64(username:password)"
     -d '{"enabled": true}'

# This one seems buggy, sometimes it works, sometimes it doesn't.

curl -X PUT "http://127.0.0.1:11456/api/indexers/31?apikey=API_KEY" \
     -d '{"enabled": true}'

# Not working, returning 404, username:password as base64 needed

```

## Release History

### Clear Release History

Remove release history entries that are older than a specified number of hours.

```bash
curl -X DELETE "http://127.0.0.1:11456/api/release?olderThan=8760&apikey=API_KEY"
```

## Feeds

### Fetch All Feeds

Retrieve a list of all feeds available on your autobrr instance.

```bash
curl -X GET "http://127.0.0.1:11456/api/feeds?apikey=API_KEY" | jq '.[] | {id, name}'
```

## Enable or Disable a Feed

Toggle the status of a specific feed.

```bash
curl -X PATCH "http://127.0.0.1:11456/api/feeds/8/enabled?apikey=API_KEY" \
     -d '{"enabled": true}'
```
