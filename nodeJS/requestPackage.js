var path = './Google.html';
var fs = require('fs');
var html2json = require('html2json').html2json;
var request = require('request');


request('http://www.google.com', function(error, response, body) {
  //console.log('body:', body);
  console.log("Checkout Google.html file!!");
  // Print the HTML for the Google homepage.
  fs.writeFile(path, body, function(err) {
    console.log("error");
  })
});
