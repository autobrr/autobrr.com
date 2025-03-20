---
title: Skip Duplicates
description: Skip duplicates feature
keywords: [autobrr, filters, duplicates]
sidebar_label: Skip Duplicates
pagination_label: Filters - Skip Duplicates
---

The Skip Duplicates feature is intended to prevent duplicate downloads.  But what exactly is a duplicate and what are "skip duplicate profiles"?

## Overview

A filter will reject a release as a duplicate if
* you have selected a profile in the `Skip Duplicates Profile` selector on the General tab
* the release in question matches a prior release approved by any filter (see [Determining a Match](#determining-a-match))
* the prior approval is "finished", meaning all actions have completed successfully (see [Limitations and Recommendations](#limitations-and-recommendations))

## Determining a Match

Release names are parsed into fields based solely on the release name.
This is complicated, so it is delegated to the [rls package](https://github.com/moistari/rls).
These fields are then compared against the fields defined in the `skip duplicates profile`
(which on the Settings >> Releases page is called `Release Duplicate Profiles`).

For example, the `TV` profile by default contains `Title`, `Year`, `Month`, `Day`, `Season`, `Episode`.
Therefore, the `TV` profile will consider these to be duplicates:
* `Perseverance S02E09 1080p HEVC x265-MuyBueno`
* `Perseverance S02E09 720p x265-Tipico`

because all fields match.  Note that in this example, Year, Month, and Day are all parsed as 0,
so they match.  If the release name contains a year, it will not match:
* `Perseverance 2022 S02E09 720p x265-NoBueno`

If you want to disregard the Year, you could either
# Add a new profile, e.g. "Episodic TV" and do not include Year, Month, and Day, or
# Edit the `TV` profile to remove Year, Month, and Day

## Limitations and Recommendations

The major limitation is that a filter action needs to have completed successfully (FILTER_APPROVED)
*before* the duplicate is announced.  During the time a filter is being processed, it is marked FILTER_PENDING.
Therefore, you want to ensure your filter actions are fast.

Recommendations:
* Disable qBittorrent reannounce.  In the `qBittorrent` action, under `Announce`, tick `Disable reannounce`.  This logic keeps reannouncing the torrent until the tracker is OK or until the retries are exhausted (2m55s by default).  This opens a large window for duplicate announcements to arrive.
* Use a separate reannounce script.  In qBittorrent under `Settings` >> `Downloads` >> `Run external program`, set `Run external program on torrent added` to a script that does the same thing.  We recommend [qbt](https://github.com/ludviglundgren/qbittorrent-cli).  Usage:
  ```
  qbt torrent reannounce "--hash=%I"
  ```

Note: If you run qBittorrent inside a container, then you must install `qbt` inside that container.
