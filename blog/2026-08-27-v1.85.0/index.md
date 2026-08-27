---
slug: v1.85.0
title: v1.85.0
authors: [rogerrabbit]
---
## Changelog

### New Features

* feat(dashboard): refine stats customization ([#2613](https://github.com/autobrr/autobrr/pull/2613)) ([@nuxencs](https://github.com/nuxencs))
* feat(feeds): make feed cache TTL configurable ([#2632](https://github.com/autobrr/autobrr/pull/2632)) ([@zze0s](https://github.com/zze0s))
* feat(filters): add rolling-window support for download limits ([#2359](https://github.com/autobrr/autobrr/pull/2359)) ([@thmro](https://github.com/thmro))
* feat(filters): set new external filter to enabled by default ([#2633](https://github.com/autobrr/autobrr/pull/2633)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add ItaTorrents ([#2564](https://github.com/autobrr/autobrr/pull/2564)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add Simurg ([#2639](https://github.com/autobrr/autobrr/pull/2639)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): handle deprecations ([#2507](https://github.com/autobrr/autobrr/pull/2507)) ([@zze0s](https://github.com/zze0s))
* feat(macros): expose release RawVars ([#2441](https://github.com/autobrr/autobrr/pull/2441)) ([@sudo2k16](https://github.com/sudo2k16))

### Bug fixes

* fix(actions): preserve parsed metadata for retrying ([#2615](https://github.com/autobrr/autobrr/pull/2615)) ([@mvanhorn](https://github.com/mvanhorn))
* fix(downloadclients): redact secrets from arr errors ([#2595](https://github.com/autobrr/autobrr/pull/2595)) ([@com6056](https://github.com/com6056))
* fix(downloadclients): report temporarily rejected arr pushes ([#2610](https://github.com/autobrr/autobrr/pull/2610)) ([@zze0s](https://github.com/zze0s))
* fix(filters): handle filter update with deprecated indexers ([#2620](https://github.com/autobrr/autobrr/pull/2620)) ([@zze0s](https://github.com/zze0s))
* fix(irc): do not log unmonitored bouncer traffic as errors ([#2617](https://github.com/autobrr/autobrr/pull/2617)) ([@tropicalseal](https://github.com/tropicalseal))
* fix(notifications): per-filter mute and global fallback handling ([#2629](https://github.com/autobrr/autobrr/pull/2629)) ([@zze0s](https://github.com/zze0s))
* fix(web): copy to clipboard ([#2623](https://github.com/autobrr/autobrr/pull/2623)) ([@zze0s](https://github.com/zze0s))

### Other work

* build(deps): bump the golang group with 8 updates ([#2616](https://github.com/autobrr/autobrr/pull/2616)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): update Go to 1.27.0 and bump Docker base images ([#2626](https://github.com/autobrr/autobrr/pull/2626)) ([@zze0s](https://github.com/zze0s))
* chore(indexers): deprecate MoreThanTV ([#2585](https://github.com/autobrr/autobrr/pull/2585)) ([@s0up4200](https://github.com/s0up4200))
* chore(indexers): deprecate Nexum ([#2614](https://github.com/autobrr/autobrr/pull/2614)) ([@zze0s](https://github.com/zze0s))
* chore(indexers): update Samaritano IRC port and TLS ([#2612](https://github.com/autobrr/autobrr/pull/2612)) ([@vaaleyard](https://github.com/vaaleyard))
* chore: normalize line endings to LF ([#2636](https://github.com/autobrr/autobrr/pull/2636)) ([@zze0s](https://github.com/zze0s))
* refactor(database): use embedded PG for all tests ([#2618](https://github.com/autobrr/autobrr/pull/2618)) ([@zze0s](https://github.com/zze0s))
* refactor(eventbus): typed pub/sub and event-driven notifications ([#2624](https://github.com/autobrr/autobrr/pull/2624)) ([@zze0s](https://github.com/zze0s))
* refactor(notifications): split services into per-provider clients ([#2631](https://github.com/autobrr/autobrr/pull/2631)) ([@zze0s](https://github.com/zze0s))