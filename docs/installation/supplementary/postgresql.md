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

Using PostgreSQL is entirely optional and is geared towards more advanced users (the 0.1%). The reason you might want to use PostgreSQL is that it handles huge databases much better than SQLite, which comes bundled with the main autobrr application.

Nevertheless, if you want to use PostgreSQL with autobrr, then add this to your autobrr configuration file and restart your autobrr instance (see the next chapter if you want to convert an existing SQLite database):

```toml title="config.toml"
# Database config
#
databaseType = "postgres"
postgresHost = "localhost"
postgresPort = 5432
postgresDatabase = "autobrr"
postgresUser = "autobrr"
postgresPass = "s0meth!ng-l0ng-4nd-s3cure"
postgresSSLMode = "disable"
postgresExtraParams = ""
```

:::warning Warning
It's up to you to make sure your PostgreSQL instance is secured and not exposed to the internet.
:::

## Convert from SQLite to PostgreSQL {#convert}

`autobrrctl` has built-in support for converting your SQLite database to PostgreSQL.
To do so, shut down autobrr and issue the following command:

```bash
autobrrctl db:convert --sqlite-db /path/to/autobrr.db --postgres-url postgres://username:password@127.0.0.1:5432/autobrr
```

Your SQLite database will not be removed in this process, so it is safe to roll back if you like.

Remember to update the autobrr configuration file before starting autobrr again.
