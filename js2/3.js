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
}]; //json object created.

var groupObjectsBy = function(object, property) {
  return object.reduce(function(result, x) {
    (result[x[property]] = result[x[property]] || []).push(x);
    return result;
  }, {});
};

console.log(groupObjectsBy(obj, 'channel'));
