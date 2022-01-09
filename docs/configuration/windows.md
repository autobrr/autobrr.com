In this setup we'll create a Windows service that operates in the background so we don't have the pesky command prompt window open 24/7.



# Creating a task

Press your windows key and search for `Task Scheduler` and lets `Create basic task.`

<img width=80% src="https://github.com/gl0ryus/autobrr.com/blob/main/static/img/a.%20create%20basic%20task.png?raw=true" >

Add a name, this will show up in the Task Scheduler. Feel free to add the autorbrr description if you'd like.

> Autobrr monitors IRC announce channels to get releases as soon as they are available with good filtering.

<img width=80% src="https://github.com/gl0ryus/autobrr.com/blob/main/static/img/b.%20name%20task.png?raw=true">

Next you'll set a `Trigger` which we want to start as soon as we `login to the computer`.

<img width=80% src="https://github.com/gl0ryus/autobrr.com/blob/main/static/img/c.%20trigger.png?raw=true">

Our Action will be to `Start a Program` and we'll set our path to the autobrr.exe. Just click `Browse` and navigate to where you put your `autobrr.exe`

<img width=80% src="https://github.com/gl0ryus/autobrr.com/blob/main/static/img/d.%20action.png?raw=true">

<img width=80% src="https://github.com/gl0ryus/autobrr.com/blob/main/static/img/e.%20path%20to%20autobrr.png?raw=true">

Our final step is to `Run whether user is logged on or not`. After you set this it'll prompt you for the windows administrator password. Enter it and you should be ready to run.

<img width=80% src="https://github.com/gl0ryus/autobrr.com/blob/main/static/img/f.%20properties.png?raw=true">

And we're done, a windows service has been created. Now right click on Autobrr in the list and click `Run.`

<img width=80% src="https://github.com/gl0ryus/autobrr.com/blob/main/static/img/g.%20service%20created.png?raw=true">