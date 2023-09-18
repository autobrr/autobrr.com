---
id: postgresql
title: Setup autobrr with PostgreSQL
description: A guide on how to use PostgreSQL with autobrr.
keywords: [autobrr, installation, postgres, postgre, postgressql]
sidebar_label: PostgreSQL (optional)
pagination_prev: introduction
pagination_next: configuration/indexers
---

# PostgreSQL

Using PostgreSQL is entirely optional and is geared towards more advanced users (the 0.1%). The reason you might want to use PostgreSQL is because it handles huge databases much better than SQLite, which comes bundled with the main autobrr application.

Nevertheless, if you want to use PostgreSQL with autobrr, then add this to your autobrr configuration file and restart your autobrr instance:

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
