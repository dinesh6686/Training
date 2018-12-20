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

function groupObjectsBy(obj) {

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
