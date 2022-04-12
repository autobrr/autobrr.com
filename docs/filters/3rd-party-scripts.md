---
sidebar_position: 3
---

# 3rd party scripts

:::caution Caution

3rd party scripts are third party scripts.
They are not officially supported nor do we guarantee that we can help you make them work.

:::

## arrbrr

*Arrbrr is a way of mutilating your arrs and getting them to tell you their secrets.*

Essentially, you setup the variables and run it on a crontab. It will then check to see if each item is monitored in the arrs, and if it is, it will be added to the filter for autobrr in a somewhat compliant way.

Please read the code being run, do not put this directly into a terminal without understanding what it does.

* `arrbrr_swizzin.sh` is meant for installs with a baseurl.
* `arrbrr_docker.sh` is meant for installs with no baseurl.

Installation info
1. Create filter in autobrr with a name that arrbrr can match
2. Set the database path for arrbrr to find the autobrr database.
3. Input the names of the filters at the appropriate variables
4. Collect your api info for your arr
5. Input the info for the arr into the provided blocks
6. Setup a cronjob

`arrbrr_swizzin.sh` and `arrbrr_docker.sh` can be found [here](https://gist.github.com/brettpetch/9475c9117e0d58791c02587529786ad9).
For Synology and others not having iconv please use [this](https://gist.github.com/quorn23/222a62c7c6141eabde18f8a1f626b0de) instead.


:::tip note:

This script will backup the database ON EVERY RUN IT DOES, successful or not. You may need to go do some garbage collection every week in your autobrr config files.

:::