---
id: swag
title: Swag
description: A collection of examples on recommended reverse-proxy configurations for Swag.
keywords: [autobrr, installation, swag, reverse proxy, reverse-proxy]
sidebar_label: Swag
pagination_prev: introduction
pagination_next: configuration/indexers
---
A basic `swag` config for running on subdomain.

```yaml
server {
    listen 443 ssl;
    listen [::]:443 ssl;

    server_name autobrr.*;

    include /config/nginx/ssl.conf;

    client_max_body_size 0;

    # enable for ldap auth, fill in ldap details in ldap.conf
    #include /config/nginx/ldap.conf;

    # enable for Authelia
    #include /config/nginx/authelia-server.conf;

    location / {
        # enable the next two lines for http auth
        #auth_basic "Restricted";
        #auth_basic_user_file /config/nginx/.htpasswd;

        # enable the next two lines for ldap auth
        #auth_request /auth;
        #error_page 401 =200 /ldaplogin;

        # enable for Authelia
        #include /config/nginx/authelia-location.conf;

        include /config/nginx/proxy.conf;
        include /config/nginx/resolver.conf;
        include /config/nginx/allowdeny.conf;
        set $upstream_app autobrr;
        set $upstream_port 7474;
        set $upstream_proto http;
        proxy_pass $upstream_proto://$upstream_app:$upstream_port;
    }
}
```

A basic `swag` config for running in a subfolder (don't forget to set the baseurl).
```yaml
location ^~ /autobrr/ {
    # enable the next two lines for http auth
    #auth_basic "Restricted";
    #auth_basic_user_file /config/nginx/.htpasswd;

    # enable for ldap auth (requires ldap-server.conf in the server block)
    #include /config/nginx/ldap-location.conf;

    # enable for Authelia (requires authelia-server.conf in the server block)
    #include /config/nginx/authelia-location.conf;

    # enable for Authentik (requires authentik-server.conf in the server block)
    #include /config/nginx/authentik-location.conf;

    include /config/nginx/proxy.conf;
    include /config/nginx/resolver.conf;
    set $upstream_app 127.0.0.1;
    set $upstream_port 7474;
    set $upstream_proto http;
    proxy_set_header        X-Forwarded-Host        $http_host;
    proxy_pass $upstream_proto://$upstream_app:$upstream_port;
    #rewrite ^/autobrr/(.*) /$1 break; # only needed if baseUrlModeLegacy is true in config.toml
}
```
