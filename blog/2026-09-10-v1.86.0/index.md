---
slug: v1.86.0
title: v1.86.0
authors: [rogerrabbit]
---
## Changelog

### New Features

* feat(database): add progress logs for startup consistency checks ([#2642](https://github.com/autobrr/autobrr/pull/2642)) ([@zze0s](https://github.com/zze0s))
* feat(downloaders): Sonarr and Radarr send IMDB and TMDB ids ([#2643](https://github.com/autobrr/autobrr/pull/2643)) ([@zze0s](https://github.com/zze0s))
* feat(filters): add Test button to External filters ([#2654](https://github.com/autobrr/autobrr/pull/2654)) ([@zze0s](https://github.com/zze0s))
* feat(filters): add Toggle All button ([#2171](https://github.com/autobrr/autobrr/pull/2171)) ([@luckylittle](https://github.com/luckylittle))
* feat(indexers): update XSpeeds IRC addr ([#2678](https://github.com/autobrr/autobrr/pull/2678)) ([@zze0s](https://github.com/zze0s))
* feat(proxy): warn about usage on delete and update ([#2659](https://github.com/autobrr/autobrr/pull/2659)) ([@zze0s](https://github.com/zze0s))

### Bug fixes

* fix(dashboard): correct chart ordering and hover ([#2644](https://github.com/autobrr/autobrr/pull/2644)) ([@nuxencs](https://github.com/nuxencs))
* fix(feeds): set InfoURL from torznab guid ([#2675](https://github.com/autobrr/autobrr/pull/2675)) ([@nicholas-shi](https://github.com/nicholas-shi))
* fix(http): set session cookie Secure attribute per request ([#2679](https://github.com/autobrr/autobrr/pull/2679)) ([@zze0s](https://github.com/zze0s))
* fix(lists): assert pointer client type when refreshing arr lists ([#2669](https://github.com/autobrr/autobrr/pull/2669)) ([@s0up4200](https://github.com/s0up4200))
* fix(web): handle invalid filter ids in filter route ([#2677](https://github.com/autobrr/autobrr/pull/2677)) ([@zze0s](https://github.com/zze0s))

### Other work

* build(deps): bump the golang group with 8 updates ([#2648](https://github.com/autobrr/autobrr/pull/2648)) ([@dependabot](https://github.com/dependabot)[bot])
* build(deps): bump the npm group in /web with 22 updates ([#2649](https://github.com/autobrr/autobrr/pull/2649)) ([@dependabot](https://github.com/dependabot)[bot])
* chore(deps): replace ttlcache and regexcache with autobrr/go-cache ([#2652](https://github.com/autobrr/autobrr/pull/2652)) ([@zze0s](https://github.com/zze0s))
* chore(web): fix lint errors and warnings ([#2661](https://github.com/autobrr/autobrr/pull/2661)) ([@zze0s](https://github.com/zze0s))
* chore: add PR\_DESCRIPTION.md to .gitignore ([#2658](https://github.com/autobrr/autobrr/pull/2658)) ([@zze0s](https://github.com/zze0s))
* perf(web): code split the app and fix cache and re-render issues ([#2663](https://github.com/autobrr/autobrr/pull/2663)) ([@zze0s](https://github.com/zze0s))
* refactor(downloader): unify downloader service and list processors ([#2650](https://github.com/autobrr/autobrr/pull/2650)) ([@zze0s](https://github.com/zze0s))
* refactor(web): migrate Formik to Tanstack Form ([#2653](https://github.com/autobrr/autobrr/pull/2653)) ([@zze0s](https://github.com/zze0s))
* refactor: modernize Go code for the 1.27 toolchain ([#2651](https://github.com/autobrr/autobrr/pull/2651)) ([@zze0s](https://github.com/zze0s))