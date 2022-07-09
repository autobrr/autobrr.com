---
id: postgresql
title: PostgreSQL
sidebar_label: PostgreSQL (Optional)
pagination_prev: introduction
pagination_next: configuration/indexers
---

# PostgreSQL (Optional)

Using PostgreSQL is optional. If you want to use PostgreSQL with autobrr, then add this to your config.toml and restart:

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

:::info
It is recommended to create a new user and database for autobrr.
You might be able to migrate your SQLite database to PostgreSQL, but the authors haven't taken a deep look into it.

SQLite still remains the primary option which is actively being tested against.
:::

:::warning Warning
It's up to you to make sure your postgres instance is secured and not exposed to the internet.
:::
