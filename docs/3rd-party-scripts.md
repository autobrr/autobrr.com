---
sidebar_label: 3rd party scripts
sidebar_position: 6
title: 3rd party scripts
---

:::warning Caution

These scripts are not officially supported, nor do we guarantee that we can help you make them work. You should understand how these work if you choose to use them.

Please do not contact the creator of these scripts for support, but feel free to ask in our [Discord](https://discord.gg/WQ2eUycxyT) for community support.

:::

## arrbrr

*Arrbrr is a way of mutilating your \*arrs and getting them to tell you their secrets.*  
In other words, it imports your monitored movies and shows from your \*arrs to assigned filters in autobrr.

Essentially, you setup the variables and run it on a crontab. It will then check to see if each item is monitored in the \*arrs, and if it is, it will be added to the filter for autobrr in a somewhat compliant way.

Please read the code being run, do not put this directly into a terminal without understanding what it does.

### Download the script

`arrbrr_swizzin.sh` and `arrbrr_docker.sh` can be found [here <AiFillGithub />](https://gist.github.com/brettpetch/9475c9117e0d58791c02587529786ad9)  
For Synology and others not having iconv please use [this <AiFillGithub />](https://gist.github.com/quorn23/222a62c7c6141eabde18f8a1f626b0de)

:::info
`arrbrr_swizzin.sh` is meant for installs with a baseurl.  
`arrbrr_docker.sh` is meant for installs with no baseurl.
:::

### Installation

1. Create filters in autobrr with names that `arrbrr.sh` can match.
2. Set the path for the autobrr database in `arrbrr.sh`.
3. Input the names of the filters you created in step 1 at the appropriate variables in `arrbrr.sh`.
4. Collect the API info from your \*arrs.
5. Input the necessary info for your \*arrs into the provided blocks in `arrbrr.sh`.
6. Setup the actions for each filter within autobrr.
7. Run the script and setup a cronjob.

## regbrr

This is a script that will take input for filters, then match them against a set of pre-defined strings. If it finds a match in the filter name, it will update the respective filter. This was rewritten this way because some users have 4K/4K DV filters and want them to match without introducing additional variables. By using a bash array, as declared on line 3, we are able to specify a number of filters and loop through them.

The script basically pulls anticipated and popular titles from a source, and then feeds them into your assigned filters.

### Download the script

import { AiFillGithub } from 'react-icons/ai';

`regbrr.sh` can be found [here <AiFillGithub />](https://gist.github.com/brettpetch/2f3147eaff75294003261df9dfd0208a)

### Installation

1. Create the filters in autobrr. (here we use the examples of race-TV, race-TV4K, race-TVDV, race-Movies, race-Movies4K, race-MoviesDV, race-BluRay, race-BluRay4K, race-BluRayDV)
2. Run the script.
3. Setup the actions for each filter within autobrr.
4. Setup a cronjob. (Anticipated releases are fully changed every 7 days.)

**There are no warranties or guarantees when running this script. It is your responsibility to ensure that all domains resolve correctly and that your database doesn't get messed up.**
