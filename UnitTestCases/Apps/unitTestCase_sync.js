// module.exports={
//  addition:function(num1,num2){
//   return num1+num2;
// }}

function addition(num1,num2){
  return num1+num2;
}
function subtraction(num1,num2){
  return num1-num2;
}
function multiply(num1,num2){
  return num1*num2;
}
function divide(num1,num2){
  return num1/num2;
}
function nthfibonacci(n){
  if(n===1||n===2) return 1;
  else return (nthfibonacci(n-1) + nthfibonacci(n-2));
}
module.exports.fib=nthfibonacci;
module.exports.add=addition;
module.exports.sub=subtraction;
module.exports.mul=multiply;
module.exports.div=divide;
