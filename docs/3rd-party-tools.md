---
sidebar_label: 3rd party tools
sidebar_position: 6
title: 3rd party tools
description: 3rd party tools that can be used with autobrr.
keywords: [cross-seed, regbrr]
---

## Cross-seed with autobrr {#cross-seed}

:::info Heads up

This is meant for advanced users. If you're not familiar with cross-seed already, we suggest you read their [documentation](https://cross-seed.org) before you continue.

Don't expect any support for setting this up. If you need help setting up cross-seed, you need to reach out to them directly.

:::

With this setup you can utilize autobrr with [cross-seed](https://github.com/cross-seed/cross-seed) to automatically cross-seed newly announced torrents from indexer Y that matches existing torrents in your torrent client from indexer X.

### Install cross-seed and its dependencies {#cross-seed-install}

You can install cross-seed in several ways. Docker is recommended, but installing via npm or yarn (requires node 16 or greater) is also fine.

In this guide we will install it with npm. This method requires node 16 or greater.
[https://github.com/nodesource/distributions/blob/master/README.md#using-debian-as-root-3](https://github.com/nodesource/distributions/blob/master/README.md#using-debian-as-root-3)

```bash
# Elevate to root and install Node.js LTS (v18.x)
sudo su -
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - &&\
apt-get install -y nodejs

# Install cross-seed
npm install -g cross-seed
```

### Generate config and make sure the port isn't exposed to the internet {#cross-seed-config}

```bash
# Generate a cross-seed config file
cross-seed gen-config

# Open the file
nano /home/$USER/.cross-seed/config.js

# Make sure the following parameters are set within the config

# You need to add at least one torznab URL from Prowlarr to the config for it to be valid
# They will not be used by autobrr

# outputDir needs to exist, but will not be used

torznab: [
    "http://127.0.0.1:9696/1/api?apikey=APIKEY&tracker=Tracker1",
    "http://127.0.0.1:9696/2/api?apikey=APIKEY&tracker=Tracker2"
],
torrentDir: "/home/$USER/.local/share/qBittorrent/BT_backup",
outputDir: "/home/$USER/torrentfiles",
action: "inject",
qbittorrentUrl: "http://user:pass@localhost:port",
apiAuth: true,
```

:::info Make sure the port is not exposed to the internet

Even with API auth enabled, cross-seed still recommends that you do not expose its port to untrusted networks (such as the Internet).
You can use iptables or UFW to solve this.  
The cross-seed daemon uses port 2468 by default.
If you want to expose cross-seed to another server on the internet substitute `127.0.0.1` with the IP of the corresponding server.

```text
sudo apt-get install iptables

iptables -A INPUT -p tcp --dport 2468 -s 127.0.0.1 -j ACCEPT
iptables -A INPUT -p tcp --dport 2468 -j DROP
```

:::

### Start the cross-seed daemon {#cross-seed-daemon}

To make autobrr communicate with cross-seed, you need to run cross-seed in [daemon mode](https://www.cross-seed.org/docs/basics/daemon).
In this guide we will set up a [systemd service](https://www.cross-seed.org/docs/basics/daemon#systemd-linux). You can also set it up with [screen](https://www.cross-seed.org/docs/basics/daemon#screen) or [docker](https://www.cross-seed.org/docs/basics/daemon#docker).

#### Systemd {#cross-seed-systemd}

```shell
touch /etc/systemd/system/cross-seed.service
```

You'll want to customize the following variables:

- `{user}`: your user, or another user if you want to create a separate user
  for `cross-seed`
- `{group}`: your group, or another group if you want to create a separate
  group for `cross-seed`
- `/path/to/node`: run the command `which node` in your terminal, then paste
  the output here.

```systemd title="/etc/systemd/system/cross-seed.service"
[Unit]
Description=cross-seed daemon
[Service]
User={user}
Group={group}
Restart=always
Type=simple
ExecStart=/path/to/node cross-seed daemon
[Install]
WantedBy=multi-user.target
```

```shell
sudo systemctl daemon-reload # tell systemd to discover the unit file you just created
sudo systemctl enable cross-seed # enable it to run on restart
sudo systemctl start cross-seed # start the service
sudo journalctl -u cross-seed # view the logs
```

### Create the cross-seed filter in autobrr {#cross-seed-filter}

The way this works is you create a filter with a higher priority set than any other filter to make sure every cross-seed match is forwarded to the cross-seed daemon instead of being run through other filters.

1. Get your API key with the following command:  
  
    ```
    cross-seed api-key
    ```
    Keep this key at hand since we will need it at step 5 later on.  
    In the rest of this tutorial, we will refer to this as `YOUR_API_KEY`.


2. Create a filter and name it eg. `cross-seed`.
3. Select all the indexers you want to use, preferably all of them.
4. Set a really high `priority` to make sure it's always higher than your other filters.
5. Go to the `External` tab, and add a new External filter.

   - Type: `Webhook`
   - Host: `http://localhost:2468/api/announce`
   - Headers: `x-api-key=YOUR_API_KEY`
   - HTTP Method: `POST`
   - Expected http status: `200`  
   - Data (JSON):

   ```json
   {
     "name": "{{ .TorrentName }}",
     "guid": "{{ .TorrentUrl }}",
     "link": "{{ .TorrentUrl }}",
     "tracker": "{{ .Indexer | js}}"
   }
   ```


6. Go to the `Actions` tab and create a Test action. This is required for the webhook to work.
7. Finally, make sure the filter is enabled and you're all set.

:::tip Cross-seed notifications
You can set up a Notifiarr or Apprise webhook for cross-seed notifications within the cross-seed config.
:::

## Upgraderr - Arr, deduplication, and cross-seed functionality {#upgraderr}

:::info Heads up
This is meant for any kind of user. There is no configuration, and it's nearly impossible to make a mistake so long as the guide is followed with the modest amount of care.
:::

### What is this {#what-is-upgraderr}

Upgraderr is a title parser that matches existing titles present in your qBittorrent client with the title submitted and returns a HTTP return code. The return codes indicate an action to perform next, if applicable.

### Arr functionality {#upgraderr-arr-functionality}

On any filter, you may utilize the external tab as a pre-filter. Using this with a return code of 200 permits any unique titles to be added, or if they're a quality upgrade. This also acts as a deduplicator should you wish.

Coupling this with the extensive filtering built-in to autobrr allows you to specify qualities to stop accepting upgrades at, should you wish. This allows you to replace applications such as Sonarr / Radarr.

On the external Webhook action, utilize the following payload, replacing the host(s), user and password with your configuration. The expected return code is 200.

- Host:

```
http://upgraderr:6940/api/upgrade
```

- Payload:

```json
{
  "host": "http://qbittorrent:8080",
  "user": "username",
  "password": "password",
  "name": "{{ .TorrentName | js }}"
}
```

### Cross-Seed functionality {#upgraderr-cross-seed-functionality}

At the time of this writing, Upgraderr has excellent cross-seed functionality that runs in milliseconds. Presently there's a partial matcher implemented, where if 80% of the data matches the existing torrent, the new torrent will have the conflicting files (should they exist) renamed, to not corrupt the existing torrent.

On the external Webhook action, utilize the following payload, replacing the host(s), user and password with your configuration. The expected return code is 250.

- Host:

```
http://upgraderr:6940/api/upgrade
```

- Payload:

```json
{
  "host": "http://qbittorrent:8080",
  "user": "username",
  "password": "password",
  "name": "{{ .TorrentName | js }}"
}
```

Once the pre-hook succeeds, create a Webhook action, replacing the same variables as before.

- Host:

```
http://upgraderr:6940/api/cross
```

- Payload:

```json
{
  "host": "http://qbittorrent:8080",
  "user": "username",
  "password": "password",
  "name": "{{ .TorrentName | js }}",
  "hash": "{{ .TorrentHash }}",
  "torrent": "{{ .TorrentDataRawBytes | js }}"
}
```

### Finally {#upgraderr-final-words}

This is a toolchest, other functionality can be achieved by using other return codes, and attaching other tools to actions taken by the application.

More Information: [github.com/kylesanderson/upgraderr](https://github.com/kylesanderson/upgraderr)

## Redactedhook

RedactedHook is a webhook companion service for autobrr designed to check the names of uploaders, your ratio, and record labels associated with torrents on Redacted and Orpheus.

[https://github.com/s0up4200/redactedhook](https://github.com/s0up4200/redactedhook)

:::warning
Remember that autobrr also checks the RED/OPS API if you have min/max sizes set in your filter. This will result in you hitting the API 2x. So for your own good, only set size checks in redactedhook.
:::

### Installation {#redactedhook-installation}

#### Docker {#redactedhook-installation-docker}

```bash
docker pull ghcr.io/s0up4200/redactedhook:latest
```

#### Docker Compose {#redactedhook-installation-docker-compose}

```yaml
services:
  redactedhook:
    container_name: redactedhook
    image: ghcr.io/s0up4200/redactedhook:latest
    user: 1000:1000
    environment:
      - REDACTEDHOOK__HOST=0.0.0.0 # binds to 127.0.0.1 by default
      - REDACTEDHOOK__PORT=42135 # defaults to 42135
      - TZ=UTC
    ports:
      - "42135:42135"
    volumes:
      - ./:/redactedhook
    restart: unless-stopped
```

#### Precompiled binaries {#redactedhook-instsallation-binaries}

Grab the latest version from here: [https://github.com/s0up4200/RedactedHook/releases/latest](https://github.com/s0up4200/RedactedHook/releases/latest)

### Usage {#redactedhook-usage}

To use RedactedHook, send POST requests to the following endpoint:

```shell
Endpoint: http://127.0.0.1:42135/hook
Header: X-API-Token: YOUR_API_TOKEN
Method: POST
Expected HTTP Status: 200
```

You can check ratio, uploader (whitelist and blacklist), minsize, maxsize, and record labels in a single request, or separately.

### Config {#redactedhook-usage-config}

Most of `requestData` can be set in `config.toml` to reduce the payload from autobrr.

Config can be created with: `redactedhook create-config`

```toml title="config.toml"
[authorization]
api_token = "" # generate with "redactedhook generate-apitoken"
# the api_token needs to be set as a header for the webhook to work
# eg. Header=X-API-Token asd987gsd98g7324kjh142kjh

[indexer_keys]
#red_apikey = "" # generate in user settings, needs torrent and user privileges
#ops_apikey = "" # generate in user settings, needs torrent and user privileges

[userid]
#red_user_id = 0 # from /user.php?id=xxx
#ops_user_id = 0 # from /user.php?id=xxx

[ratio]
#minratio = 0.6 # reject releases if you are below this ratio

[sizecheck]
#minsize = "100MB" # minimum size for checking, e.g., "10MB"
#maxsize = "500MB" # maximum size for checking, e.g., "1GB"

[uploaders]
#uploaders = "greatest-uploader" # comma separated list of uploaders to allow
#mode = "whitelist" # whitelist or blacklist

[record_labels]
#record_labels = "" # comma separated list of record labels to filter for

[logs]
loglevel = "trace"               # trace, debug, info
logtofile = false                # Set to true to enable logging to a file
logfilepath = "redactedhook.log" # Path to the log file
maxsize = 10                     # Max file size in MB
maxbackups = 3                   # Max number of old log files to keep
maxage = 28                      # Max age in days to keep a log file
compress = false                 # Whether to compress old log files
```

### Authorization {#redactedhook-usage-auth}

API Token can be generated like this: `redactedhook generate-apitoken`

Set it in the config, and use it as a header like:

![autobrr-external-filter-example](/img/autobrr-external-filters.png)

### Payload {#redactedhook-usage-payload}

**The minimum required data to send with the webhook from autobrr:**

```json
{
    "torrent_id": {{.TorrentID}},
    "indexer": "{{ .Indexer | js }}"
}
```

Everything else can be set in the `config.toml`, but you can set them in the webhook as well, if you want to filter by different things in different filters.

`CURL` if you want to test:

```bash
curl -X POST \
     -H "X-API-Token: 098qw0e98ass" \
     -H "Content-Type: application/json" \
     -d '{"torrent_id": 12345, "indexer": "redacted"}' \
     http://127.0.0.1:42135/hook
```
