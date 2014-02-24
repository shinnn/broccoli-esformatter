'use strict';

var Filter = require('broccoli-filter');
var esformatter = require('esformatter');

function EsFormatterFilter(inputTree, options) {
  if (!(this instanceof EsFormatterFilter)) {
    return new EsFormatterFilter(inputTree, options);
  }
  
  this.inputTree = inputTree;
  this.options = options || {};
}

EsFormatterFilter.prototype = Object.create(Filter.prototype);
EsFormatterFilter.prototype.constructor = EsFormatterFilter;

EsFormatterFilter.prototype.extensions = ['js'];
EsFormatterFilter.prototype.targetExtension = 'js';

EsFormatterFilter.prototype.processString = function(str) {
  return esformatter.format(str, this.options);
};

module.exports = EsFormatterFilter;