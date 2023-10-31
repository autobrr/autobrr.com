---
id: tips
sidebar_label: Tips
title: Tips
description: Useful tips for using autobrr.
keywords: [autobrr, disk, space, torrents, full, external, script]
pagination_label: Tips
---

## Stop if disk is full

You can make autobrr stop adding torrents to your download client whenever you're running low on space.

### Create the script

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

For Docker:

```shell
#!/bin/sh
set -e

reqSpace=250000000 # 250GB
SPACE=$(df "/torrents" | awk 'END{print $4}')
if [ "$SPACE" -le $reqSpace ]
then
  echo "not enough space"
  echo "free $SPACE"
  exit 1
fi
echo "got space"
echo "free $SPACE"
exit 0
```

If the script sees that there is enough space available, it will return exit code 0 and autobrr will push the torrent to the download client.

If free space falls below your limit, the script will return exit code 1 and autobrr will skip it.

:::tip

If you want autobrr to check the disk space of a remote server, then place the script above at the remote server and this one at the server autobrr runs on and call it from the autobrr filter like explained below:

```bash
#!/bin/bash
retcode=$(ssh user@domain "bash -s < ~/freespace.sh ; echo \$? " 2>/dev/null)
echo $retcode
```

:::

### Add it to your existing filter

![External script](/img/free-space.png "External script explanation")

## Troubleshooting filters utilizing the autobrr.log file {#autobrr.log}

The Logs page in the app itself is a good way to monitor new announces, but it cannot show old announces.

If you want to check why a filter is not grabbing anything without waiting for a new announce, you can do so with `tail`.

### Enable logging if you haven't already {#enable-logging}

```toml title="~/.config/autobrr/config.toml"
# autobrr logs file
# If not defined, logs to stdout
#
# Optional
#
logPath = "log/autobrr.log"

# Log level
#
# Default: "DEBUG"
#
# Options: "ERROR", "DEBUG", "INFO", "WARN", "TRACE"
#
logLevel = "TRACE"
```

### Check previous announces

```shell
# -n 100 will search the last 100 lines, you might have to increase this
# put the name of your filter inside the parentheses

tail -n 100 ~/.config/autobrr/logs/autobrr.log | grep 'CheckFilter: (NAME OF YOUR FILTER)'
```

### Monitor new announces

```shell
# put the name of your filter inside the parentheses

tail -f ~/.config/autobrr/logs/autobrr.log | grep 'CheckFilter: (NAME OF YOUR FILTER)'
```

#### Expected output

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.1rem',
    }}>
{children}
</span>
);

```
{"level":"debug","module":"filter","time":"2023-01-11T17:05:44Z","message":"filter.Service.CheckFilter: (Race - groups) for release: Teppen.Laughing.til.You.Cry.S01.720p.CR.WEB-DL.REPACK.AAC2.0.H.264-SubsPlease <Highlight color="#ff2754">rejections: (episodes not matching. got: 0 want: 1-99, release groups not matching. got: SubsPlease want: ggez,glhf,DiRT,cinefeel,casstudio,cmrg,flux,smurf,ntb,kings,plzproper,gossip,playweb,cakes,bae,ggwp,rapidcows,trollhd,playhd,playtv,truffle)</Highlight>"}
```

Based on the output here, the announce was rejected because you've blocked season packs by asking for episodes 1 to 99.
It was also rejected because the release group did not match your criteria.
