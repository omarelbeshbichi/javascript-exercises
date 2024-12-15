const add = function(a, b) {
  return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(arr) {
	return arr.reduce((total, number) => total += number, 0)
};

const multiply = function(arr) {
  return arr.reduce((multiplied, numberCurr) => multiplied *= numberCurr, 1)
};

const power = function(a, b) {
  return Math.pow(a, b)
	
};

const factorial = function(num) {

  let value = 1;

  if (num===0) {
    return 1
  }

  else {
    for (let i = 1; i <= num; i++) {
      value *= i;
    }
    return value
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
