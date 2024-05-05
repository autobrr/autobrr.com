---
slug: 1.40.0
title: v1.40.0
authors: [rogerrabbit]
---

## Changelog

### New Features

- feat(filters): add sources and codecs (#1470) (@martylukyy)
- feat(indexers): BTFiles add channel password field (#1476) (@martylukyy)
- feat(indexers): add AnimeWorld (#1472) (@Pheromir)
- feat(indexers): add FearNoPeer (#1459) (@vincejv)
- feat(indexers): add Lillesky (#1439) (@zze0s)
- feat(indexers): update Hawke-UNO irc auth (#1467) (@fabricionaweb)
- feat(irc): manually re-process announces (#1419) (@zze0s)
- feat(irc): set channel pass on indexer add (#1473) (@zze0s)

### Bug fixes

- fix(auth): correct redirect on bad session cookie (#1475) (@zze0s)
- fix(autobrrctl): prevent empty password (#1468) (@martylukyy)
- fix(backend): do not exit on `GOMAXPROCS` error (#1469) (@zze0s)
- fix(ci): missing commit hash in docker builds (#1448) (@nuxencs)
- fix(feeds): always upgrade size from RSS description (#1458) (@KyleSanderson)
- fix(filters): remove unusable resolution constants (#1464) (@martylukyy)
- fix(indexers): LilleSky update irc announce parsing (#1474) (@zze0s)
- fix(notifications): ntfy.sh Typo in Content-Type header value (#1452) (@felix4643)

### Other work

- build(deps): bump the golang group with 6 updates (#1447) (@dependabot[bot])
- build(deps): bump the npm group in /web with 16 updates (#1446) (@dependabot[bot])

**Full Changelog**: [https://github.com/autobrr/autobrr/compare/v1.39.1...v1.40.0](https://github.com/autobrr/autobrr/compare/v1.39.1...v1.40.0)

## Docker images

- `docker pull ghcr.io/autobrr/autobrr:v1.40.0`

## What to do next?

- Read the [documentation](https://autobrr.com)
- Join our [Discord server](https://discord.gg/WQ2eUycxyT)
