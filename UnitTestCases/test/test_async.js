const chai = require('chai');
const nock = require('nock');
//const data = require('../AppSupporters/getGoogleHomePageData.js')
const googleHomePage = require('../Apps/unitTestCase_async.js');


describe('---GoogleHomePage---', function() {
  before(function(done){
    nock('http://www.google.com')
    .get('/')
    .reply(201,'response matched')
    done();
  })

  after(function(done){
    nock.cleanAll()
   done();
  })

  it.only('googleHomepageBody', function(done){
    googleHomePage.body(function(response,body){
      chai.assert.equal(body,'response matched');
      chai.assert.equal(response.statusCode,201);
      done();
    })

  })
})
