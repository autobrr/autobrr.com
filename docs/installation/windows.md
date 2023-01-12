---
sidebar_label: Windows
title: Install autobrr on Windows
description: A guide on how to setup autobrr on Windows
keywords: [autobrr, installation, setup, seedbox, windows]
pagination_prev: introduction
pagination_next: configuration/indexers
---

# Windows

import useBaseUrl from '@docusaurus/useBaseUrl';

In this setup we will create an autobrr user and a Windows service that operates in the background. This way we won't need to have a command prompt window open 24/7.

## Download package

Download the latest Windows release and unpack. Place everything in `C:\autobrr` or some other directory.

Latest release can always be found at:

```bash
https://github.com/autobrr/autobrr/releases/latest
```

### Manually configure autobrr (optional) {#manually-configure-autobrr}

You can either let autobrr create the config itself at startup, or create one manually. For more information, please visit [configuring autobrr](/configuration/autobrr) which covers creating a user manually, configuring the default port, setting the desired log level, etc.

## Create Windows task

Press your Windows key and search for **Task Scheduler** and lets **Create basic task**.

<img src={useBaseUrl('/img/a.%20create%20basic%20task.png')} />

Add a name, this will show up in the Task Scheduler. Feel free to add the autobrr description if you'd like.

> autobrr monitors IRC announce channels to get releases as soon as they are available with good filtering.

<img src={useBaseUrl('/img/b.%20name%20task.png')} />

Next you'll set a **Trigger** which we want to start as soon as we **login to the computer**.

<img src={useBaseUrl('/img/c.%20trigger.png')} />

Our Action will be to **Start a Program** and we'll set our path to the autobrr.exe. Just click **Browse** and navigate to where you put your **autobrr.exe**

<img src={useBaseUrl('/img/d.%20action.png')} />

<img src={useBaseUrl('/img/task_action.png')} />

Our final step is to **Run whether user is logged on or not** After you set this it'll prompt you for the Windows Administrator password. Enter it and you should be ready to run.

<img src={useBaseUrl('/img/f.%20properties.png')} />

And we're done, a Windows Service has been created. Now right click on autobrr in the list and click **Run.**

<img src={useBaseUrl('/img/g.%20service%20created.png')} />

:::tip

If you ever need to restart the service, within Task Scheduler you can click on End and Run on the right side bar.

:::

## Done

Now it's up and running, and you should be able to visit it at your `domain.ltd:7474` and login. Check out the next pages for further setup.
