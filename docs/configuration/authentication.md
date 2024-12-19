---
title: Authentication
sidebar_position: 1
description: Learn about the different authentication methods supported by autobrr
---

## Built-in Authentication

The built-in authentication is enabled by default and uses a username/password combination. When you first access autobrr, you'll be prompted to create an account.

## OpenID Connect (OIDC)

autobrr supports OIDC authentication for integration with external identity providers like [Authentik](https://goauthentik.io/), [Authelia](https://www.authelia.com/), [Pocket-ID](https://github.com/stonith404/pocket-id), and more.

### Configuration

#### 1. Configure your identity provider {#configure-your-identity-provider}

1. Set up a new application/client in your identity provider
2. Set the redirect URI to: `https://your-autobrr-instance/api/auth/oidc/callback`
3. Note down the client ID and client secret

#### 2. Enable OIDC in autobrr {#enable-oidc-in-autobrr}

Choose one of these configuration methods:

```toml title="config.toml"
oidc_enabled = true
oidc_issuer = "https://your-identity-provider"
oidc_client_id = "your-client-id"
oidc_client_secret = "your-client-secret"
oidc_redirect_url = "https://your-autobrr-instance/api/auth/oidc/callback"
```

Or using environment variables:

```env
AUTOBRR__OIDC_ENABLED=true
AUTOBRR__OIDC_ISSUER=https://your-identity-provider
AUTOBRR__OIDC_CLIENT_ID=your-client-id
AUTOBRR__OIDC_CLIENT_SECRET=your-client-secret
AUTOBRR__OIDC_REDIRECT_URL=https://your-autobrr-instance/api/auth/oidc/callback
```

:::info Authentication Methods
When OIDC is enabled:

- If you have an existing user in the database, both OIDC and built-in authentication will be available
- If no user exists in the database, only OIDC authentication will be available
  :::

## Troubleshooting

During testing, we used [Authelia](https://www.authelia.com/), [Authentik](https://goauthentik.io/), and [Pocket-ID](https://github.com/stonith404/pocket-id) with success. Each provider has been verified to work with autobrr's OIDC implementation.

### Authentik

For Authentik, make sure to configure RS256 signing algorithm and use the correct certificate.
In the Provider simply select a RSA "Signing Key" under Protocol Settings. For example the Authentik self-signed certificate

For more information, see:

- [Authentik RS256 Configuration](https://github.com/goauthentik/authentik/issues/9250)
- [Authentik Certificate Documentation](https://docs.goauthentik.io/docs/sys-mgmt/certificates#default-certificate)
- [autobrr OIDC Setup Example](https://github.com/autobrr/autobrr/pull/1853#issuecomment-2543410055)

If you encounter other issues, please open a [GitHub issue](https://github.com/autobrr/autobrr/issues/new?template=bug_report.md) or reach out to us on [Discord](https://discord.gg/WQ2eUycxyT).

## Security Best Practices

1. Always run autobrr behind a reverse proxy with TLS enabled
2. Use strong passwords for built-in authentication
3. Enable MFA in your identity provider when using OIDC
4. Regularly update both autobrr and your identity provider

For reverse proxy setup instructions, see:

- [Caddy](../installation/reverse-proxy/caddy)
- [Lighttpd](../installation/reverse-proxy/lighttpd)
- [Nginx](../installation/reverse-proxy/nginx)
- [SWAG](../installation/reverse-proxy/swag)
- [Traefik](../installation/reverse-proxy/traefik)
- [Tailscale Serve](../installation/reverse-proxy/tailscale-serve)
