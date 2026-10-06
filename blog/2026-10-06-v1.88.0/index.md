---
slug: v1.88.0
title: v1.88.0
description: "autobrr v1.88.0 release notes: 15 new features and 13 bug fixes, including show update, IRC and list issues in header banner."
authors: [rogerrabbit]
---
## Changelog

### New Features

* feat(alerts): show update, IRC and list issues in header banner ([#2741](https://github.com/autobrr/autobrr/pull/2741)) ([@zze0s](https://github.com/zze0s))
* feat(arr): send tvdbId to Sonarr and use feed publish date ([#2746](https://github.com/autobrr/autobrr/pull/2746)) ([@GeneralPractitioner-GP](https://github.com/GeneralPractitioner-GP))
* feat(backend): add meta build info package and versioned User-Agent ([#2745](https://github.com/autobrr/autobrr/pull/2745)) ([@zze0s](https://github.com/zze0s))
* feat(downloaders): NZBGet add optional Skip TLS Verification ([#2735](https://github.com/autobrr/autobrr/pull/2735)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): F1Carreras capture freeleech ([#2750](https://github.com/autobrr/autobrr/pull/2750)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): Simurg parse announce type ([#2728](https://github.com/autobrr/autobrr/pull/2728)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add 0DayFiles ([#2744](https://github.com/autobrr/autobrr/pull/2744)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add DirtyBytes ([#2733](https://github.com/autobrr/autobrr/pull/2733)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): update InfinityHD with music category ([#2725](https://github.com/autobrr/autobrr/pull/2725)) ([@Jediten](https://github.com/Jediten))
* feat(indexers): update NordicBytes IRC network ([#2713](https://github.com/autobrr/autobrr/pull/2713)) ([@zze0s](https://github.com/zze0s))
* feat(notifications): add IRC health events ([#2739](https://github.com/autobrr/autobrr/pull/2739)) ([@zze0s](https://github.com/zze0s))
* feat(notifications): add built-in notification inbox ([#2732](https://github.com/autobrr/autobrr/pull/2732)) ([@zze0s](https://github.com/zze0s))
* feat(notifications): add feed refresh events ([#2738](https://github.com/autobrr/autobrr/pull/2738)) ([@zze0s](https://github.com/zze0s))
* feat(notifications): add list refresh events ([#2737](https://github.com/autobrr/autobrr/pull/2737)) ([@zze0s](https://github.com/zze0s))
* feat(web): restyle notification inbox to match the releases table ([#2743](https://github.com/autobrr/autobrr/pull/2743)) ([@nuxencs](https://github.com/nuxencs))

### Bug fixes

* fix(arr): reject HTTP errors in connection tests ([#2715](https://github.com/autobrr/autobrr/pull/2715)) ([@nuxencs](https://github.com/nuxencs))
* fix(feeds): do not multiply newznab timeout twice ([#2712](https://github.com/autobrr/autobrr/pull/2712)) ([@s0up4200](https://github.com/s0up4200))
* fix(feeds): honor configured timeout in feed tests ([#2714](https://github.com/autobrr/autobrr/pull/2714)) ([@nuxencs](https://github.com/nuxencs))
* fix(indexers): Aither updated announce format ([#2747](https://github.com/autobrr/autobrr/pull/2747)) ([@wthueb](https://github.com/wthueb))
* fix(indexers): IPT announce sizes parsed as decimal ([#2730](https://github.com/autobrr/autobrr/pull/2730)) ([@zze0s](https://github.com/zze0s))
* fix(indexers): TorrentHR make metadata ids optional ([#2731](https://github.com/autobrr/autobrr/pull/2731)) ([@senseiriksha](https://github.com/senseiriksha))
* fix(indexers): update PixelHD announce format ([#2719](https://github.com/autobrr/autobrr/pull/2719)) ([@godge1080p](https://github.com/godge1080p))
* fix(notifications): validate required fields and Notifiarr API key ([#2736](https://github.com/autobrr/autobrr/pull/2736)) ([@zze0s](https://github.com/zze0s))
* fix(releases): do not override announce container with empty parsed value ([#2709](https://github.com/autobrr/autobrr/pull/2709)) ([@zze0s](https://github.com/zze0s))
* fix(releases): keep announce resolution when release name has none ([#2711](https://github.com/autobrr/autobrr/pull/2711)) ([@s0up4200](https://github.com/s0up4200))
* fix(releases): preserve announced source when title has none ([#2716](https://github.com/autobrr/autobrr/pull/2716)) ([@nuxencs](https://github.com/nuxencs))
* fix(web): show exit label on incognito toggle when incognito is on ([#2726](https://github.com/autobrr/autobrr/pull/2726)) ([@nuxencs](https://github.com/nuxencs))
* fix(web): stop browsers autofilling saved logins into RSS settings ([#2729](https://github.com/autobrr/autobrr/pull/2729)) ([@zze0s](https://github.com/zze0s))

### Other work

* build(deps): bump pnpm/action-setup from 6.0.10 to 6.1.0 in the github group ([#2704](https://github.com/autobrr/autobrr/pull/2704)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the golang group with 14 updates ([#2721](https://github.com/autobrr/autobrr/pull/2721)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the npm group in /web with 25 updates ([#2722](https://github.com/autobrr/autobrr/pull/2722)) ([@dependabot](https://github.com/dependabot)[bot])
* chore(indexers): deprecate Aura4K ([#2717](https://github.com/autobrr/autobrr/pull/2717)) ([@zze0s](https://github.com/zze0s))
* ci(release): list breaking changes first in the changelog ([#2727](https://github.com/autobrr/autobrr/pull/2727)) ([@s0up4200](https://github.com/s0up4200))