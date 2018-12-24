var readline = require('readline-sync');

console.log("Enter two complex numbers");
var bool = false;
var realOne = parseInt(readline.question('Real part of first number:'));
var imgOne = parseInt(readline.question('img part of first number:'));
var realTwo = parseInt(readline.question('Real part of second number:'));
var imgTwo = parseInt(readline.question('img part of second number:'));
//console.log("entered numbers are :" + realOne, realTwo, imgOne, imgTwo);
console.log('Selct any operation below:' + '\n' + '1.Addition' + '\n' +
  '2.Subtaction' + '\n' +
  '3.Multiplication');
while (bool === false) {
  var op = parseInt(readline.question(
    "Enter the number before to choose the specific operation:"));

  function operations() {
    switch (op) {
      case 1:
        bool = true;
        return ((realOne + realTwo) + "+" + (imgOne + imgTwo) + "i");
        break;

      case 2:
        bool = true;
        return ((realOne - realTwo) + "+" + (imgOne - imgTwo) + "i");
        break;

      case 3:
        bool = true;
        return ((realOne * realTwo) - (imgOne * imgTwo) + "+" + ((realOne *
          imgTwo) + (realTwo * imgOne)) + "i");
        break;

      default:
        {
          bool = false;
          return "Enter above mentioned operations!";
        }

    }
  }
  console.log(operations());
}
