---
title: Authentication
sidebar_position: 1
description: Learn about the different authentication methods supported by autobrr
---

## Built-in Authentication {/* #built-in-authentication */}

The built-in authentication is enabled by default and uses a username/password combination. When you first access autobrr, you'll be prompted to create an account.

autobrr supports a single user account. If you need more identities, use an OIDC provider; all logins share the same autobrr instance and data.

## Sessions {/* #sessions */}

Sessions last 30 days and are automatically extended while in use (renewal happens when a session is within 7 days of expiring). The **Remember me** checkbox on the login page, checked by default, controls whether the session cookie persists across browser restarts.

Sessions are stored in the database, so they survive autobrr restarts. Logging out destroys the session server-side.

## OpenID Connect (OIDC) {/* #openid-connect-oidc */}

autobrr supports OIDC authentication for integration with external identity providers like [Authentik](https://goauthentik.io/), [Authelia](https://www.authelia.com/), [Pocket-ID](https://github.com/stonith404/pocket-id), and more.

### Configuration {/* #configuration */}

#### 1. Configure your identity provider {/* #configure-your-identity-provider */}

1. Set up a new application/client in your identity provider
2. Set the redirect URI to: `https://your-autobrr-instance/api/auth/oidc/callback`
3. Note down the client ID and client secret

:::tip[Authentik-specific configuration]

When using Authentik, configure the following:

- Use RS256 signing algorithm
- Under Protocol Settings, select an RSA "Signing Key" (e.g., the Authentik self-signed certificate)

For more details on Authentik setup, see:

- [Authentik RS256 Configuration](https://github.com/goauthentik/authentik/issues/9250)
- [Authentik Certificate Documentation](https://docs.goauthentik.io/docs/sys-mgmt/certificates#default-certificate)
- [autobrr OIDC Setup Example](https://github.com/autobrr/autobrr/pull/1853#issuecomment-2543410055)

:::

#### 2. Enable OIDC in autobrr {/* #enable-oidc-in-autobrr */}

Choose one of these configuration methods:

```toml title="config.toml"
oidcEnabled = true
oidcIssuer = "https://your-identity-provider"
oidcClientId = "your-client-id"
oidcClientSecret = "your-client-secret"
oidcRedirectUrl = "https://your-autobrr-instance/api/auth/oidc/callback"
oidcDisableBuiltInLogin = false
```

Or using environment variables:

```env
AUTOBRR__OIDC_ENABLED=true
AUTOBRR__OIDC_ISSUER=https://your-identity-provider
AUTOBRR__OIDC_CLIENT_ID=your-client-id
AUTOBRR__OIDC_CLIENT_SECRET=your-client-secret
AUTOBRR__OIDC_REDIRECT_URL=https://your-autobrr-instance/api/auth/oidc/callback
AUTOBRR__OIDC_DISABLE_BUILT_IN_LOGIN=false
```

:::info[Authentication Methods]
When OIDC is enabled:

- If you have an existing user in the database, both OIDC and built-in authentication will be available
- If no user exists in the database, only OIDC authentication will be available
  :::

:::info[PKCE]
autobrr automatically uses the Authorization Code Flow with PKCE (S256) when your identity provider advertises support for it in its discovery document. Providers that require PKCE (like Pocket-ID) work out of the box with no extra configuration.
:::

## Troubleshooting {/* #troubleshooting */}

During testing, we used [Authelia](https://www.authelia.com/), [Authentik](https://goauthentik.io/), and [Pocket-ID](https://github.com/stonith404/pocket-id) with success. Each provider has been verified to work with autobrr's OIDC implementation.

autobrr starts even when the identity provider is unreachable: OIDC discovery retries in the background (every 5 seconds for roughly 4 minutes), which covers docker-compose setups where the identity provider comes up after autobrr. Issuer URLs are also tried both with and without a trailing slash, so a slash mismatch between your config and the provider's discovery document is handled automatically.

If you encounter issues, please open a [GitHub issue](https://github.com/autobrr/autobrr/issues/new?template=bug_report.md) or reach out to us on [Discord](https://discord.autobrr.com/).

## Security Best Practices {/* #security-best-practices */}

1. Always run autobrr behind a reverse proxy with TLS enabled
2. Make sure the proxy forwards `X-Forwarded-Proto: https`. autobrr cannot serve TLS itself and only marks the session cookie as Secure when this header is present; OIDC callback redirects also rely on it.
3. Use strong passwords for built-in authentication
4. Enable MFA in your identity provider when using OIDC
5. Regularly update both autobrr and your identity provider

For reverse proxy setup instructions, see:

- [Caddy](../installation/reverse-proxy/caddy)
- [Lighttpd](../installation/reverse-proxy/lighttpd)
- [Nginx](../installation/reverse-proxy/nginx)
- [SWAG](../installation/reverse-proxy/swag)
- [Traefik](../installation/reverse-proxy/traefik)
- [Tailscale Serve](../installation/reverse-proxy/tailscale-serve)
