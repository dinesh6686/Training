var request = require('request');
var option = require('./Authentication');

var json = {
    'type':'netsuite',
    'name':'Backend Import NetSuite Connection',
    'netsuite':{
        'account':'TSTDRV1288246',
        'roleId':'3',
        'email':'dinesh.venkat@celigo.com',
        'password':'Dinesh@26496',
        'environment':'production',
        'requestLevelCredentials':false,
        'dataCenterURLs':{
            'restDomain':'https://rest.netsuite.com/',
            'webservicesDomain':'https://webservices.netsuite.com/',
            'systemDomain':'https://system.netsuite.com/',
        },
        'wsdlVersion':'current',
        'concurrencyLevel':1
    }
}

function createConnection(callback){
    request(option.setOptions('/connections',json,'POST'),function(err,response,body){
        if(err) console.log(JSON.stringify(response));
        callback(response);
    })
}

module.exports.connection = createConnection;
