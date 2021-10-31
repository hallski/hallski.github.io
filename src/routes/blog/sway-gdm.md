---
date: '2019-11-04T00:00:00Z'
excerpt: Setting up Sway to work on Fedora 31 with GDM as desktop manager and gnome-keyring-daemon.
section: blog
tags:
  - linux
  - sway
  - wayland
  - GNOME
title: Sway on Fedora 31 with GDM
---

## Running Sway on Fedora 31 with GDM

After upgrading to Fedora 31 a crucial extension [Slinger](https://github.com/timbertson/slinger), stopped working. Luckily the [Sway](https://swaywm.org/) package had been updated to 1.1 so figured I'd try it out.

In summary it's been working really well however in order to use the GNOME Keyring Daemon as SSH Agent I needed to pass an environment variable to the Sway process. Turns out something changed in how Wayland sessions (compared to X) were started and the old `~/.profile` solution didn't work any longer.

After some Googling I found out that the gnome-shell came with a workaround for this where it runs a custom script before actually starting the shell.

Copying that setup here is what I did in order to get it to work.

Make a copy of `sway.desktop` in `/usr/share/wayland-sessions` to `sway-shell.desktop` and make sure it has the same mods.

```text
[Desktop Entry]
Name=Sway Shell
Comment=An i3-compatible Wayland compositor
Exec=/usr/bin/sway-shell
TryExec=/usr/bin/sway-shell
Type=Application
```

Copy `/usr/bin/gnome-session` to `/usr/bin/sway-shell` and replace the last like with

```bash
exec /usr/bin/sway "$@"
```

Edit `~/.profile` (or in my case `~/.zprofile`) to setup the environment.

```bash
if [ -n "$DESKTOP_SESSION" ];then
  eval $(gnome-keyring-daemon --start --components=ssh)
  export SSH_AUTH_SOCK
  export GTK_THEME="Adwaita-dark"
fi
```

After that I simply logged out, changed to use **Sway Shell** in GDM and logged back in.
