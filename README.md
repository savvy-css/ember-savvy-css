# ember-savvy-css

_An Ember addon for including Savvy CSS in an Ember project_.

[![Latest NPM release][npm-badge]][npm-badge-url]
[![CircleCI Build Status][circle-badge]][circle-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-badge-url]
[![License][license-badge]][license-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url]
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]


## Installation

```sh
ember install @savvy-css/ember-savvy-css
```

## Usage

### Generating Files

During installation, the addon will run its default blueprint (which can be run manually with `ember g ember-savvy-css`). The blueprint generates a `savvy-css/` directory within your project's `app/styles/` directory. This directory consists of files that organize imports of the modules comprising `savvy-css`:

#### _savvy-css-settings.css

This file contains all of the CSS Custom Properties provided by Savvy. You can override these properties with you own values by importing this file as the first thing in your application.

#### _savvy-css-core.css

This file contains Savvy's core -- its helper classes. Some of these will attempt to make use of Savvy variables (otherwise, they'll fallback on default values), so it's recommended to import this file after `_savvy-css-settings.css`.


### Importing Generated Files

After the default blueprint runs, all you need to do is import the generated files in your `app.css` file to make it a part of the styles that are processed by your app.

Here's our recommended setup:

```css
/* --------- app.css --------- */

/* Import Savvy CSS variables/settings */
@import "./savvy-css/_savvy-css-settings.css";

/* Import local variables/settings after Savvy settings */
@import "./_variables.css";

/* Import core Savvy CSS before local core CSS */
@import "./savvy-css/_savvy-css-core.css";


/* Organize the rest of your app's CSS from this point onward */

```

Currently, this setup assumes that your styles are being processed wth `ember-cli-postcss`, but more flexible options are being explored.

### Configuring your Build with PostCSS

PostCSS requires at least one plugin be defined. We're going to need a way to resolve paths of CSS `@import` rules anyway, so let's use [`postcss-import`](https://www.npmjs.com/package/postcss-import) as our first plugin. Here's what the PostCSS options should look like in `ember-cli-build.js`:

```js
// ember-cli-build.js

/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const cssImport = require('postcss-import');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          { module: cssImport }
        ]
      }
    },
  });
  return app.toTree();
};
```


[npm-badge]: https://img.shields.io/npm/v/@savvy-css/ember-savvy-css.svg
[npm-badge-url]: https://www.npmjs.com/package/@savvy-css/ember-savvy-css
[circle-badge]: https://circleci.com/gh/savvy-css/ember-savvy-css/tree/master.svg?style=svg&circle-token={{CIRCLE_TOKEN}}
[circle-badge-url]: https://circleci.com/gh/savvy-css/ember-savvy-css/tree/master
[ember-observer-badge]: http://emberobserver.com/badges/ember-savvy-css.svg
[ember-observer-badge-url]: http://emberobserver.com/addons/ember-savvy-css
[license-badge]: https://img.shields.io/npm/l/@savvy-css/ember-savvy-css.svg
[license-badge-url]: ./LICENSE
[dependencies-badge]: https://img.shields.io/david/savvy-css/ember-savvy-css.svg
[dependencies-badge-url]: https://david-dm.org/savvy-css/ember-savvy-css
[devDependencies-badge]: https://img.shields.io/david/dev/savvy-css/ember-savvy-css.svg
[devDependencies-badge-url]: https://david-dm.org/savvy-css/ember-savvy-css#info=devDependencies
