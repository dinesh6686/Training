const chai = require('chai');
const nock = require('nock');
const test = require('../App/ExportConnection');

describe('--------->ExportConnection',function(){
  beforeEach(function(done){
    nock('https://api.integrator.io/v1')
    .post('/connections')
    .reply(201,'response matched')
    done();
  })
  afterEach(function(done){
    nock.cleanAll();
   done();
  })

  it('ExportConnection statusCode as 201', function(done){
    test.connection(function(response,body){
      chai.assert.equal(body,undefined);
      chai.assert.equal(response.statusCode,201);
        done();
    })

  })
})
