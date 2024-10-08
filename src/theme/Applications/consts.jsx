import {
  qBittorrentIcon,
  PorlaIcon,
  DelugeIcon,
  ruTorrentIcon,
  TransmissionIcon,
  SabnzbdIcon,
  ProwlarrIcon,
  RadarrIcon,
  SonarrIcon,
  LidarrIcon,
  ReadarrIcon,
  WhisparrIcon,
  LunaSeaIcon,
  NotifiarrIcon,
  DiscordIcon,
  PushoverIcon,
  TelegramIcon,
  GotifyIcon,
} from "./clients";

import {
  DockerIcon,
  LinuxIcon,
  WindowsIcon,
  MacOSIcon,
  SwizzinIcon,
  QuickBoxIcon,
} from "./platforms";

export const clients = [
  {
    title: "qBittorrent",
    url: "configuration/download-clients/dedicated#qbittorrent",
    icon: qBittorrentIcon,
  },
  {
    title: "Porla",
    url: "configuration/download-clients/dedicated#porla",
    icon: PorlaIcon,
  },
  {
    title: "Deluge",
    url: "configuration/download-clients/dedicated#deluge",
    icon: DelugeIcon,
  },
  {
    title: "ruTorrent",
    url: "configuration/download-clients/dedicated#rutorrent",
    icon: ruTorrentIcon,
  },
  {
    title: "Transmission",
    url: "configuration/download-clients/dedicated#transmission",
    icon: TransmissionIcon,
  },
  {
    title: "SABnzbd",
    url: "configuration/download-clients/dedicated#sabnzbd",
    icon: SabnzbdIcon,
  },
  {
    title: "Prowlarr",
    url: "configuration/feeds",
    icon: ProwlarrIcon,
  },
  {
    title: "Radarr",
    url: "configuration/download-clients/dedicated#radarr",
    icon: RadarrIcon,
  },
  {
    title: "Sonarr",
    url: "configuration/download-clients/dedicated#sonarr",
    icon: SonarrIcon,
  },
  {
    title: "Lidarr",
    url: "configuration/download-clients/dedicated#lidarr",
    icon: LidarrIcon,
  },
  {
    title: "Readarr",
    url: "configuration/download-clients/dedicated#readarr",
    icon: ReadarrIcon,
  },
  {
    title: "Whisparr",
    url: "configuration/download-clients/dedicated#whisparr",
    icon: WhisparrIcon,
  },
];

export const notificationAgents = [
  {
    title: "LunaSea",
    url: "configuration/notifications#lunasea",
    icon: LunaSeaIcon,
  },
  {
    title: "Notifiarr",
    url: "configuration/notifications#notifiarr",
    icon: NotifiarrIcon,
  },
  {
    title: "Discord",
    url: "configuration/notifications#discord",
    icon: DiscordIcon,
  },
  {
    title: "Pushover",
    url: "configuration/notifications#pushover",
    icon: PushoverIcon,
  },
  {
    title: "Telegram",
    url: "configuration/notifications#telegram",
    icon: TelegramIcon,
  },
  {
    title: "Gotify",
    url: "configuration/notifications#gotify",
    icon: GotifyIcon,
  },
];

export const platforms = [
  {
    title: "Swizzin",
    url: "/installation/linux#seedbox-solutions",
    icon: SwizzinIcon,
  },
  {
    title: "Quickbox",
    url: "/installation/linux#seedbox-solutions",
    icon: QuickBoxIcon,
  },
  {
    title: "Docker",
    url: "installation/docker",
    icon: DockerIcon,
  },
  {
    title: "Linux",
    url: "installation/linux",
    icon: LinuxIcon,
  },
  {
    title: "Windows",
    url: "installation/windows",
    icon: WindowsIcon,
  },
  {
    title: "MacOS",
    url: "installation/macos",
    icon: MacOSIcon,
  },
];
