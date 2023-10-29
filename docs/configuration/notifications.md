---
sidebar_position: 6
sidebar_label: Notifications
title: Notifications
description: autobrr supports Discord, Notifiarr, Pushover, Telegram, and Gotify for notifications. This is a guide on how to set them up in autobrr.
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
- IRC Disconnected (irc disconnected unexpectedly)
- IRC Reconnected (irc reconnected after disconnect)
- New update (new app update available)

## Supported Agents

### Discord

:::warning
There is currently a bug when using the `Push Error` event.
It may leak your Download Client API/passkeys to the Discord channel. Keep that in mind if your Discord channel is accessible by others.
:::

To set up notifications for Discord, head to `Settings > Notifications`.

1. Click **Add new**.
2. Pick Discord in the list and give it a name.
3. Choose what events it should trigger on. You can enable all in the same agent or create separate agents for separate events.
4. Add your Webhook URL.
5. Click the `Test` button to try and send a test notification.
6. Save.

:::tip
Webhook URLs are created in Discord. Go to **Server Settings** in your Discord server and click **Integrations** followed by **Webhooks**. Click **New Webhook** and follow the steps to copy the webhook URL.
:::

### Notifiarr

To set up notifications for Notifiarr, head to `Settings > Notifications`.

1. Click **Add new**.
2. Pick Notifiarr in the list and give it a name.
3. Choose what events it should trigger on. You can enable all in the same agent or create separate agents for separate events.
4. Add your Notifiarr API key.
5. Click the `Test` button to try and send a test notification.
6. Save.

### Telegram

Telegram is a bit more tricky to set up.

1. Click **Add new**.
2. Pick Telegram in the list and give it a name.
3. Choose what events it should trigger on. You can enable all in the same agent or create separate agents for separate events.
4. [Create a bot](https://core.telegram.org/bots#6-botfather) with `BotFather`.
5. Start a chat with your bot, add [@get_id_bot](https://telegram.me/get_id_bot), and issue the /my_id command to retrieve your chat ID.
6. Click the `Test` button to try and send a test notification.
7. Save.

### Pushover

To set up notifications for Pushover, head to `Settings > Notifications`.

1. Click **Add new**.
2. Pick Pushover in the list and give it a name.
3. Choose what events it should trigger on. You can enable all in the same agent or create separate agents for separate events.
4. [Create an app](https://pushover.net/apps/build) with Pushover.
5. Fill in the app token and user key.
6. Click the `Test` button to try and send a test notification.
7. Save.

### Gotify

To set up notifications for Gotify, head to `Settings > Notifications`.

1. Click **Add new**.
2. Pick Gotify in the list and give it a name.
3. Add your Gotify URL
4. Add your `Application Token`
5. Click the `Test` button to try and send a test notification.
6. Save.
