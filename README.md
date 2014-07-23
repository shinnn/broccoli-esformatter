# broccoli-esformatter

[![NPM version](https://badge.fury.io/js/broccoli-esformatter.svg)](http://badge.fury.io/js/broccoli-esformatter)
[![Build Status](https://travis-ci.org/shinnn/broccoli-esformatter.svg?branch=master)](https://travis-ci.org/shinnn/broccoli-esformatter)
[![Dependency Status](https://david-dm.org/shinnn/broccoli-esformatter.svg)](https://david-dm.org/shinnn/broccoli-esformatter)
[![devDependency Status](https://david-dm.org/shinnn/broccoli-esformatter/dev-status.svg)](https://david-dm.org/shinnn/broccoli-esformatter#info=devDependencies)

JavaScript code formatter for [Broccoli](https://github.com/joliss/broccoli) with [esformatter](https://github.com/millermedeiros/esformatter)

## Installation

Install with [npm](https://github.com/npm/npm#npm1----node-package-manager). (Make sure you have installed [Node](http://nodejs.org/).)

```
npm i --save-dev broccoli-esformatter
```

## Example

```javascript
var esformatter = require('broccoli-esformatter');
tree = esformatter(tree, options);
```

## API

### esformatter(tree[, options])

### options

Type: `Object` Default: `{}`

`preset`, [`indent`](https://github.com/millermedeiros/esformatter#indent), [`lineBreak`][linebreak_and_whitespace], [`whiteSpace`][linebreak_and_whitespace] options and [`plugins`](https://github.com/millermedeiros/esformatter#plugins) are available. See [the documentation of esformatter](https://github.com/millermedeiros/esformatter#configuration) for more information.

In addition, you can use `config` option mentioned below.

#### options.config

Type: `String` (file path) or `Boolean`

This option will be directly passed to the first argument of [`esformatter.rc()`](https://github.com/millermedeiros/esformatter#esformatterrcfilepath-customoptionsobject):

If you set this option `false`, this plugin doesn't read any configuration files, but uses [`default` preset](https://github.com/millermedeiros/esformatter/blob/master/lib/preset/default.json) instead.

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).

[linebreak_and_whitespace]: https://github.com/millermedeiros/esformatter#linebreak-and-whitespace
