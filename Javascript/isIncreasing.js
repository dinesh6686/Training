function isIncreasing(int) {
  var str = '';
  str += int;
  console.log(str);
  for (i = 0; i < str.length - 1; i++) {
    if (!(str[i] < str[i + 1])) return false;
  }
  return true;
}
console.log(isIncreasing(123456));
console.log(isIncreasing(123654));
