var readline = require('readline-sync');
var jsonObj = [{
  "id": 3,
  "name": "user1"
}, {
  "id": 6,
  "name": "user2",
}, {
  "id": 4,
  "name": "user3"
}, {
  "id": 1,
  "name": "user4"
}];

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

function sortObjectArray(json) {
  json.sort(function(a, b) {
    return a.id - b.id; //sort the object on id property
  });
  console.log("Sorted JSON object:");
  console.log(json);
}

inputArray();
sortObjectArray(jsonObj);
