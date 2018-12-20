var obj = [{
  "channel": "A",
  "name": "shoe"
}, {
  "channel": "A",
  "name": "electronics"
}, {
  "channel": "B",
  "name": "apparel"
}, {
  "channel": "C",
  "name": "electronics"
}, {
  "channel": "B",
  "name": "asdf"
}]; //json object created.

var groupObjectsBy = function(obj) {

  for (i = 0; i < obj.length; i++) {
    var channel = obj[i].channel;
    if (!groupObjectsBy[channel]) {
      groupObjectsBy[channel] = [];
    }
    groupObjectsBy[channel].push(JSON.stringify(obj[i]));
  }
  var res = [];
  for (var channel in groupObjectsBy) {
    res.push({
      channel, obj: groupObjectsBy[channel]
    })
  }
  return res;
}
console.log(groupObjectsBy(obj));


// var groupObjectsBy = function(object, property) {
//   return object.reduce(function(result, x) {
//     (result[x[property]] = result[x[property]] || []).push(x);
//     return result;
//   }, {});
// };
//
// console.log(groupObjectsBy(obj, 'channel'));
