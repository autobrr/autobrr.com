---
title: Windows
sidebar_label: Windows
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In this setup we'll create Autobrr user and a Windows service that operates in the background. This way we don't need to have a command prompt window open 24/7.

Download the latest Windows release and unpack. You need a config so check the setup on [installation](./installation#create-config) what all the option does. Place everything in `C:\.autobrr` or some other directory.

## Create autobrr user

If you skip this step you won't be able to login to Autobrr, so lets quickly get a user made.

Inside the autobrr folder, **hold shift and right click** on an empty area. You can then see **Open PowerShell window here**. Yours might say Command Prompt.

Enter

```cmd
.\autobrrctl.exe --config . create-user USER
```

Make sure you replace with USER with the username you want. Enter a password and that's it. Lets create a new service.

<img src={useBaseUrl('/img/h.%20create%20user1.png')} />

---

## Create windows task

Press your windows key and search for **Task Scheduler** and lets **Create basic task**.

<img src={useBaseUrl('/img/a.%20create%20basic%20task.png')} />

Add a name, this will show up in the Task Scheduler. Feel free to add the Autorbrr description if you'd like.

> Autobrr monitors IRC announce channels to get releases as soon as they are available with good filtering.

<img src={useBaseUrl('/img/b.%20name%20task.png')} />

Next you'll set a **Trigger** which we want to start as soon as we **login to the computer**.

<img src={useBaseUrl('/img/c.%20trigger.png')} />

Our Action will be to **Start a Program** and we'll set our path to the autobrr.exe. Just click **Browse** and navigate to where you put your **autobrr.exe**

<img src={useBaseUrl('/img/d.%20action.png')} />

<img src={useBaseUrl('/img/e.%20path%20to%20autobrr.png')} />

Our final step is to **Run whether user is logged on or not** After you set this it'll prompt you for the windows administrator password. Enter it and you should be ready to run.

<img src={useBaseUrl('/img/f.%20properties.png')} />

And we're done, a windows service has been created. Now right click on Autobrr in the list and click **Run.**

<img src={useBaseUrl('/img/g.%20service%20created.png')} />

:::tip

If you need to ever restart the service, within Task Scheduler you can click on End and Run on the right side bar.

:::
