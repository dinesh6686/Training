function firstOrLast(arr) {
  if (arr.length === 0) {
    console.log("Array length must be >= 1");
    return false;
  } else if (arr[0] === 1 || arr[arr.length - 1] === 1) return true;
  else return false;

}
console.log(firstOrLast([2, 3, 4, 5, 6, 7, 8, 9]));
console.log(firstOrLast([]));
console.log(firstOrLast([1, 2, 3, 4, 5, 6]));
