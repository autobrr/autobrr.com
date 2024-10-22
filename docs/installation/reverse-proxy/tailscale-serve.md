---
id: tailscale-serve
title: Tailscale Serve
description: Using Tailscale Serve as a reverse proxy for autobrr
keywords: [autobrr, installation, tailscale, reverse proxy, reverse-proxy]
sidebar_label: Tailscale Serve
pagination_prev: introduction
pagination_next: configuration/indexers
---

import ReactPlayer from 'react-player/youtube'

## What is Tailscale?

[Tailscale](https://tailscale.com) is a VPN service that makes the devices and applications you own accessible anywhere in the world, securely and effortlessly. It enables encrypted point-to-point connections using the open source [WireGuard](https://www.wireguard.com/) protocol, which means only devices on your private network can communicate with each other.

## Using Tailscale Serve as a Reverse Proxy for autobrr

Tailscale Serve[^1] can be used as a reverse proxy for autobrr, providing a secure and easy way to access your autobrr instance from anywhere in your Tailnet[^2]. This setup also includes automatic HTTPS certification for your subdomain.

### Prerequisites

Before setting up Tailscale Serve for autobrr, ensure that:

1. You have a Tailscale account
2. HTTPS is enabled for your Tailnet in the [Tailscale admin console](https://login.tailscale.com/admin/dns).
3. MagicDNS[^3] is enabled in your Tailnet settings. This allows you to use custom subdomains.

### Docker Compose Setup

Here's an example Docker Compose configuration that sets up autobrr as a Tailscale node in your Tailnet with its own LetsEncrypt[^4] certified subdomain:

```yaml
services:
  autobrr:
    container_name: autobrr
    image: ghcr.io/autobrr/autobrr:latest
    restart: unless-stopped
    user: 1000:1000
    environment:
      - TZ=${TZ}
    volumes:
      - ${BASE_DOCKER_DATA_PATH}/autobrr/config:/config
    network_mode: service:autobrr-ts
    depends_on:
        - autobrr-ts

  autobrr-ts:
    image: tailscale/tailscale:latest
    container_name: autobrr-ts
    hostname: autobrr
    environment:
      - TS_AUTHKEY=${TS_AUTHKEY}
      - TS_EXTRA_ARGS=${TS_EXTRA_ARGS}
      - TS_STATE_DIR=${TS_STATE_DIR}
      - TS_SERVE_CONFIG=/config/autobrr.json
      - TZ=${TZ}
    volumes:
      - tailscale-data-autobrr:/var/lib/tailscale
      - /dev/net/tun:/dev/net/tun
      - ${BASE_DOCKER_DATA_PATH}/config:/config
    cap_add:
      - net_admin
      - sys_module
    restart: unless-stopped

volumes:
  tailscale-data-autobrr:
    driver: local
```

### Setting Up

1. **Create a `config/autobrr.json` file in your project directory with the Tailscale Serve configuration for autobrr**
  ```json title="/config/autobrr.json"
{
    "TCP": {
      "443": {
        "HTTPS": true
      }
    },
    "Web": {
      "${TS_CERT_DOMAIN}:443": {
        "Handlers": {
          "/": {
            "Proxy": "http://127.0.0.1:7474"
          }
        }
      }
    },
    "AllowFunnel": {
      "${TS_CERT_DOMAIN}:443": false
    }
  }
```

2. **Generate a Tailscale auth key**
   - Go to the [Tailscale Admin Console](https://login.tailscale.com/admin/settings/keys)
   - Click on "Generate auth key"

3. **Set up the required environment variables in a `.env` file**
  ```toml title=".env"
  BASE_DOCKER_DATA_PATH=/path/to/your/docker/data
  TZ=UTC

  TS_AUTHKEY=tskey-auth-adKJA23Skjhad-ASDoiqQoas1dQWda41sohi
  TS_EXTRA_ARGS=--advertise-tags=tag:container --reset
  TS_STATE_DIR=/var/lib/tailscale
  ```

4. **Run `docker-compose up -d` to start the services**

Once running, your autobrr instance will be accessible through your Tailnet using the configured subdomain with HTTPS enabled.

:::info
You need to approve this node before it can be accessed. You can do so in your Admin Console here: [https://login.tailscale.com/admin/machines](https://login.tailscale.com/admin/machines)
:::

## Benefits

- Secure access to your autobrr instance from anywhere in your Tailnet
- Automatic HTTPS certification for your subdomain
- No need for port forwarding or complex firewall rules

## Tips

### Expose to the Wide Internet

If you want to expose your autobrr instance to be available outside your Tailnet, you need to:

1. **Set `AllowFunnel: true` in `/config/autobrr.json`:**
   ```json
   "AllowFunnel": {
     "${TS_CERT_DOMAIN}:443": true
   }
   ```

2. **Add this to your policy in your [Access Controls](https://login.tailscale.com/admin/acls/file):**
   ```json
   "nodeAttrs": [
     {"target": ["tag:container"], "attr": ["funnel"]},
   ],
   ```

:::caution
Ensure you have a strong and unique password for autobrr when doing this.
Funnel is only needed if you want access to autobrr from a device that is not connected to your Tailnet.
:::

### Troubleshooting

If you encounter issues:

1. Check the Tailscale logs: `docker logs autobrr-ts`
2. Verify that MagicDNS and HTTPS are enabled in your Tailnet settings
3. Ensure the `TS_AUTHKEY` is valid and has not expired

A great video by Alex Kretzschmar talking about Tailscale in Docker:

<ReactPlayer
  url="https://www.youtube.com/watch?v=tqvvZhGrciQ"
  playing={false}
  controls={true}
/>

## Conclusion

Using Tailscale Serve as a reverse proxy for autobrr provides a secure and convenient way to access your instance from anywhere. It simplifies the setup process and provides automatic HTTPS certification.

[^1]: Read more about Tailscale Serve in the official docs: https://tailscale.com/kb/1242/tailscale-serve
[^2]: A Tailnet is your private network created by Tailscale, encompassing all your devices and users.
[^3]: MagicDNS is a Tailscale feature that automatically gives DNS names to the devices on your network, making them easier to access.
[^4]: Let's Encrypt is a free, automated, and open Certificate Authority providing trusted certificates for HTTPS encryption.