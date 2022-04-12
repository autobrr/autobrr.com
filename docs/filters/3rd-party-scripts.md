---
sidebar_position: 3
---

# 3rd party scripts

:::caution Caution

3rd party scripts are third party scripts.
They are not officially supported nor do we guarantee that we can help you make them work. You should understand how these work if you choose to use them.

Do not contact the creator of these scripts for support, but feel free to ask in Discord for community support.

:::

## arrbrr

*Arrbrr is a way of mutilating your arrs and getting them to tell you their secrets.* Or in other words, it imports your monitored movies and shows from your arrs to assigned filters in autobrr.

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


## regbrr

This is a script that will take input for filters, then match them against a set of pre-defined strings to match against. If it finds a match in the filter name, it will update the respective filter. This was rewritten this way because some users have 4K/4K DV filters and want them to match without introducing additional variables. By using a bash array, as declared on line 3, we are able to specify a number of filters and loop through them.

The script basically pulls anticipated and popular titles from a source and feeds them into your assigned filters.

Setting up this script is as simple as

1. Create the initial filters in autobrr (here we use the examples of race-TV, race-TV4K, race-TVDV, race-Movies, race-Movies4K, race-MoviesDV, race-BluRay, race-BluRay4K, race-BluRayDV).
2. Run the script, then set up as a cronjob (every x hours/days/weeks). Anticipated releases are fully changed every 7 days.
3. Set the actions for each filter.

**There are no warranties or guarantees when running this script. It is your responsibility to ensure that all domains resolve correctly and that your database doesn't get messed up.**

The script can be found [here](https://gist.github.com/brettpetch/2f3147eaff75294003261df9dfd0208a).

:::tip note:

This script will backup the database ON EVERY RUN IT DOES, successful or not. You may need to go do some garbage collection every week in your autobrr config files.

:::