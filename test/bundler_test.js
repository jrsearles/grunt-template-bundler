'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit
  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.template_runner = {
  setUp: function(done) {
    done();
  },

  default_options: function (test) {
    test.expect(1);

    var actual = grunt.file.read("test/actual/template.html");
    var expected = grunt.file.read("test/expected/template.html");

    test.equal(actual, expected, "should concatenate and minify the html");
    test.done();
  },

  wrapped_options: function (test) {
    test.expect(1);

    var actual = grunt.file.read("test/actual/template.js");
    var expected = grunt.file.read("test/expected/template.js");

    test.equal(actual, expected, "should concatenate and minify the html, and wrap with function");
    test.done();
  }
};