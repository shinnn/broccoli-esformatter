'use strict';

var Filter = require('broccoli-filter');
var esformatter = require('esformatter');

var defaultOptions = require('esformatter/lib/preset/default.json');

function EsFormatterFilter(inputTree, options) {
  if (!(this instanceof EsFormatterFilter)) {
    return new EsFormatterFilter(inputTree, options);
  }

  this.inputTree = inputTree;
  this.options = options || {};
  
  if (typeof this.options.config === 'string') {
    this.options = esformatter.rc(this.options.config, this.options);
  } else if (this.options.config === false) {
    this.options = esformatter.rc(defaultOptions);
  } else {
    this.options = esformatter.rc(this.options);
  }
}

EsFormatterFilter.prototype = Object.create(Filter.prototype);
EsFormatterFilter.prototype.constructor = EsFormatterFilter;

EsFormatterFilter.prototype.extensions = ['js'];
EsFormatterFilter.prototype.targetExtension = 'js';

EsFormatterFilter.prototype.processString = function(str) {
  return esformatter.format(str, this.options);
};

module.exports = EsFormatterFilter;
