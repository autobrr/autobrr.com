---
id: caddy
title: Caddy
description: A collection of examples on recommended reverse-proxy configurations for Caddy.
keywords: [autobrr, installation, caddy, reverse proxy, reverse-proxy]
sidebar_label: Caddy
pagination_prev: introduction
pagination_next: configuration/indexers
---
#### Subdomain (Simple) {#caddy#simple-subdomain}

```nginx title="Caddyfile"
autobrr.example.com {
    reverse_proxy :7474
}
```

#### Subfolder {#caddy#subfolder}

```nginx title="Caddyfile"
example.com/autobrr/* {
    uri strip_prefix /autobrr
    reverse_proxy :7474
}
```


:::info Heads up
Don't forget to configure the `baseUrl` option for autobrr:

```toml title="config.toml"
# Base url
# Set custom baseUrl eg /autobrr/ to serve in subdirectory.
# Not needed for subdomain, or by accessing with the :port directly.
#
# Optional
#
baseUrl = "/autobrr/"
```
:::


#### Subdomain (Advanced) {#caddy#advanced-subdomain}

```nginx title="Caddyfile"
# Defaults
{
    admin off
    email YOUREMAIL@YOURDOMAIN.COM
    key_type p256
}

(tls) {
    tls {
        protocols tls1.2 tls1.3
        ciphers TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
    }
}

(headers) {
    header {
        -Server
        Strict-Transport-Security "max-age=63072000"

        # Opt-out search engines
        X-Robots-Tag "noindex, nofollow, nosnippet, noarchive"
    }
}

(encoding) {
    encode zstd gzip
}

# Services
autobrr.yourdomain.com {
    reverse_proxy http://autobrr:7474

    import tls
    import headers
    import encoding
}
```
