---
title: Postgres
sidebar_label: Postgres (optional)
id: postgres
pagination_label: Postgres (optional)
pagination_prev: getting-started/getting-started
pagination_next: configuration/configuration
---

import { SiPostgresql } from 'react-icons/si';

# Postgres <SiPostgresql />

Using postgres is optional. If you want to use postgres with autobrr, add this to your config.toml and restart:

```toml title="config.toml"
# Database config
#
databaseType = "postgres"
postgresHost = "localhost"
postgresPort = 5432
postgresDatabase = "autobrr"
postgresUser = "autobrr"
postgresPass = "s0meth!ng-l0ng-4nd-s3cure"
```

:::note
It is recommended to create a new user and database for autobrr.
You might be able to migrate your sqlite database to postgres, but I haven't looked into it.
:::

:::warning Warning
It's up to you to make sure your postgres instance is secured and not exposed to the internet.
:::
