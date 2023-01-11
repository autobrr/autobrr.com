---
id: freespace
sidebar_label: Freespace script
title: Freespace script
description: Explanation of keyword searches, supported keywords and values
keywords: [autobrr, releases, search, tv, movies, music]
pagination_label: Usage - Freespace script
pagination_next: 3rd-party-tools
---

Want autobrr to stop adding torrents to your client when you're running low on space? No problem.

## Create the file

```bash
touch ~/freespace.sh && chmod +x ~/freespace.sh
```

```bash
#!/bin/bash
set -e

reqSpace=100000000 # 100GB
SPACE=`df "$HOME/torrents" | awk 'END{print $4}'`
if [[ $SPACE -le reqSpace ]]
then
  #echo "not enough space"
  #echo "free $SPACE"
  exit 1
fi
#echo "got space"
#echo "free $SPACE"
exit 0
```

## Add it to your existing filter

![External script](../../../static/img/free-space.png "External script explanation")

Expected exit status should be set to 0 which is predefined.
