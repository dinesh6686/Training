var accessToken ='*****************';
var url = 'https://api.integrator.io/v1';

function setOptions(varUri='',varBody={},meth=''){
    var options={
        method:meth,
        uri :url+varUri,
        headers:{
            Authorization:'Bearer '+accessToken,
            'Content-Type':'application/json',
            'charset':'utf8'
        },
        json:varBody
    }
    return options;
}


module.exports.setOptions = setOptions;
