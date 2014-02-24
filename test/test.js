'use strict';

var assert = require('assert');
var fs = require('fs');

var expected = 'function repeat(str, num) {\n' +
               '  var result;\n' +
               '  for (var i = 0; i < num; i++) result += str;\n' +
               '  return result\n' +
               '}';

describe('broccoli-esformatter', function () {
  it('should run esformatter', function (done) {
    fs.readFile('test/actual/src.js', function(err, data) {
      assert.strictEqual(data.toString(), expected);
      done();
    });
  });
});