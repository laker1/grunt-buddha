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
function handle(actual){
  var actArr = actual.split(grunt.util.normalizelf('\n'));
  actArr = actArr.filter(function(con){
    if(con.indexOf('//')===0){
      return true;
    }else{
      return false;
    }
  });
  return actArr.join(grunt.util.normalizelf('\n'));
}
exports.buddha_maple = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  // default_options: function (test) {
  //   test.expect(1);

  //   var actual = grunt.file.read('tmp/default_options');
  //   var expected = grunt.file.read('test/expected/default_options');
  //   test.equal(actual, expected, 'should describe what the default behavior is.');

  //   test.done();
  // },

  // custom_options: function (test) {
  //   test.expect(1);

  //   var actual = grunt.file.read('tmp/custom_options');
  //   var expected = grunt.file.read('test/expected/custom_options');
  //   test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

  //   test.done();
  // },

  buddha:function(test){
    test.expect(2);

    var actual1 = handle(grunt.file.read('test/fixtures/test1.js'));
    var actual2 = handle(grunt.file.read('test/fixtures/test2.js'));
    var expected = grunt.file.read('test/expected/buddha');
    test.equal(actual1, expected, 'should describe what the custom option(s) behavior is.');
    test.equal(actual2, expected, 'should describe what the custom option(s) behavior is.');
    test.done();
  },
  // alpaca:function(test){
  //   test.expect(2);

  //   var actual1 = handle(grunt.file.read('test/fixtures/test1.js'));
  //   var actual2 = handle(grunt.file.read('test/fixtures/test2.js'));
  //   var expected = grunt.file.read('test/expected/alpaca');
  //   test.equal(actual1, expected, 'should describe what the custom option(s) behavior is.');
  //   test.equal(actual2, expected, 'should describe what the custom option(s) behavior is.');
  //   test.done();
  // }
};
