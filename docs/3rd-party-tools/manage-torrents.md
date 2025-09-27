---
id: manage-torrents
sidebar_label: Manage torrents
title: Manage torrents
description: 3rd party tools to manage your torrents.
keywords: [autoremove,autoremove-torrents,tqm,qbittools,qbit_manage,autodelete,delete,remove,tag,tagging]
---

You have probably reached a point now where you want to start automatically manage torrents in your preferred client based on rules, like min seed time and max ratio.

We'll cover the most popular ones. Some of these tools only support a single client and others support multiple.

## autoremove-torrents

> This program is a tool that can help you remove torrents automatically. Now, you don’t need to worry about your disk space anymore - according to your strategies, the program will check each torrent if it satisfies the remove condition; If so, delete it automatically.

Documentation: [autoremove-torrents](https://autoremove-torrents.readthedocs.io/en/latest/)

Repository: [jerrymakesjelly/autoremove-torrents](https://github.com/jerrymakesjelly/autoremove-torrents)

Supported clients
* qBittorrent
* Transmission
* μTorrent
* Deluge
* rTorrent (planned)

autoremove-torrents uses `task` and `strategy` with properties to define what you want to do. 

To run your configuration periodically we recommend a cronjob on Linux/Mac or the Task Scheduler on Windows.

Example config:

```yaml
# A task block
my_task:          # Part 1: Task Name
  # Part 2: Login Information
  client: qbittorrent
  host: http://127.0.0.1:9091
  username: admin
  password: adminadmin
  # Part 3: Strategies Block (Remove Conditions)
  strategies:
    strategy1:    # Part I: Strategy Name
      # Part II: Filters
      categories:
        - IPT
      # Part III: Remove Condition
      ratio: 1
      seeding_time: 1209600
    strategy2:
      all_categories: true
      excluded_categories:
        - tv
        - movies
      seeding_time: 259200
    # Add more strategies here...
  # Part 4: Decide whether to remove and delete data (optional)
  delete_data: true
```

## tqm

> CLI application to manage torrent client queues and remove torrents that meet a specific criteria 

Repository (original, not active): [https://github.com/l3uddz/tqm](https://github.com/l3uddz/tqm)  
Repository (fork, active): [https://github.com/autobrr/tqm](https://github.com/autobrr/tqm)

The [original](https://github.com/l3uddz/tqm) only supports `categories` in qBittorrent but the [fork](https://github.com/autobrr/tqm) supports rules by `tags` as well.

Supported clients
* qBittorrent
* Deluge

TQM has powerful rules with conditionals which makes it a bit harder to setup but you have fine-grained control.  
It supports `remove`, `tagging` and `update categories`.  

To run your configuration periodically we recommend a cronjob on Linux/Mac or the Task Scheduler on Windows.

Example config (fork with tags support):

```yaml
clients:
  qbt:
    download_path: /mnt/local/downloads/torrents/qbittorrent/completed
    download_path_mapping:
      /downloads/torrents/qbittorrent/completed: /mnt/local/downloads/torrents/qbittorrent/completed
    enabled: true
    filter: default
    type: qbittorrent
    url: https://qbittorrent.domain.com/
    user: user
    password: password
filters:
  default:
    ignore:
      # general
      - TrackerStatus contains "Tracker is down"
      - Downloaded == false && !IsUnregistered()
      - SeedingHours < 26 && !IsUnregistered()
      # permaseed / un-sorted (unless torrent has been deleted)
      - Label startsWith "permaseed-" && !IsUnregistered()
      # Filter based on qbittorrent tags (only qbit at the moment)
      - '"permaseed" in Tags && !IsUnregistered()'
    remove:
      # general
      - IsUnregistered()
      # imported
      - Label in ["sonarr-imported", "radarr-imported", "lidarr-imported"] && (Ratio > 4.0 || SeedingDays >= 15.0)
      # ipt
      - Label in ["autoremove-ipt"] && (Ratio > 3.0 || SeedingDays >= 15.0)
      # hdt
      - Label in ["autoremove-hdt"] && (Ratio > 3.0 || SeedingDays >= 15.0)
      # bhd
      - Label in ["autoremove-bhd"] && (Ratio > 3.0 || SeedingDays >= 15.0)
      # ptp
      - Label in ["autoremove-ptp"] && (Ratio > 3.0 || SeedingDays >= 15.0)
      # btn
      - Label in ["autoremove-btn"] && (Ratio > 3.0 || SeedingDays >= 15.0)
      # hdb
      - Label in ["autoremove-hdb"] && (Ratio > 3.0 || SeedingDays >= 15.0)
      # Qbit tag utilities
      - HasAllTags("480p", "bad-encode") # match if all tags are present
      - HasAnyTag("remove-me", "gross") # match if at least 1 tag is present
    label:
      # btn 1080p season packs to permaseed (all must evaluate to true)
      - name: permaseed-btn
        update:
          - Label == "sonarr-imported"
          - TrackerName == "landof.tv"
          - Name contains "1080p"
          - len(Files) >= 3

      # cleanup btn season packs to autoremove-btn (all must evaluate to true)
      - name: autoremove-btn
        update:
          - Label == "sonarr-imported"
          - TrackerName == "landof.tv"
          - not (Name contains "1080p")
          - len(Files) >= 3
    # Change qbit tags based on filters
    tag:
      - name: low-seed
      # This must be set
      # "mode: full" means tag will be added to
      # torrent if matched and removed from torrent if not
      # use `add` or `remove` to only add/remove respectivly
      # NOTE: Mode does not change the way torrents are flagged,
      # meaning, even with "mode: remove",
      # tags will be removed if the torrent does NOT match the conditions.
      # "mode: remove" simply means that tags will not be added
      # to torrents that do match.
        mode: full
        update:
          - Seeds <= 3
```

::::info
There are more operators (i.e. `==` `!=` `||` and `&&`) you can use than those provided in the example config.  
To see a full list of available operators head over to the Language Definition documentation of Expr -  
the language used to filter within TQM:  
[Expr Lang v1.9 - Language Definition: Supported Operators](https://expr-lang.org/docs/v1.9/language-definition#supported-operators)
::::

## qbittools

> qbittools is a feature rich CLI for the management of torrents in qBittorrent.

Repository: [https://gitlab.com/AlexKM/qbittools](https://gitlab.com/AlexKM/qbittools)

Supported clients
* qBittorrent

Commands:
- `add` (add torrents via cli)
- `unpause`
- `tagging` (unregistered, not working etc)
- `reannounce` (continiously look for torrents to re-announce, can be very useful)
- `update passkey` (in case you need to update your passkey this makes it easy to do in bulk)
- `export` (export torrents by category or tags)
- `mover` (change category: useful for hybrid setups with nvme/hdd)
- `orphaned` (find files not assosciated with any torrent)

To run the commands periodically (that do not run in daemon mode natively) we recommend a cronjob on Linux/Mac or the Task Scheduler on Windows.



## qbit_manage

> This tool will help manage tedious tasks in qBittorrent and automate them. Tag, categorize, remove Orphaned data, remove unregistered torrents and much much more. 

Documentation: [https://github.com/StuffAnThings/qbit_manage/wiki](https://github.com/StuffAnThings/qbit_manage/wiki)

Repository: [https://github.com/StuffAnThings/qbit_manage](https://github.com/StuffAnThings/qbit_manage)

Supported clients
* qBittorrent

`qbit_manage` has a lot of features: 
- `remove`
- `tagging`
- `changing categories`
- integrates well with arrs to check hardlinks
- `notifications` (apprise, notifiarr, webhooks)

To run your configuration periodically we recommend a cronjob on Linux/Mac or the Task Scheduler on Windows.