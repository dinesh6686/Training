var request = require('request')
var option = require('./Authentication')
var json={
    'type':'rest',
    'name':'Backend Export REST API Connection',
    'rest':{
        'mediaType':'json',
        'baseURI':'http://demo4227544.mockable.io/',
        'authType':'basic',
        //'pingRelativeURI':'createCust',
        'pingMethod':'GET',
        'basicAuth':{
            'username':'dinesh.venkat@celigo.com',
            'password':'***********'
        }
    }
}

function createConnection(callback){
    request(option.setOptions('/connections',json,'POST'),function(err,response,body){
        if(err)console.log(JSON.stringify(response));
        callback(response);
    })
}

module.exports.connection= createConnection;
