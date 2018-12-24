function stringUpdate(str) {
  var result = '';
  for (var i = 1; i < str.length - 1; i++) {
    result += str[i];
  }
  return result;
}
console.log(stringUpdate("Dinesh"));
