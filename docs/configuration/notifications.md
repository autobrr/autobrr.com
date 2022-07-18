---
sidebar_position: 6
sidebar_label: Notifications
title: Notifications
pagination_label: Configuration - Notifications
---

# Notifications

autobrr can send notifications on the following events:

- Push Rejected (rejected by arr or download client rules)
- Push Approved (approved by arr or download client)
- Push Error (error when sending to download client)
- IRC Disconnected (irc disconnected unexpectedly)
- IRC Reconnected (irc reconnected after disconnect)
- New update (new app update available)

## Discord

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

## Notifiarr

To set up notifications for Notifiarr, head to `Settings > Notifications`.

You can send to Notifiarr by using the Discord integration. This will change to it's own sender in the future.

Follow the steps of Discord.

## Telegram

Telegram is a bit more tricky to setup.

1. Click **Add new**.
2. Pick Telegram in the list and give it a name.
3. Choose what events it should trigger on. You can enable all in the same agent or create separate agents for separate events.
4. [Create a bot](https://core.telegram.org/bots#6-botfather) with `BotFather`.
5. Start a chat with your bot, add [@get_id_bot](https://telegram.me/get_id_bot), and issue the /my_id command.
6. Click the `Test` button to try and send a test notification.
7. Save.
