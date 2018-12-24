var readline = require('readline-sync');

function ArraySort(array) {
  this.originalArray = array;

  function sortArray() {
    var sortedArray = originalArray.sort();
    return getSortedArray();

    function getSortedArray() {
      return sortedArray;
    }
  }
  return sortArray();
}

function inputArray() {
  var inputStr = readline.question("Enter the inputArray:");
  var array = JSON.parse("[" + inputStr + "]");
  console.log("sortedArray: " + ArraySort(array));
}
inputArray();

function sortObjectArray() {

}
