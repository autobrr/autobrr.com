---
sidebar_position: 6
sidebar_label: Notifications
title: Notifications
description: autobrr supports Discord, Notifiarr, Telegram, Pushover, Gotify, ntfy, LunaSea, Shoutrrr and generic webhooks for notifications. This is a guide on how to set them up in autobrr.
keywords:
  [
    autobrr,
    setup,
    notifications,
    discord,
    telegram,
    notifiarr,
    pushover,
    gotify,
    ntfy,
    lunasea,
    shoutrrr,
    webhook,
    push,
    rejected,
    approved,
    error,
    update,
    disconnect,
    reconnect,
  ]
pagination_label: Configuration - Notifications
---

autobrr can send notifications on the following events:

- Push Rejected (rejected by arr or download client rules)
- Push Approved (approved by arr or download client)
- Push Error (error when sending to download client)
- New Release (fires for every release received from an indexer, before filtering)
- IRC Disconnected (IRC disconnected unexpectedly)
- IRC Reconnected (IRC reconnected after disconnect)
- New update (new app update available)

:::caution
The New Release event triggers for **every** announce, before any filter matching. On busy indexers this can be extremely noisy.
:::

## Supported Agents

### Discord

:::warning
There is currently a bug when using the `Push Error` event.
It may leak your Download Client API/passkeys to the Discord channel. Keep that in mind if your Discord channel is accessible by others.
:::

To set up notifications for Discord, head to `Settings > Notifications`.

1. Click **Add new**.
2. Pick Discord from the list and give it a name.
3. Choose what events it should trigger on. You can enable all in the same agent or create separate agents for separate events.
4. Add your Webhook URL.
5. Click the `Test` button to try and send a test notification.
6. Save.

:::tip
Webhook URLs are created in Discord. Go to **Server Settings** in your Discord server and click **Integrations**, followed by **Webhooks**. Click **New Webhook** and follow the steps to copy the webhook URL.
:::

### LunaSea

To set up notifications for LunaSea, head to `Settings > Notifications`.

1. Click **Add new**.
2. Pick LunaSea from the list and give it a name.
3. Select what events to trigger on.
4. Add your `Webhook URL`
   - See [https://docs.lunasea.app/lunasea/notifications/custom-notifications](https://docs.lunasea.app/lunasea/notifications/custom-notifications)
5. Click the `Test` button to try and send a test notification.
6. Save.

### Notifiarr

To set up notifications for Notifiarr, head to `Settings > Notifications`.

1. Click **Add new**.
2. Pick Notifiarr in the list and give it a name.
3. Choose what events it should trigger on. You can enable all in the same agent or create separate agents for separate events.
4. Add your Notifiarr API key.
5. Click the `Test` button to try and send a test notification.
6. Save.


### Ntfy

Documentation: [Official docs](https://docs.ntfy.sh/).

To set up notifications for ntfy, head to `Settings > Notifications`.

1. Click **Add new**.
2. Pick ntfy in the list and give it a name.
3. Choose what events it should trigger on. You can enable all in the same agent or create separate agents for separate events.
4. Add your ntfy topic URL.
5. Authenticate with either username and password or an access token. If both are filled in, username and password are used.
6. Optionally add **Tags**: comma separated ntfy tags/emoji shortcodes shown on the notification, e.g. `download,arr,white_check_mark`.
7. Optionally set a **Priority** from 1 to 5 (ntfy's default is 3).
8. Click the `Test` button to try and send a test notification.
9. Save.

### Pushover

To set up notifications for Pushover, head to `Settings > Notifications`.

1. Click **Add new**.
2. Pick Pushover from the list and give it a name.
3. Choose what events it should trigger on. You can enable all in the same agent or create separate agents for separate events.
4. [Create an app](https://pushover.net/apps/build) with Pushover.
5. Fill in the app token and user key.
6. Optionally set a **Priority** from -2 to 2 (default 0). Priority 2 (emergency) requires acknowledgement and automatically retries every 60 seconds for up to an hour.
7. Optionally pick **Event sounds**: a default sound plus per-event overrides. The available sounds are fetched from your Pushover account.
8. Click the `Test` button to try and send a test notification.
9. Save.

### Gotify

To set up notifications for Gotify, head to `Settings > Notifications`.

1. Click **Add new**.
2. Pick Gotify from the list and give it a name.
3. Choose what events it should trigger on. You can enable all in the same agent or create separate agents for separate events.
4. Add your Gotify URL. Use the base server URL without the `/message` path, e.g. `https://gotify.example.com`; autobrr appends `/message` itself.
5. Add your `Application Token`
6. Click the `Test` button to try and send a test notification.
7. Save.

### Shoutrrr

Shoutrrr is a library that supports a lot of different notification services all in one. 

Supported services:

 - Bark
 - Discord
 - Email
 - Gotify
 - Google Chat
 - IFTTT
 - Join
 - Mattermost
 - Matrix
 - Ntfy
 - OpsGenie
 - Pushbullet
 - Pushover
 - Rocketchat
 - Slack
 - Teams
 - Telegram
 - Zulip Chat
 - Generic Webhook

Documentation: [Offical docs](https://containrrr.dev/shoutrrr/services/overview/).

To set up notifications for Shoutrrr, head to `Settings > Notifications`.

1. Click **Add new**.
2. Pick Shoutrrr from the list and give it a name.
3. Add your Shoutrrr URL that contains the service and variables, eg: `slack://[botname@]token-a/token-b/token-c`
4. Click the `Test` button to try and send a test notification.
5. Save.

### Telegram

Telegram is a bit more tricky to set up.

1. Click **Add new**.
2. Pick Telegram from the list and give it a name.
3. Choose what events it should trigger on. You can enable all in the same agent or create separate agents for separate events.
4. [Create a bot](https://core.telegram.org/bots#6-botfather) with `BotFather`.
5. Start a chat with your bot, add [@get_id_bot](https://telegram.me/get_id_bot), and issue the /my_id command to retrieve your chat ID.
6. Add your Chat ID, Bot Token, and the Message Thread ID.
7. Optionally set **Telegram API Proxy**: an alternate or reverse-proxied base URL for `api.telegram.org`, only needed if your network blocks the Telegram API.
8. Optionally set **Sender**: a custom name prepended to each notification.
9. Click the `Test` button to try and send a test notification.
10. Save.

### Webhook

Send notifications as HTTP requests to any endpoint, for integrating with your own scripts and services. Not to be confused with Shoutrrr's generic webhook service above; this is a native agent with a structured JSON payload.

1. Click **Add new**.
2. Pick Webhook from the list and give it a name.
3. Choose what events it should trigger on.
4. Add your endpoint URL.
5. Optionally pick an HTTP method (defaults to `POST`) and add custom headers as comma separated `KEY=value` pairs, e.g. `Authorization=Bearer mytoken`.
6. Click the `Test` button to try and send a test notification.
7. Save.

Each request carries an `X-Autobrr-Event` header and a JSON body with the namespaced event name (`release.new`, `action.approved`, `action.rejected`, `action.error`, `irc.disconnected`, `irc.reconnected`, ...), a timestamp, the autobrr version, and event data such as the release, indexer, filter, action and result.

## Per-filter notifications

Notifications can also be configured per filter, in the **Notifications** tab of the filter. Select one of your notification agents, then choose which events should fire for this filter (Push Approved, Push Rejected, Push Error).

Per-filter settings override the agent's global event selection for releases matching that filter; there is no fallback to the global events once custom events are set. Saving the tab with no events selected mutes notifications from this filter entirely.
