var request = require('request');

function getBody(callback){
  request.get('http://www.google.com',function(err,response,body){
    //console.log(response);
    if(err) return callback(err);
    return callback(response,body);
  })
}
// function report(){
//   return ('abde');
// }
//
// module.exports.getData=report;
module.exports.body=getBody;
