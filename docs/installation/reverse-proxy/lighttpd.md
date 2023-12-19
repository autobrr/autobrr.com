---
id: lighttpd
title: lighttpd
description: A collection of examples on recommended reverse-proxy configurations for lighttpd.
keywords: [autobrr, installation, lighttpd, reverse proxy, reverse-proxy]
sidebar_label: lighttpd
pagination_prev: introduction
pagination_next: configuration/indexers
---
#### Subfolder {#lighttpd#subfolder}

```lighttpd
server.modules += ("mod_proxy")
$HTTP["url"] =^ "/autobrr/" {
    proxy.server = ( "" => (( "host" => "127.0.0.1", "port" => 7474 )))
    proxy.header = ( "upgrade" => 1, "map-urlpath" => ("/autobrr" => "") )
}
```

:::

:::info Heads up
Don't forget to set the `baseUrl` option in the `config.toml`:

```toml
# Base url
# Set custom baseUrl eg /autobrr/ to serve in subdirectory.
# Not needed for subdomain, or by accessing with the :port directly.
#
# Optional
#
baseUrl = "/autobrr/"
```
:::

#### Subdomain {#lighttpd#subdomain}

```lighttpd
server.modules += ("mod_proxy")
$HTTP["host"] == "autobrr.domain.com" {
    proxy.server = ( "" => (( "host" => "127.0.0.1", "port" => 7474 )))
    proxy.header = ( "upgrade" => 1 )
}
```

#### Links {#lighttpd#links}

[lighttpd wiki](https://wiki.lighttpd.net)

[lighttpd TLS](https://wiki.lighttpd.net/Docs_SSL)

[lighttpd mod\_proxy](https://wiki.lighttpd.net/mod_proxy)

[lighttpd mod\_auth](https://wiki.lighttpd.net/mod_auth)
