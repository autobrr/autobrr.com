---
slug: v1.91.0
title: v1.91.0
description: "autobrr v1.91.0 release notes: 9 new features and 16 bug fixes, including add permissions to API keys and add forward authentication mode."
authors: [rogerrabbit]
---
## Changelog

### New Features

* feat(api): add permissions to API keys ([#2740](https://github.com/autobrr/autobrr/pull/2740)) ([@zze0s](https://github.com/zze0s))
* feat(auth): add forward authentication mode ([#2824](https://github.com/autobrr/autobrr/pull/2824)) ([@zze0s](https://github.com/zze0s))
* feat(auth): restrict OIDC login to one allowed user ([#2808](https://github.com/autobrr/autobrr/pull/2808)) ([@zze0s](https://github.com/zze0s))
* feat(auth): support automatic OIDC login ([#2791](https://github.com/autobrr/autobrr/pull/2791)) ([@Appolon24800](https://github.com/Appolon24800))
* feat(auth): support disabling authentication behind a trusted reverse proxy ([#2530](https://github.com/autobrr/autobrr/pull/2530)) ([@arjunrn](https://github.com/arjunrn))
* feat(desktop): add Windows desktop tray app ([#2766](https://github.com/autobrr/autobrr/pull/2766)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): add BLU with Matrix announce support ([#2826](https://github.com/autobrr/autobrr/pull/2826)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): update Anthelion IRC network ([#2847](https://github.com/autobrr/autobrr/pull/2847)) ([@zze0s](https://github.com/zze0s))
* feat(tests): add pipeline simulation harness ([#2817](https://github.com/autobrr/autobrr/pull/2817)) ([@zze0s](https://github.com/zze0s))

### Bug fixes

* fix(actions): delete stalled Transmission torrents after max re-announce attempts ([#2816](https://github.com/autobrr/autobrr/pull/2816)) ([@Heliedan](https://github.com/Heliedan))
* fix(actions): lowercase Deluge labels before setting them ([#2821](https://github.com/autobrr/autobrr/pull/2821)) ([@Heliedan](https://github.com/Heliedan))
* fix(auth): OIDC state mismatch when several tabs log in at once ([#2811](https://github.com/autobrr/autobrr/pull/2811)) ([@zze0s](https://github.com/zze0s))
* fix(auth): blank login page when OIDC provider is down at startup ([#2809](https://github.com/autobrr/autobrr/pull/2809)) ([@zze0s](https://github.com/zze0s))
* fix(database): build the PostgreSQL DSN as libpq keywords ([#2837](https://github.com/autobrr/autobrr/pull/2837)) ([@connor-grady](https://github.com/connor-grady))
* fix(feeds): RSS categories duplicated per item category ([#2815](https://github.com/autobrr/autobrr/pull/2815)) ([@zze0s](https://github.com/zze0s))
* fix(filters): check all release categories in except categories ([#2814](https://github.com/autobrr/autobrr/pull/2814)) ([@Heliedan](https://github.com/Heliedan))
* fix(filters): check every freeleech percent range ([#2842](https://github.com/autobrr/autobrr/pull/2842)) ([@jayhemnani9910](https://github.com/jayhemnani9910))
* fix(http): use path IDs on update and correct error statuses ([#2834](https://github.com/autobrr/autobrr/pull/2834)) ([@zze0s](https://github.com/zze0s))
* fix(indexers): skip IRC and Matrix announces for disabled indexers ([#2828](https://github.com/autobrr/autobrr/pull/2828)) ([@zze0s](https://github.com/zze0s))
* fix(irc): keep network up after a reconnect on a fallback nick ([#2829](https://github.com/autobrr/autobrr/pull/2829)) ([@s0up4200](https://github.com/s0up4200))
* fix(irc): log in again when services return from an outage ([#2830](https://github.com/autobrr/autobrr/pull/2830)) ([@s0up4200](https://github.com/s0up4200))
* fix(irc): reconnect when a fallback nick misses the server join ([#2836](https://github.com/autobrr/autobrr/pull/2836)) ([@s0up4200](https://github.com/s0up4200))
* fix(irc): retry invites refused on a fallback nick and stop nick loops ([#2835](https://github.com/autobrr/autobrr/pull/2835)) ([@zze0s](https://github.com/zze0s))
* fix(lists): Trakt imports limited to 100 items ([#2813](https://github.com/autobrr/autobrr/pull/2813)) ([@zze0s](https://github.com/zze0s))
* fix(web): password login under a base URL lands outside it ([#2810](https://github.com/autobrr/autobrr/pull/2810)) ([@zze0s](https://github.com/zze0s))

### Other work

* build(ci): remove PGO and speed up release workflow ([#2818](https://github.com/autobrr/autobrr/pull/2818)) ([@zze0s](https://github.com/zze0s))
* build(deps): bump pnpm/action-setup from 6.1.0 to 6.1.1 in the github group ([#2832](https://github.com/autobrr/autobrr/pull/2832)) ([@dependabot](https://github.com/dependabot)[bot])
* perf(database): cache sqlite statements and size the postgres pool ([#2819](https://github.com/autobrr/autobrr/pull/2819)) ([@zze0s](https://github.com/zze0s))
* refactor(auth): resolve auth mode and caller in one place ([#2823](https://github.com/autobrr/autobrr/pull/2823)) ([@zze0s](https://github.com/zze0s))