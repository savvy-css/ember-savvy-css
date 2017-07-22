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

## Compatibility

## Usage

During installation, the addon will generate a `_ember-savvy-css.css` file in your project's `app/styles/` directory. By default, this file imports all of the modules of `savvy-css`. However, you can modify these imports as you see fit.

From there, all you need to do is import the generated file in your `app.css` file to make it a part of the styles that are processed by your app:

```css
/* app.css */

@import "./_ember-savvy-css.css";

...

```

Currently, this setup assumes that your styles are being processed wth `ember-cli-postcss`, but more flexible options are being explored.

### PostCSS

PostCSS requires at least one plugin be defined. We're going to need a way to resolve paths of CSS `@import` rules anyway, so let's use [`postcss-import`](https://www.npmjs.com/package/postcss-import) as our first plugin. Here's what the PostCSS options should look like in `ember-cli-build.js`:

```js
// ember-cli-build.js

/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const cssImport = require('postcss-import');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-babel': {
      includePolyfill: true,
    },
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
