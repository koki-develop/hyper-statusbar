[![Build](https://github.com/koki-develop/hyper-statusbar/actions/workflows/build.yml/badge.svg)](https://github.com/koki-develop/hyper-statusbar/actions/workflows/build.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/102c7b915d94f1a99e20/maintainability)](https://codeclimate.com/github/koki-develop/hyper-statusbar/maintainability)
[![LICENSE](https://img.shields.io/github/license/koki-develop/hyper-statusbar?style=plastic)](./LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/koki_develop?style=social)](https://twitter.com/koki_develop)

# Hyper Statusbar

Hyper Statusbar is a plugin for Hyper that displays a status bar.

![screenshot](./README/screenshot.png)

# Installation

Hyper Statusbar can be cloned locally and used as a local plugin.  
( As I am developing it for my own use, I don't plan to release it as an npm package. )

First, clone this repository to `~/.hyper_plugins/local` and build it.

```
$ git clone git@github.com:koki-develop/hyper-statusbar.git ~/.hyper_plugins/local/hyper-statusbar
$ yarn --cwd ~/.hyper_plugins/local/hyper-statusbar install
$ yarn --cwd ~/.hyper_plugins/local/hyper-statusbar build
```

Then edit `~/.hyper.js` and add `"hyper-statusbar"` to `localPlugins`.

```js
// ~/.hyper.js
localPlugins: ["hyper-statusbar"],
```

# Configuration

You can specify which panel to display in the `config.statusbar.panels` in `~/.hyper.js`.

```js
// ~/.hyper.js
config: {
  statusbar: {
    panels: ["battery", "user", "cpu", "memory", "ip", "clock"],
  },
}
```

# LICENSE

[MIT](./LICENSE)
