---
slug: 1.39.0
title: v1.39.0
authors: [rogerrabbit]
---

Various minor changes:

* IRC: AB changed address
* New macros: FilterID and Tags
* Updated to Go v1.22
* Fix for creating custom TMPDIR if it does not exist

[https://github.com/autobrr/autobrr/releases/tag/v1.39.0](https://github.com/autobrr/autobrr/releases/tag/v1.39.0)
## Changelog
### New features and improvements
* feat(indexers): Locadora add internal and tags var (#1433) (costaht)
* feat(indexers): sanitize user input (#1420) (zze0s)
* feat(macros): add FilterID (#1416) (bbeck)
* feat(macros): add Tags (#1429) (zze0s)
### Bug fixes
* fix(filters): open used collapsible sections by default (#1425) (martylukyy)
* fix(filters): point to the correct docs page anchor for `skipping seasons packs` (#1424) (vBm)
* fix(indexers): AB new irc address (#1434) (martylukyy)
* fix(indexers): PTFiles freeleech parsing (#1422) (martylukyy)
* fix(releases): create custom TEMPDIR if not exists (#1428) (zze0s)
* fix(web): make tooltips clickable if touchscreen is present (#1427) (martylukyy)
* fix(web): remove rounded corners of middle usernav item (#1430) (martylukyy)
### Other work
* chore(deps): upgrade to Go v1.22 and deps (#1423) (zze0s)
* docs: update installers (#1436) (zze0s)

**Full Changelog**: https://github.com/autobrr/autobrr/compare/v1.38.1...v1.39.0

## Docker images

- `docker pull ghcr.io/autobrr/autobrr:v1.39.0`

## What to do next?

- Read the [documentation](https://autobrr.com)
- Join our [Discord server](https://discord.gg/WQ2eUycxyT)
