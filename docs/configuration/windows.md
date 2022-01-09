In this setup we'll create a Windows service that operates in the background so we don't have the pesky command prompt window open 24/7.

# Creating a task

Press your windows key and search for `Task Scheduler` and lets `Create basic task.`

<img max-width=600px src="https://github.com/gl0ryus/autobrr.com/blob/main/static/img/a.%20create%20basic%20task.png?raw=true" >

Add a name, this will show up in the Task Scheduler. Feel free to add the autorbrr description if you'd like.

> Autobrr monitors IRC announce channels to get releases as soon as they are available with good filtering.

<img max-width=600px src="https://github.com/gl0ryus/autobrr.com/blob/main/static/img/b.%20name%20task.png?raw=true">

Next you'll set a `Trigger` which we want to start as soon as we login to the computer.