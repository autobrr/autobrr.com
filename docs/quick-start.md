---
sidebar_position: 1
sidebar_label: Quick Start
pagination_next: installation/linux
title: Quick Start
description: Autobrr quick start
keywords: [autobrr, quick-start, start, intro, introduction]
---

# Quick Start

The following considers a common use case, feeding IRC announcements for a private
tracker to a Servarr instance, as a way to illustrate how the components of autobrr fit
together and what is required to get up and running. It's not the only use case and
other use cases may require more RTFM'ing in [the configuration docs](./configuration/autobrr.md).

1. [Install autobrr](./installation/linux.md).

   Proceed once the web UI is accessible.

2. Create a user for yourself.

   Most easily done through the initial "GUI" in the web UI when autobrr is first
   started.

3. [Register a nick on your indexer's IRC
   network](/configuration/irc#registering-with-nickserv).

4. [Group a "bot" nick with your real nick](./configuration/irc.md#grouping-nicks).

   This is the common case, but check your tracker's IRC documentation and adjust as
   appropriate.

5. Add an [indexer](./configuration/indexers.md).

6. Add a [download client](./configuration/download-clients/dedi.md).

   **NOTE**: In the context of autobrr, Servarr instances are considered download
   clients.

7. Add a [filter](./filters/basics.md).

   To feed all IRC announcements to a Servarr instance to let it decide what, if
   anything, to do with the release, just add a filter with the indexer from #5
   selected and leave the rest blank. Don't forget to enable the filter.

   **NOTE**: Autobrr does nothing with received IRC announcements without at least one
   filter applied to at least one indexer.

8. Add a [filter action](./filters/actions.md).

   Add an action of the matching Servarr type (e.g. Sonarr type action for a Sonarr
   instance), select the "download client" that corresponds to that type from #6, give
   it a name and save.

   **NOTE**: Autobrr does nothing with received IRC announcements without at least one
   action enabled in at least one filter.

9. Double-check the resulting settings so far.

   Review all the indexer, download client, and IRC network settings in the autobrr web
   UI and correct any errors and omissions. Ensure that everything but the IRC network
   is enabled.

10. Enable the IRC network.

    **NOTE**: The network will display as `unhealthy` and `network unhealthy` messages
    appear in the logs until authentication has succeeded and autobrr has successfully
    joined the announcements channel. So you may safely ignore these messages until the
    logs show further information about connecting, authenticating and joining the
    channel.

Now you can monitor the logs for announcements from IRC, pushes to the Servarr instance,
and details for what, if anything, Servarr did with the release:

```
INFO Matched 'Foo Series S01E01 1080p WEB h264-BarGrp' (All) for foo-indexer
DEBUG release.store: &{ID:12 FilterStatus:FILTER_APPROVED Rejections:[] Indexer:foo-indexer FilterName:All Protocol:torrent Implementation:IRC Timestamp:1970-01-01 00:00:00.000000000 -0000 UTC m=+0000.000000000 GroupID: TorrentID:######### TorrentURL:https://www.example.com/Foo+Series+S01E01+1080p+WEB+h264-BarGrp.torrent TorrentTmpFile: TorrentDataRawBytes:[] TorrentHash: TorrentName:Foo Series S01E01 1080p WEB h264-BarGrp Size:0 Title:Foo Series Category:TV :: Episodes HD Categories:[] Season:1 Episode:1 Year:0 Resolution:1080p Source:WEB Codec:[H.264] Container: HDR:[] Audio:[] AudioChannels: Group:BarGrp Region: Language: Proper:false Repack:false Website: Artists: Type: LogScore:0 IsScene:false Origin: Tags:[] ReleaseTags: Freeleech:false FreeleechPercent:0 Bonus:[] Uploader:Anonymous PreTime: Other:[] RawCookie: AdditionalSizeCheckRequired:false FilterID:1 Filter:0x########## ActionStatus:[]}
DEBUG sonarr: release push rejected: Foo Series S01E01 1080p WEB h264-BarGrp, indexer foo-indexer to http://localhost:8989 reasons: '[Unknown Series]'
DEBUG release rejected: Unknown Series
```
