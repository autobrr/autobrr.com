---
slug: v1.46.0
title: v1.46.0
authors: [rogerrabbit]
---
## Changelog


### New Features


* feat(database): improve error handling ([\#1633](https://github.com/autobrr/autobrr/pull/1633)) ([@zze0s](https://github.com/zze0s))
* feat(diagnostics): add pprof profiling ([\#1627](https://github.com/autobrr/autobrr/pull/1627)) ([@KyleSanderson](https://github.com/KyleSanderson))
* feat(download\-clients): rtorrent support Digest Auth ([\#1596](https://github.com/autobrr/autobrr/pull/1596)) ([@zze0s](https://github.com/zze0s))
* feat(http): implement missing findByID methods ([\#1635](https://github.com/autobrr/autobrr/pull/1635)) ([@zze0s](https://github.com/zze0s))
* feat(irc): allow lazy announcer nicks ([\#1322](https://github.com/autobrr/autobrr/pull/1322)) ([@s0up4200](https://github.com/s0up4200))
* feat(releases): show indexer name instead of identifier ([\#1706](https://github.com/autobrr/autobrr/pull/1706)) ([@zze0s](https://github.com/zze0s))
* feat(web): manage initial focus for force run modal and filter add form ([\#1713](https://github.com/autobrr/autobrr/pull/1713)) ([@martylukyy](https://github.com/martylukyy))
* feat: add support for proxies to use with IRC and Indexers ([\#1421](https://github.com/autobrr/autobrr/pull/1421)) ([@zze0s](https://github.com/zze0s))


### Bug fixes


* fix(actions): reject if client is disabled ([\#1626](https://github.com/autobrr/autobrr/pull/1626)) ([@zze0s](https://github.com/zze0s))
* fix(diagnostics): profiling config flags ([\#1637](https://github.com/autobrr/autobrr/pull/1637)) ([@zze0s](https://github.com/zze0s))
* fix(docker): windows container ([\#1710](https://github.com/autobrr/autobrr/pull/1710)) ([@KyleSanderson](https://github.com/KyleSanderson))
* fix(feeds): UNIT3D RSS size parsing ([\#1701](https://github.com/autobrr/autobrr/pull/1701)) ([@zze0s](https://github.com/zze0s))
* fix(indexers): SATClubbing download url ([\#1630](https://github.com/autobrr/autobrr/pull/1630)) ([@zze0s](https://github.com/zze0s))
* fix(irc): revert lazy announcer check ([\#1707](https://github.com/autobrr/autobrr/pull/1707)) ([@zze0s](https://github.com/zze0s))
* fix(macros): `TorrentHash` empty ([\#1699](https://github.com/autobrr/autobrr/pull/1699)) ([@zze0s](https://github.com/zze0s))
* fix(web): irc view mobile optimizations ([\#1714](https://github.com/autobrr/autobrr/pull/1714)) ([@martylukyy](https://github.com/martylukyy))
* fix(web): remove unused `checkForUpdates` JSON object ([\#1638](https://github.com/autobrr/autobrr/pull/1638)) ([@martylukyy](https://github.com/martylukyy))


### Other work


* build(deps): bump the golang group across 1 directory with 3 updates ([\#1644](https://github.com/autobrr/autobrr/pull/1644)) ([@dependabot](https://github.com/dependabot)\[bot])
* build(deps): bump the npm group across 1 directory with 17 updates ([\#1645](https://github.com/autobrr/autobrr/pull/1645)) ([@dependabot](https://github.com/dependabot)\[bot])
* build(docker): add Windows images ([\#1640](https://github.com/autobrr/autobrr/pull/1640)) ([@KyleSanderson](https://github.com/KyleSanderson))
* chore(deps): update Go to `1.23` and Node to `20.17.0` ([\#1639](https://github.com/autobrr/autobrr/pull/1639)) ([@KyleSanderson](https://github.com/KyleSanderson))
* chore(indexers): remove STT and STC ([\#1708](https://github.com/autobrr/autobrr/pull/1708)) ([@fabricionaweb](https://github.com/fabricionaweb))
* chore(tests): correct typos ([\#1715](https://github.com/autobrr/autobrr/pull/1715)) ([@KyleSanderson](https://github.com/KyleSanderson))
* chore: update issue templates ([\#1704](https://github.com/autobrr/autobrr/pull/1704)) ([@zze0s](https://github.com/zze0s))
* ci(linters): update Go and Node versions ([\#1700](https://github.com/autobrr/autobrr/pull/1700)) ([@zze0s](https://github.com/zze0s))
* docs(contributing): add note about postgres timezones ([\#1550](https://github.com/autobrr/autobrr/pull/1550)) ([@kenstir](https://github.com/kenstir))
* refactor(http): api key cache handling ([\#1632](https://github.com/autobrr/autobrr/pull/1632)) ([@zze0s](https://github.com/zze0s))
* refactor(http): implement bufio ([\#1604](https://github.com/autobrr/autobrr/pull/1604)) ([@KyleSanderson](https://github.com/KyleSanderson))
* refactor(logs): move sanitize ([\#1636](https://github.com/autobrr/autobrr/pull/1636)) ([@zze0s](https://github.com/zze0s))
* refactor(wildcard): optimize and add caching ([\#1634](https://github.com/autobrr/autobrr/pull/1634)) ([@KyleSanderson](https://github.com/KyleSanderson))


**Full Changelog**: [v1\.45\.0\...v1\.46\.0](https://github.com/autobrr/autobrr/compare/v1.45.0...v1.46.0)


## Docker images


* `docker pull ghcr.io/autobrr/autobrr:v1.46.0`


## What to do next?


* Read the [documentation](https://autobrr.com)
* Join our [Discord server](https://discord.autobrr.com/)
