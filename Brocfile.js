'use strict';

var esformatter = require('./');
var mergeTrees = require('broccoli-merge-trees');

var noOption = esformatter('test/fixtures/no_option');
var noConfig = esformatter('test/fixtures/no_config', {config: false});
var indentOption = esformatter('test/fixtures/indent', {
  indent: {
    value: ''
  }
});
var lineBreakOption = esformatter('test/fixtures/linebreak', {
  lineBreak: {
    value: '// line break\n'
  }
});
var whiteSpaceOption = esformatter('test/fixtures/whitespace', {
  whiteSpace: {
    value: '/* white space */'
  }
});
var plugins = esformatter('test/fixtures/plugin', {
  plugins: ['esformatter-quotes', 'rocambole-commafirst'],
  quotes: {
    type: 'single',
    avoidEscape: true
  }
});

module.exports = mergeTrees([
  noOption,
  noConfig,
  indentOption,
  lineBreakOption,
  whiteSpaceOption,
  plugins
], {overwrite: true});
