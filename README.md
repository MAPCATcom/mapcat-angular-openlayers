# -- Work in progress, not ready for use yet. --

# Rendering MapCat maps from a React application with Leaflet

This is a sample project showing how to render a map in a React web application. It's using [Leaflet](http://leafletjs.com/) and [react-leaflet](https://github.com/PaulLeCam/react-leaflet) for rendering the tiles served by the MapCat API.

The language of this project is TypeScript and it is built with Webpack and SCSS.

# Getting started

MapCat provides a couple of commercial services built on the OpenStreetMap database, including serving raster and vector based map tiles, route planning and asset tracking.

## Requirements

* Mac OS X, Windows, or Linux
* Yarn package + Node.js v6.5 or newer
* Text editor or IDE pre-configured with TypeScript/ESlint

## Get the source

For a quick start you can clone this repository:

```shell
$ git clone -o mapcat-angular2-openlayers -b master --single-branch \
      https://github.com/MapCat-Com/mapcat-angular2-openlayers.git MapCat-Sample
$ cd MapCat-Sample
```

## Install project dependencies

```shell
$ yarn install
```

This will install both run-time project dependencies and developer tools listed in package.json file.

## Run in development mode

```shell
$ yarn start
```

This command will start a webpack development server listening to requests at: ```http://localhost:3000/```

## Other tools

For a production build run:

```shell
$ yarn run build
```

The compiled, optimized static files will be put into the `build` folder.

For ESLint run:

```shell
$ yarn run lint
```

