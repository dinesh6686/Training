var readline = require('readline-sync');

var bool = false;
console.log("Enter two complex numbers");
var objComplex = {

  realOne: function() {
    this.realOne = parseInt(readline.question('Real part of first number:'));
  },
  imgOne: function() {
    this.imgOne = parseInt(readline.question('img part of first number:'));
  },
  realTwo: function() {
    this.realTwo = parseInt(readline.question('Real part of second number:'));
  },
  imgTwo: function() {
    this.imgTwo = parseInt(readline.question('img part of second number:'));
  }
}

function operations() {
  objComplex.realOne();
  objComplex.imgOne();
  objComplex.realTwo();
  objComplex.imgTwo();
  console.log('Selct any operation below:' + '\n' + '1.Addition' + '\n' +
    '2.Subtaction' + '\n' + '3.Multiplication');

  while (bool === false) {
    var op = parseInt(readline.question(
      "Enter the number before to choose the specific operation:"));

    function resultValue() {
      switch (op) {
        case 1:
          bool = true;
          return operations.prototype.add();
          break;

        case 2:
          bool = true;
          return operations.prototype.subtract();
          break;

        case 3:
          bool = true;
          return operations.prototype.multiply();
          break;

        default:
          {
            bool = false;
            return "Enter above mentioned operations!";
          }
      }
    }
    console.log(resultValue());
  }
}

operations.prototype.add = function() {
  return ((objComplex.realOne + objComplex.realTwo) + "+" + (objComplex.imgOne +
    objComplex.imgTwo) + "i");
}
operations.prototype.subtract = function() {
  return ((objComplex.realOne - objComplex.realTwo) + "+" + (objComplex.imgOne -
    objComplex.imgTwo) + "i");
}
operations.prototype.multiply = function() {
  return ((objComplex.realOne * objComplex.realTwo) - (objComplex.imgOne *
    objComplex.imgTwo) + "+" + ((objComplex.realOne * objComplex.imgTwo) +
    (objComplex.realTwo * objComplex.imgOne)) + "i");
}
operations();
