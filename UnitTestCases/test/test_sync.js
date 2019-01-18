const assert = require('chai').assert;
const test = require('../Apps/unitTestCase_sync');
describe('Operations to be done:',function(){
  describe('Addition',function(){
      it('Validation of return type for addition',function(){
        assert.typeOf(test.add(2,3),'number');
      })
  });
  describe('Subtraction',function(){
      it('Validation of return type for subtraction',function(){
        assert.typeOf(test.sub(2,3),'number');
      })
  });
  describe('Multiply',function(){
      it('return value for multiply',function(){
        assert.equal(test.mul(2,3),6);
      })
  });
  describe('Divide',function(){
      it('return value for divide',function(){
        assert.equal(Math.floor(test.div(2,3)),0);
      })
  });
  describe('Fibonacci',function(){
      it('nth fibonacci',function(){
        assert.equal(test.fib(4),3);
      })
  });
});
