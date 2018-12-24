var fs = require('fs');
var parserString = require('xml2js').parseString;
var path = './note.xml';

function xmlParser(path) {
  fs.readFile(path, "utf8", function(err, data) {
    if (err) {
      console.log(err);
    } else {
      parserString(data, function(err, result) {
        console.log(result);
      })
    }
  })
}
xmlParser(path);
