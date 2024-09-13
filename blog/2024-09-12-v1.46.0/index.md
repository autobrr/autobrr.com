---
slug: v1.46.0
title: v1.46.0
authors: [rogerrabbit]
---
## Changelog


### New Features


* [accc875](https://github.com/autobrr/autobrr/commit/accc87596053ee98dfb52d7d070beda7876c152e): feat(database): improve error handling ([\#1633](https://github.com/autobrr/autobrr/pull/1633)) ([@zze0s](https://github.com/zze0s))
* [65d25c5](https://github.com/autobrr/autobrr/commit/65d25c56c99be68cb01e862d21f8fd6bcb390164): feat(diagnostics): add pprof profiling ([\#1627](https://github.com/autobrr/autobrr/pull/1627)) ([@KyleSanderson](https://github.com/KyleSanderson))
* [0d53f7e](https://github.com/autobrr/autobrr/commit/0d53f7e5fc1924557425b7d8449863d35f96e495): feat(download\-clients): rtorrent support Digest Auth ([\#1596](https://github.com/autobrr/autobrr/pull/1596)) ([@zze0s](https://github.com/zze0s))
* [acb91e8](https://github.com/autobrr/autobrr/commit/acb91e87092f5429c17bf4c0163908440cdf4244): feat(http): implement missing findByID methods ([\#1635](https://github.com/autobrr/autobrr/pull/1635)) ([@zze0s](https://github.com/zze0s))
* [f48b103](https://github.com/autobrr/autobrr/commit/f48b103a529d3b2f234b5d65eceb79e6e05c3b9f): feat(irc): allow lazy announcer nicks ([\#1322](https://github.com/autobrr/autobrr/pull/1322)) ([@s0up4200](https://github.com/s0up4200))
* [fd90020](https://github.com/autobrr/autobrr/commit/fd9002040042d090432932cae5aa1237e22cb5b5): feat(releases): show indexer name instead of identifier ([\#1706](https://github.com/autobrr/autobrr/pull/1706)) ([@zze0s](https://github.com/zze0s))
* [00b5728](https://github.com/autobrr/autobrr/commit/00b5728b4ac599b79f449bd8707f3013c0e3cec8): feat(web): manage initial focus for force run modal and filter add form ([\#1713](https://github.com/autobrr/autobrr/pull/1713)) ([@martylukyy](https://github.com/martylukyy))
* [bc0f4cc](https://github.com/autobrr/autobrr/commit/bc0f4cc055bff8930a8e1eb12c35aae72b3174c5): feat: add support for proxies to use with IRC and Indexers ([\#1421](https://github.com/autobrr/autobrr/pull/1421)) ([@zze0s](https://github.com/zze0s))


### Bug fixes


* [861f30c](https://github.com/autobrr/autobrr/commit/861f30c1445e7ce0466d9c31bdc21ee58e94307d): fix(actions): reject if client is disabled ([\#1626](https://github.com/autobrr/autobrr/pull/1626)) ([@zze0s](https://github.com/zze0s))
* [34d6e0c](https://github.com/autobrr/autobrr/commit/34d6e0cf609e225fa22261177d4b43c258f03566): fix(diagnostics): profiling config flags ([\#1637](https://github.com/autobrr/autobrr/pull/1637)) ([@zze0s](https://github.com/zze0s))
* [e603b26](https://github.com/autobrr/autobrr/commit/e603b262f78a7165b63e32952b8a5e17bf91231f): fix(docker): windows container ([\#1710](https://github.com/autobrr/autobrr/pull/1710)) ([@KyleSanderson](https://github.com/KyleSanderson))
* [abeb81e](https://github.com/autobrr/autobrr/commit/abeb81eea9786961319c4a4f80f4055127371e9e): fix(feeds): UNIT3D RSS size parsing ([\#1701](https://github.com/autobrr/autobrr/pull/1701)) ([@zze0s](https://github.com/zze0s))
* [5ae4ed3](https://github.com/autobrr/autobrr/commit/5ae4ed36048258961b92264815058bfed6f21482): fix(indexers): SATClubbing download url ([\#1630](https://github.com/autobrr/autobrr/pull/1630)) ([@zze0s](https://github.com/zze0s))
* [80426e4](https://github.com/autobrr/autobrr/commit/80426e4773a1852b93566f8f71a358944de2b059): fix(irc): revert lazy announcer check ([\#1707](https://github.com/autobrr/autobrr/pull/1707)) ([@zze0s](https://github.com/zze0s))
* [d380c0b](https://github.com/autobrr/autobrr/commit/d380c0b178bac5d347054896a3720b35509f2034): fix(macros): `TorrentHash` empty ([\#1699](https://github.com/autobrr/autobrr/pull/1699)) ([@zze0s](https://github.com/zze0s))
* [080274e](https://github.com/autobrr/autobrr/commit/080274e4da7c53e601d22468d96759c48f972116): fix(web): irc view mobile optimizations ([\#1714](https://github.com/autobrr/autobrr/pull/1714)) ([@martylukyy](https://github.com/martylukyy))
* [472d327](https://github.com/autobrr/autobrr/commit/472d3273087977a0a514ee3b54cd08380b71670e): fix(web): remove unused `checkForUpdates` JSON object ([\#1638](https://github.com/autobrr/autobrr/pull/1638)) ([@martylukyy](https://github.com/martylukyy))


### Other work


* [cf2da14](https://github.com/autobrr/autobrr/commit/cf2da140730aee8622f87461875a0c0766275de0): build(deps): bump the golang group across 1 directory with 3 updates ([\#1644](https://github.com/autobrr/autobrr/pull/1644)) ([@dependabot](https://github.com/dependabot)\[bot])
* [89cf68e](https://github.com/autobrr/autobrr/commit/89cf68e7737a3c9f0fc62803c46e853cf3ec2989): build(deps): bump the npm group across 1 directory with 17 updates ([\#1645](https://github.com/autobrr/autobrr/pull/1645)) ([@dependabot](https://github.com/dependabot)\[bot])
* [46b3ae8](https://github.com/autobrr/autobrr/commit/46b3ae8a0fa77274b0088c4f9ca31f2638f5c6b5): build(docker): add Windows images ([\#1640](https://github.com/autobrr/autobrr/pull/1640)) ([@KyleSanderson](https://github.com/KyleSanderson))
* [f3c7946](https://github.com/autobrr/autobrr/commit/f3c7946e52c739ebe04e8d71038f1ce5389095d5): chore(deps): update Go to `1.23` and Node to `20.17.0` ([\#1639](https://github.com/autobrr/autobrr/pull/1639)) ([@KyleSanderson](https://github.com/KyleSanderson))
* [0cd29b9](https://github.com/autobrr/autobrr/commit/0cd29b95eadfae196393c3c24d33217c9f4b9239): chore(indexers): remove STT and STC ([\#1708](https://github.com/autobrr/autobrr/pull/1708)) ([@fabricionaweb](https://github.com/fabricionaweb))
* [c3824f3](https://github.com/autobrr/autobrr/commit/c3824f35192466f395798bc0602367a4693a57cf): chore(tests): correct typos ([\#1715](https://github.com/autobrr/autobrr/pull/1715)) ([@KyleSanderson](https://github.com/KyleSanderson))
* [54eab05](https://github.com/autobrr/autobrr/commit/54eab05f1fddccef2cdee6c475ee491a6d91e764): chore: update issue templates ([\#1704](https://github.com/autobrr/autobrr/pull/1704)) ([@zze0s](https://github.com/zze0s))
* [c3530ac](https://github.com/autobrr/autobrr/commit/c3530ac8aff21c586acf678dd87ea2ee8ab26103): ci(linters): update Go and Node versions ([\#1700](https://github.com/autobrr/autobrr/pull/1700)) ([@zze0s](https://github.com/zze0s))
* [77e1c2c](https://github.com/autobrr/autobrr/commit/77e1c2c30561f2f3adcbd4680b1ec66e0c6f6a29): docs(contributing): add note about postgres timezones ([\#1550](https://github.com/autobrr/autobrr/pull/1550)) ([@kenstir](https://github.com/kenstir))
* [d13b421](https://github.com/autobrr/autobrr/commit/d13b421c4200623e0ad8d6fdf2677cc89ea9ef9a): refactor(http): api key cache handling ([\#1632](https://github.com/autobrr/autobrr/pull/1632)) ([@zze0s](https://github.com/zze0s))
* [cc0cca9](https://github.com/autobrr/autobrr/commit/cc0cca9f0d371c614aea671f8b017b6564b339c0): refactor(http): implement bufio ([\#1604](https://github.com/autobrr/autobrr/pull/1604)) ([@KyleSanderson](https://github.com/KyleSanderson))
* [b681846](https://github.com/autobrr/autobrr/commit/b681846b51b51e724fbfadd01cda138b9b33d113): refactor(logs): move sanitize ([\#1636](https://github.com/autobrr/autobrr/pull/1636)) ([@zze0s](https://github.com/zze0s))
* [982f7dd](https://github.com/autobrr/autobrr/commit/982f7ddf68a79d9038cc2b6c80dff916ea9828a2): refactor(wildcard): optimize and add caching ([\#1634](https://github.com/autobrr/autobrr/pull/1634)) ([@KyleSanderson](https://github.com/KyleSanderson))


**Full Changelog**: [v1\.45\.0\...v1\.46\.0](https://github.com/autobrr/autobrr/compare/v1.45.0...v1.46.0)


## Docker images


* `docker pull ghcr.io/autobrr/autobrr:v1.46.0`


## What to do next?


* Read the [documentation](https://autobrr.com)
* Join our [Discord server](https://discord.gg/WQ2eUycxyT)
