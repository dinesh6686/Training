var option = require('./Authentication');
var importConnection= require('./ImportConnection');
var request= require('request');


function ImportGenerator(callback){
    importConnection.connection(function(conRes){
        var json={
            'name':'Backend Import NetSuite',
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
                'recordType':'inventoryitem',
                'mapping':{
                    'fields':[
                        {
                            'generate':'itemid',
                            'extract':'itemname',
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
                            'generate':'location',
                            'extract':'loc',
                            'internalId':true,
                            'immutable':false,
                            'discardIfEmpty':false
                        },
                        {
                            'generate':'displayname',
                            'extract':'nametodisplay',
                            'internalId':false,
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
