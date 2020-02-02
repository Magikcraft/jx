# JX - The jQuery of Minecraft

![Test](https://github.com/Magikcraft/jx/workflows/Test/badge.svg?branch=magikcraft-integration)

[![npm version](https://badge.fury.io/js/%40scriptcraft%2Fjx.svg)](https://badge.fury.io/js/%40scriptcraft%2Fjx)

JX is a library of super-powers for developing ScriptCraft Minecraft plugins in JavaScript.

## Use with Vanilla ScriptCraft

### Pre-Requisites
1. install the [scriptcraft](https://github.com/walterhiggins/ScriptCraft) plugin on your server
2. run the server once with the plugin installed to initialize it

### Installation (Manual)
1. download the repository as an archive
   - we will refer to this downloaded archive as `<archive>` and your server's root directory as `<server>`
2. copy `<archive>/jx-master/` to `<server>/jx/`
3. move `<server>/jx/!.js` to `<server>/scriptcraft/plugins/!.js`
4. execute `js refresh()` from your server's console
5. success

## Use with MagikCraft

[MagikCraft](https://github.com/Magikcraft/MagickCraft) is a set of patches on ScriptCraft that adds support for NPM modules and unit testing, and also is friendly to TypeScript development.

### Pre-Requisites

1. Install the [MagikCraft](https://github.com/Magikcraft/MagickCraft) plugin on your server, or run a Dockerised Magikcraft server.

### Using JX with MagikCraft

JX is a library that you can use to accelerate your own plugin development. It doesn't do anything by itself. So you would include it in a MagikCraft plugin.

Create your MagikCraft plugin using the Yeoman generator:

```
npm install -g yo
npm install -g generator-sma-plugin

yo sma-plugin
```


