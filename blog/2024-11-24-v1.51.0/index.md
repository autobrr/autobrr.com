---
slug: v1.51.0
title: v1.51.0
authors: [rogerrabbit]
---

## Changelog

### New Features

* feat(ci): add workflow to trigger docs update on release ([#1826](https://github.com/autobrr/autobrr/pull/1826)) ([@s0up4200](https://github.com/s0up4200))
* feat(database): SQLite database backups ([#1756](https://github.com/autobrr/autobrr/pull/1756)) ([@martylukyy](https://github.com/martylukyy))
* feat(http): add error logging for API responses ([#1819](https://github.com/autobrr/autobrr/pull/1819)) ([@s0up4200](https://github.com/s0up4200))
* feat(indexers): REDACTED update urls ([#1830](https://github.com/autobrr/autobrr/pull/1830)) ([@zze0s](https://github.com/zze0s))
* feat(indexers): update SeedPool IRC announce parsing ([#1835](https://github.com/autobrr/autobrr/pull/1835)) ([@zze0s](https://github.com/zze0s))
* feat(runtime): Set GOMEMLIMIT from environment ([#1821](https://github.com/autobrr/autobrr/pull/1821)) ([@KyleSanderson](https://github.com/KyleSanderson))
* feat(tests): add Parallelization where possible ([#1823](https://github.com/autobrr/autobrr/pull/1823)) ([@KyleSanderson](https://github.com/KyleSanderson))

### Bug fixes

* fix(build): Dockerfile windows entrypoint ([#1831](https://github.com/autobrr/autobrr/pull/1831)) ([@zze0s](https://github.com/zze0s))
* fix(database): SeedPool migrations ([#1838](https://github.com/autobrr/autobrr/pull/1838)) ([@zze0s](https://github.com/zze0s))
* fix(downloadclient): qBittorrent url parse err handling ([#1832](https://github.com/autobrr/autobrr/pull/1832)) ([@zze0s](https://github.com/zze0s))
* fix(releases): parse missing source and misinterpreted group name ([#1820](https://github.com/autobrr/autobrr/pull/1820)) ([@zze0s](https://github.com/zze0s))

### Other work

* build(ci): implement PGO ([#1812](https://github.com/autobrr/autobrr/pull/1812)) ([@KyleSanderson](https://github.com/KyleSanderson))
* chore: update .gitignore ([#1840](https://github.com/autobrr/autobrr/pull/1840)) ([@zze0s](https://github.com/zze0s))

**Full Changelog**: [v1.50.0...v1.51.0](https://github.com/autobrr/autobrr/compare/v1.50.0...v1.51.0)

## Docker images

* `docker pull ghcr.io/autobrr/autobrr:v1.51.0`

## What to do next?

* Read the [documentation](https://autobrr.com)
* Join our [Discord server](https://discord.autobrr.com/)
