var templatePath = ('./handlebarModelTemplate.js');
var filepath = './data.xml';
var fs = require('fs');
var arr = require('./handlebarFeeder.js').arr;
var handlebar = require('handlebars');
//console.log(arr);
fs.readFile(templatePath, 'utf8', function(err, data) {
  var template = handlebar.compile(JSON.stringify(data));
  var result = template(arr);
  //  console.log(result);
  fs.writeFile(filepath, result, function(err) {
    if (err) console.log(err);
  });
});
