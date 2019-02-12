var request = require('request');
var async = require('async');
var option = require('./Authentication');
var exp = require('./ExportItem');
var imp = require('./ImportItem');

var expId,impId;
var createFlow = function(callback) {
    async.series([
        function(callbackOne){
            async.parallel([
                function(callbackTwo){
                    exp.generateExport(function(expRes){
                        expId=expRes.body._id;
                        console.log("ExportID :"+expId);
                       return callbackTwo(null, expId);
                    })
                },
                function(callbackTwo){
                    imp.generateImport(function(impRes){
                       impId=impRes.body._id;
                       console.log("ImportID :"+impId);
                       return callbackTwo(null, impId);
                    })
                }
            ],function(err, res){
                if(err) console.log('error: ', err);
                return callbackOne(null, res);
            }
          )
        },
        function (callbackOne){
            var json={
              'name': 'Backend Flow for creating New Item',
              'disabled':true,
              '_exportId':expId,
              '_importId':impId,
              'skipRetries':false
            }

            request(option.setOptions('/flows',json,'POST'),function(error,response,body){
              if(error) console.log(JSON.stringify(response));
              return callbackOne(null, response);
            })
        }
    ],
    function(err, res){
        //console.log('response: ', res)
           return callback(res[1])
    }
  )
}
module.exports.FlowCreate = createFlow;
