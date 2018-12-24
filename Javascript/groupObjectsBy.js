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
  var result = {};
  for (var x in obj) {
    //console.log(x)
    var currentChannel = obj[x].channel;
    for (var y in obj) {

      if (currentChannel === obj[y].channel) {
        if (!result.hasOwnProperty(currentChannel)) {
          result[currentChannel] = [];
          result[currentChannel].push(obj[y]);
        } else {
          if (result[currentChannel].indexOf(obj[y]) == -1)
            result[currentChannel].push(obj[y])
        }

      }
    }
  }
  return result;
}
console.log(groupObjectsBy(obj));
