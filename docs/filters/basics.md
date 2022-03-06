---
sidebar_position: 1
---

# Basics

Most fields can take a comma separated list like `value1, value2`.

The comma separated lists supports wildcards, where `*` means 0 or more characters and ? means exactly one character. Like `*this*,that?movie`.

If nothing but name and an indexer is specifed, it will match against anything for that indexer.

All filters are **case-insensitive**, so write them however you desire.

## General

### Name

- **Required:** Yes
- **Description:** Filter name.

### Enabled

- **Default:** false
- **Description:** Use it to enable or disable a filter. All filters are disabled by default.

### Indexers

- **Default:** none
- **Type:** Multiselect
- **Description:** Select which (active) indexers this filters should match with. Make sure to check the definitions how they handle things like `tags,freeleech,uploader` etc.

### Rules

Some basic filtering rules.

:::tip about size

Some indexers doesn't announce the size, so it needs to download the torrent file and parse it to get size if set.
autodl-irssi works like this as well. To get around this some api's will be implemented for trackers that are problematic.

For TV and movies it's advised to use filters like `resolution`, `source` and `codec` since these often have known sizes.

:::

#### Max size

- **Default:** Any size allowed
- **Description:** Max size allowed for torrents. Takes any size and converts internally to bytes. M,MB,MiB etc. 10G, 10GB

#### Min size

- **Default:** 0, any size allowed
- **Description:** Min size allowed for torrents. Takes any size and converts internally to bytes. M,MB,MiB etc. 10G, 10GB

#### Delay

- **Default:** 0
- **Description:** Number of seconds to wait before running actions. The integrations with Deluge and qBittorrent have re-announce enabled so there's generally no need to use delay.

#### Prioity

- **Default:** 0
- **Description:** When making the filter check it will fetch filters and order and run them by priority, highest to lowest. Supports positive and negative numbers. Default priority is set to 0.

## TV/Movies

### Movies / shows

- **Type:** Comma separated list
- **Example:** `Movie, That Other movie`
- **Description:** Supports wildcards but generally not needed. Eg. That?Movie, *the*

### Years

- **Type:** Comma separated list
- **Example:** `2018,2020-2021`

### Seasons

- **Type:** Comma separated list
- **Example:** `1,3-6`

### Episodes

- **Type:** Comma separated list
- **Example:** `1,2,10-20`

### Resolutions

- **Type:** Multiselect
- **Default:** Matches any
- **Example:** `1080p, 2160p`
- **Description:** Will only match releases with any of the selected resolutions

### Sources

- **Type:** Multiselect
- **Default:** Matches any
- **Example:** `Bluray, WEB-DL`
- **Description:** Will only match releases with any of the selected sources

### Codecs

- **Type:** Multiselect
- **Default:** Matches any
- **Example:** `h264,x264,h265,x265,HEVC`
- **Description:** Will only match releases with any of the selected codecs

### Containers

- **Type:** Multiselect
- **Default:** Matches any
- **Example:** `mkv`
- **Description:** Will only match releases with any of the selected containers. Only a few indexers announce this.

## Music

### Artists

- **Type:** Comma separated list
- **Example:** `Artist, That Other Artist, Some Other Artist`
- **Description:** Supports wildcards but generally not needed. Eg. That?Movie, *the*

### Albums

- **Type:** Comma separated list
- **Example:** `Album, Some Other Album, Yet Another Album`
- **Description:** Supports wildcards but generally not needed. Eg. That?Movie, *the*

### Years

- **Type:** Comma separated list
- **Example:** `2018,2020-2021`

### Format

- **Type:** Multiselect
- **Default:** Matches any
- **Example:** `FLAC, MP3, OGG, AAC, DTS`
- **Description:** Will only match releases with any of the selected formats.

### Quality

- **Type:** Multiselect
- **Default:** Matches any
- **Example:** `192, 320, v0, Lossless, 24 Bit Lossless`
- **Description:** Will only match releases with any of the selected qualities.

### Sources

- **Type:** Multiselect
- **Default:** Matches any
- **Example:** `CD, WEB, DVD, Vinyl, Soundboard, Cassette, DAT, SACD, Blu-ray`
- **Description:** Will only match releases with any of the selected sources.

### Type

- **Type:** Multiselect
- **Default:** Matches any
- **Example:** `Album, EP, Soundtrack, Anthology, Mixtape`
- **Description:** Will only match releases with any of the selected types.

### Log Score

- **Type:** Comma separated list
- **Example:** `50,100`
- **Description:** Matches log percent for indexers that announce it. Only some use percent.

### Log

- **Type:** Toggle
- **Description:** Enforces log requirement.

### Cue

- **Type:** Toggle
- **Description:** Enforces cue requirement.

### Perfect FLAC

- **Type:** Toggle
- **Description:** Overrides all options about quality, source, format, and cue/log/log score.

## Advanced

### Match releases

- **Type:** Comma separated list
- **Example:** `*Movie*remux*, That Other movie, *that?game*`
- **Description:** Useful for all types of releases. Supports wildcards like `That?Movie, *the*`. Regex is NOT supported yet.

### Except releases

- **Type:** Comma separated list
- **Example:** `*Movie*remux*, That Other movie, *that?game*`
- **Description:** If this matches, then filter will not go further. Useful for all types of releases. Supports wildcards like `That?Movie, *the*`. Regex is NOT supported yet.

### Match release groups

- **Type:** Comma separated list
- **Example:** `GTOUP1, OTHERGROUP`
- **Description:** Matches release group. Supports wildcards like `*group*`.

### Except release groups

- **Type:** Comma separated list
- **Example:** `BADGTOUP1, OTHERBADGROUP`
- **Description:** If this matches, then filter will not go further. Supports wildcards like `*group*`.

### Match categories

- **Type:** Comma separated list
- **Example:** `tv,tv/1080p`
- **Description:** Matches announced category. Supports wildcards like `*tv*`.

### Except categories

- **Type:** Comma separated list
- **Example:** `tv,tv/1080p`
- **Description:** If this matches, then filter will not go further. Supports wildcards like `*tv*`.

### Match tags

- **Type:** Comma separated list
- **Example:** `action,romance`
- **Description:** Matches announced tags. Not all indexers announce tags. Supports wildcards like `*action*`.

### Except tags

- **Type:** Comma separated list
- **Example:** `foreign`
- **Description:** If this matches, then filter will not go further. Supports wildcards like `*foreign*`.

### Match uploaders

- **Type:** Comma separated list
- **Example:** `uploader1,otheruploader`
- **Description:** Matches announced uploader. Not all indexers announce uploader. Supports wildcards like `*uploader*`.

### Except uploaders

- **Type:** Comma separated list
- **Example:** `anonymous,slow_uploader`
- **Description:** If this matches, then filter will not go further. Supports wildcards like `*uploader*`.

### Freeleech

- **Type:** Toggle
- **Description:** Matches freeleech for indexers that announces it.

### Freeleech Percent

- **Type:** Comma separated list
- **Example:** `50%,100%`
- **Description:** Matches freeleech percent for indexers that announces it. Only some use percent. Don not combine freeleech and freeleech percent.
