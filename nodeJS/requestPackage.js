var path = './Google.html';
var fs = require('fs');
var html2json = require('html2json').html2json;
var request = require('request');


request('http://www.google.com', function(error, response, body) {
  //console.log('body:', body);

  // Print the HTML for the Google homepage.
  fs.writeFile(path, body, function(err) {
    if (err) console.log("err");
    else console.log("Checkout Google.html file!!");
  })
});
