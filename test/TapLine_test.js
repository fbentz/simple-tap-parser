var tap = require('../tap');

exports.testSomething = function(test){
  test.expect(1);
  test.ok(true, "this assertion should pass");
  test.done();
};
