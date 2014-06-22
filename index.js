'use strict';

var fs = require('fs');
var Filter = require('broccoli-filter');
var esformatter = require('esformatter');
var objectAssign = require('object-assign');

function EsFormatterFilter(inputTree, options) {
  if (!(this instanceof EsFormatterFilter)) {
    return new EsFormatterFilter(inputTree, options);
  }

  this.inputTree = inputTree;
  this.options = objectAssign({config: true}, options || {});
}

EsFormatterFilter.prototype = Object.create(Filter.prototype);
EsFormatterFilter.prototype.constructor = EsFormatterFilter;

EsFormatterFilter.prototype.extensions = ['js'];
EsFormatterFilter.prototype.targetExtension = 'js';

EsFormatterFilter.prototype.processString = function(str) {
  var baseOpts = {};
  var configFilePath;

  if (this.options.config === true) {
    var message = '';

    try {
      baseOpts = JSON.parse(fs.readFileSync('.esformatter'));
    } catch (configFileReadError) {
      try {
        var pkgConfig = require('./package.json');
        if (! pkgConfig.hasOwnProperty('esformatter')) {
          throw null;
        } else if (typeof pkgConfig.esformatter === 'object') {
          baseOpts = pkgConfig.esformatter;
        } else {
          message = '"esformatter" property in the package.json is not an object.';
        }
      } catch (packageJsonReadError) {
        message = 'esformatter configuration file not found.';
      }
    }

    if (message) {
      console.warn(message);
    }

  } else if (typeof this.options.config === 'string') {
    baseOpts = JSON.parse(fs.readFileSync(this.options.config));
    // package.json
    if (typeof baseOpts.esformatter === 'object') {
      baseOpts = baseOpts.esformatter;
    }
  }

  return esformatter.format(str, objectAssign(baseOpts, this.options));
};

module.exports = EsFormatterFilter;
