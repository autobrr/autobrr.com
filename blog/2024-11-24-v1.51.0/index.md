---
slug: v1.51.0
title: v1.51.0
authors: [rogerrabbit]
---

## Changelog

### New Features

* [7888ea3](https://github.com/autobrr/autobrr/commit/7888ea3ae526e6bae9a63aa46635bd3311180633): feat(ci): add workflow to trigger docs update on release ([#1826](https://github.com/autobrr/autobrr/pull/1826)) ([@s0up4200](https://github.com/s0up4200))
* [74eea79](https://github.com/autobrr/autobrr/commit/74eea79215f4aff95990a7e9878d7e97c03c1e12): feat(database): SQLite database backups ([#1756](https://github.com/autobrr/autobrr/pull/1756)) ([@martylukyy](https://github.com/martylukyy))
* [fc137f2](https://github.com/autobrr/autobrr/commit/fc137f2077da23112511facb8f531424e1070ad7): feat(http): add error logging for API responses ([#1819](https://github.com/autobrr/autobrr/pull/1819)) ([@s0up4200](https://github.com/s0up4200))
* [b0a30dd](https://github.com/autobrr/autobrr/commit/b0a30dd136fd0cb71bb0010ce63cf46d5141c202): feat(indexers): REDACTED update urls ([#1830](https://github.com/autobrr/autobrr/pull/1830)) ([@zze0s](https://github.com/zze0s))
* [be9a956](https://github.com/autobrr/autobrr/commit/be9a956598f4b79946e0940dd1b5a616c6f9b6f7): feat(indexers): update SeedPool IRC announce parsing ([#1835](https://github.com/autobrr/autobrr/pull/1835)) ([@zze0s](https://github.com/zze0s))
* [b17e586](https://github.com/autobrr/autobrr/commit/b17e586d63f10a93382d2bb74eae1552da892422): feat(runtime): Set GOMEMLIMIT from environment ([#1821](https://github.com/autobrr/autobrr/pull/1821)) ([@KyleSanderson](https://github.com/KyleSanderson))
* [4cc0f9c](https://github.com/autobrr/autobrr/commit/4cc0f9cc832bef447bb6ea9f9011e895f759dd0e): feat(tests): add Parallelization where possible ([#1823](https://github.com/autobrr/autobrr/pull/1823)) ([@KyleSanderson](https://github.com/KyleSanderson))

### Bug fixes

* [a18284e](https://github.com/autobrr/autobrr/commit/a18284ecc67018c7f5a93815a4772d9550ec32b1): fix(build): Dockerfile windows entrypoint ([#1831](https://github.com/autobrr/autobrr/pull/1831)) ([@zze0s](https://github.com/zze0s))
* [2dcd876](https://github.com/autobrr/autobrr/commit/2dcd87606802f551111cf75f3e05d701d8f513bf): fix(database): SeedPool migrations ([#1838](https://github.com/autobrr/autobrr/pull/1838)) ([@zze0s](https://github.com/zze0s))
* [f54c51f](https://github.com/autobrr/autobrr/commit/f54c51fa06c2beedf69cadcdccdb7ae3ee1da669): fix(downloadclient): qBittorrent url parse err handling ([#1832](https://github.com/autobrr/autobrr/pull/1832)) ([@zze0s](https://github.com/zze0s))
* [c0882af](https://github.com/autobrr/autobrr/commit/c0882aff843752731bb5e320f3ebfeed81efa6cf): fix(releases): parse missing source and misinterpreted group name ([#1820](https://github.com/autobrr/autobrr/pull/1820)) ([@zze0s](https://github.com/zze0s))

### Other work

* [50f1e4e](https://github.com/autobrr/autobrr/commit/50f1e4e7d55cbc0fdd250436b26a6cec7921af95): build(ci): implement PGO ([#1812](https://github.com/autobrr/autobrr/pull/1812)) ([@KyleSanderson](https://github.com/KyleSanderson))
* [e2df1e4](https://github.com/autobrr/autobrr/commit/e2df1e4fb8e501fbf1b81b1878c2ae472bf7d62b): chore: update .gitignore ([#1840](https://github.com/autobrr/autobrr/pull/1840)) ([@zze0s](https://github.com/zze0s))

**Full Changelog**: [v1.50.0...v1.51.0](https://github.com/autobrr/autobrr/compare/v1.50.0...v1.51.0)

## Docker images

* `docker pull ghcr.io/autobrr/autobrr:v1.51.0`

## What to do next?

* Read the [documentation](https://autobrr.com)
* Join our [Discord server](https://discord.gg/WQ2eUycxyT)
