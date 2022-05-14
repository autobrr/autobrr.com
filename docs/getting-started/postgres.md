---
sidebar_position: 4
---

# Postgres support

To use autobrr with postgres, add this to your config.toml and restart:

```toml
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
