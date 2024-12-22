---
id: nginx
title: Nginx
description: A collection of examples on recommended reverse-proxy configurations for Nginx.
keywords: [autobrr, installation, nginx, reverse proxy, reverse-proxy]
sidebar_label: Nginx
pagination_prev: introduction
pagination_next: configuration/indexers
---

#### Subfolder {#nginx#subfolder}

```nginx
location /autobrr/ {
    proxy_pass              http://127.0.0.1:7474;
    proxy_http_version      1.1;
    proxy_set_header        X-Forwarded-Host        $http_host;

    #auth_basic "What's the password?";
    #auth_basic_user_file /etc/htpasswd;

    #rewrite ^/autobrr/(.*) /$1 break; # required for versions < v1.55.0, or when baseUrlModeLegacy = true in v1.55.0+
}
```

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

#### Subdomain {#nginx#subdomain}

```nginx
server {
    listen 80;
    server_name autobrr.domain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name autobrr.domain.com;

    include snippets/ssl-params.conf;

    ssl_certificate /etc/nginx/ssl/autobrr.domain.com/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/autobrr.domain.com/key.pem;

    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $http_connection;

    #auth_basic "What's the password?";
    #auth_basic_user_file /etc/htpasswd;

    location / {
        proxy_pass http://127.0.0.1:7474;
    }
}
```
