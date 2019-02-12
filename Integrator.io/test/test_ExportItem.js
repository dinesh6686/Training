const chai = require('chai');
const nock = require('nock');
const test = require('../App/ExportItem');

describe('--------->Exports!!!',function(){
  beforeEach(function(done){
    nock('https://api.integrator.io/v1')
    .post('/exports')
    .reply(200,'response matched')
    .post('/connections')
    .reply(201,{_id:54321})
    done();
  })
  afterEach(function(done){
    nock.cleanAll();
   done();
  })

  it('Exports statusCode as 200', function(done){
    test.generateExport(function(response){
      chai.assert.equal(response.body,'response matched');
      chai.assert.equal(response.statusCode,200);
        done();
    })

  })
})
