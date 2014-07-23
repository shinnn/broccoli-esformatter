'use strict';

var assert = require('assert');
var fs = require('fs');

var Bluebird = require('bluebird');

var readFile = Bluebird.promisify(fs.readFile);
function compareFiles(filename) {
  return Bluebird.all([
    readFile('test/actual/' + filename),
    readFile('test/expected/' + filename)
  ]).spread(function(actual, expected) {
    assert.strictEqual(actual.toString(), expected.toString());
  });
}

describe('broccoli-esformatter', function() {
  it('should read .esformatter file automatically.', function() {
    return compareFiles('simple_for_loop.js');
  });
  describe('config: false', function() {
    it('should ignore .esformatter file.', function() {
      return compareFiles('simple_while_loop.js');
    });
  });
  it('should accept "indent" option.', function() {
    return compareFiles('simple_object.js');
  });
  it('should accept "lineBreak" option.', function() {
    return compareFiles('simple_variables.js');
  });
  it('should accept "whiteSpace" option.', function() {
    return compareFiles('simple_function.js');
  });

  it('should support plugins.', function() {
    return compareFiles('quotes_and_comma.js');
  });
});
