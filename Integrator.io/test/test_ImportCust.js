const chai = require('chai');
const nock = require('nock');
const test = require('../App/ImportCust');

describe('--------->ImportsforCust!!!',function(){
  beforeEach(function(done){
    nock('https://api.integrator.io/v1')
    .post('/imports')
    .reply(200,'response matched')
    .post('/connections')
    .reply(201,{_id:123456})
    done();
  })
  afterEach(function(done){
    nock.cleanAll();
   done();
  })

  it('Imports statusCode as 200', function(done){
    test.generateImport(function(response){
      chai.assert.deepEqual(response.body,'response matched');
      chai.assert.equal(response.statusCode,200);
      done();
    })

  })
})
