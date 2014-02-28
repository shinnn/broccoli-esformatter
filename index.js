'use strict';

var fs = require('fs');
var Filter = require('broccoli-filter');
var esformatter = require('esformatter');

function assign(destObj, srcObj) {
  for (var attrname in srcObj) {
    destObj[attrname] = srcObj[attrname];
  }
  return destObj;
}

function EsFormatterFilter(inputTree, options) {
  if (!(this instanceof EsFormatterFilter)) {
    return new EsFormatterFilter(inputTree, options);
  }
  
  this.inputTree = inputTree;
  this.options = assign({config: true}, options);
}

EsFormatterFilter.prototype = Object.create(Filter.prototype);
EsFormatterFilter.prototype.constructor = EsFormatterFilter;

EsFormatterFilter.prototype.extensions = ['js'];
EsFormatterFilter.prototype.targetExtension = 'js';

EsFormatterFilter.prototype.processString = function(str) {
  var baseOpts = {};
  var configFilePath;
  var pkg;
  try {
    pkg = require('./package.json');
  } catch (e) {}
  
  if (this.options.config === true) {
    try {
      baseOpts = JSON.parse(fs.readFileSync('.esformatter'));
    } catch (e) {
      if (pkg && pkg.esformatter) {
        baseOpts = pkg.esformatter;
      }
    }
  } else if (typeof this.options.config === 'string') {
    var baseOpts = JSON.parse(fs.readFileSync(this.options.config));
    // package.json
    if (typeof baseOpts.esformatter === 'object') {
      baseOpts = baseOpts.esformatter;
    }
  }
    
  return esformatter.format(str, assign(baseOpts, this.options));
};

module.exports = EsFormatterFilter;