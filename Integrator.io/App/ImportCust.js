var option = require('./Authentication');
var importConnection= require('./ImportConnection');
var request= require('request');


function ImportGenerator(callback){
    importConnection.connection(function(conRes){
        var json={
            'name':'Backend Import NetSuite Cust',
            'responseTransform':{
                'type':'expression',
                'expression':{
                    'version':'1'
                },
                'version':'1'
            },
            '_connectionId':conRes.body._id,
            'distributed':true,
            'netsuite_da':{
                'operation':'add',
                'recordType':'customer',
                'mapping':{
                    'fields':[
                        {
                            'generate':'isperson',
                            'extract':'isperson',
                            'internalId':false,
                            'immutable':false,
                            'discardIfEmpty':false
                        },
                        {
                            'generate':'subsidiary',
                            'extract':'subsidiary',
                            'internalId':true,
                            'immutable':false,
                            'discardIfEmpty':false
                        },
                        {
                            'generate':'firstname',
                            'extract':'firstname',
                            'internalId':false,
                            'immutable':false,
                            'discardIfEmpty':false
                        },
                        {
                            'generate':'lastname',
                            'extract':'lastname',
                            'internalId':false,
                            'immutable':false,
                            'discardIfEmpty':false
                        },
                        {
                            'generate':'entitystatus',
                            'extract':'entitystatus',
                            'internalId':true,
                            'immutable':false,
                            'discardIfEmpty':false
                        }
                    ]
                }
            },
            'adaptorType':'NetSuiteDistributedImport'
        }


        request(option.setOptions('/imports',json,'POST'),function(error,response,body){
            if(error) console.log(JSON.stringify(response));
            callback(response);
        })
    })
}

module.exports.generateImport = ImportGenerator;
