var request = require('request');
var option = require('./Authentication');
var exportConnection =require('./ExportConnection');

function ExportGenerator(callback){
    exportConnection.connection(function(conRes){
        var json={
            'name':'Backend Export REST API Mockable IO',
            '_connectionId': conRes.body._id,
            'asynchronous':true,
            'sampleData':{
                'itemname':'name',
                'subsidiary':3

            },
            'rest':{
                'relativeURI':'createItem',
                'method':'GET'
            },
            'adaptorType':'RESTExport'
        }

        request(option.setOptions('/exports',json,'POST'),function(error,response,data){
            if(error) console.log(JSON.stringify(response));
            callback(response);
        })
    })
}

module.exports.generateExport = ExportGenerator;
