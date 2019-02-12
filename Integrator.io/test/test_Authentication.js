const chai = require('chai');
const nock = require('nock');
const test = require('../App/Authentication');
describe('------------>Auth',function(){
  beforeEach(function(done){
    nock('https://api.integrator.io/v1')
    .post('/')
    .reply(201,'response matched')
    done();
  })

  afterEach(function(done){
    nock.cleanAll()
   done();
  })

  it('Authentcation', function(){
    test.setOptions(function(response,body){
      chai.assert.equal(body,'response matched');
      chai.assert.equal(response.statusCode,201);
    })
  })
})
