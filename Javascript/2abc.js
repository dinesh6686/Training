function myFun(version, channel, keyField) {
  this._version = version;
  this._channel = channel;
  this._keyField = keyField;
}

function getVersion(obj) {
  return obj._version;
}

function getChannel(obj) {
  return obj._channel;
}

function getKeyField(obj) {
  return obj._keyField;
}

function setVersion(obj, val) {
  obj._version = val;
  console.log("Version changed to " + obj._version);

}

function setChannel(obj, val) {
  obj._channel = val;
  console.log("Channel changed to " + obj._channel);
}

function setKeyField(obj, val) {
  obj._keyField = val;
  console.log("keyField changed to " + obj._keyField);

}
var x = new myFun(52, "ASD", 78);
console.log(x);

console.log(getVersion(x));
console.log(getChannel(x));
console.log(getKeyField(x));

setChannel(x, "XYZ");
setKeyField(x, 4578);

console.log(x._version + ", " + x._channel + ", " + x._keyField);
//console.log(x._keyField);
//console.log(x.getChannel());
var obj = [{
  "_version": 1.0,
  "_channel": "A",
  "_keyField": 1234
}, {
  "_version": 2.0,
  "_channel": "B",
  "_keyField": 4564
}, {
  "_version": 3.0,
  "_channel": "C",
  "_keyField": 7890
}];

var MetadataParser = function(object) {
  var res = [];
  for (i in object) {
    res.push(object[i]._keyField);
  }
  return res;
};

console.log(MetadataParser(obj));
