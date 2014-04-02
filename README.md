# broccoli-esformatter

[![NPM version](https://badge.fury.io/js/broccoli-esformatter.svg)](http://badge.fury.io/js/broccoli-esformatter)
[![Build Status](https://travis-ci.org/shinnn/broccoli-esformatter.svg?branch=master)](https://travis-ci.org/shinnn/broccoli-esformatter)
[![Dependency Status](https://david-dm.org/shinnn/broccoli-esformatter.svg?theme=shields.io)](https://david-dm.org/shinnn/broccoli-esformatter)
[![devDependency Status](https://david-dm.org/shinnn/broccoli-esformatter/dev-status.svg?theme=shields.io)](https://david-dm.org/shinnn/broccoli-esformatter#info=devDependencies)

JavaScript code formatter for [Broccoli](https://github.com/joliss/broccoli) with [esformatter](https://github.com/millermedeiros/esformatter)

## Installation

Install with [npm](https://www.npmjs.org/). (Make sure you have installed [Node](http://nodejs.org/).)

```
npm i --save-dev broccoli-esformatter
```

## Example

```javascript
var esformatter = require('broccoli-esformatter');
tree = esformatter(tree, options);
```

## API

### esformatter(tree, options)

`preset`, `indent`, `lineBreak` and `whiteSpace` options are available. See [the documentation of grunt-esformatter](https://github.com/jzaefferer/grunt-esformatter#options) for further details.

In addition, you can use `config` option mentioned below.

#### options.config

Type: `String|Boolean` Default: `true`

Specify the file path of [esformatter configuration file](https://github.com/millermedeiros/esformatter#configuration), such as `.esformatter`. When you set it to the path of `package.json`, this plugin uses `esformatter` property inside `package.json`.

By default, or when you set this option `true` instead of any `String`, this plugin uses `.esformatter` or `package.json` as a configuration file.

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
