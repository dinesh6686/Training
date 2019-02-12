const chai = require('chai');
const nock = require('nock');
const test = require('../App/CreateItemIO');

describe('--------->CreateItem',function(){
  beforeEach(function(done){
    nock('https://api.integrator.io/v1')
    .post('/flows').reply(200,'response matched')
    .post('/exports')
    .reply(201,{_id:54321})
    .post('/connections')
    .reply(201,{_id:54321})
    .post('/imports')
    .reply(201,{_id:12345})
    .post('/connections')
    .reply(201,{_id:12345})
    done();
  })
  afterEach(function(done){
    nock.cleanAll();
   done();
  })

  it('CreateItem body as response matched & statusCode as 200', function(done){
    test.FlowCreate(function(response){
      //console.log(JSON.stringify(response));
      chai.assert.equal(response.body,'response matched');
      chai.assert.equal(response.statusCode,200);
        done();
    })

  })
})
