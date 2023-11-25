const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length === 0) return 0;
  else if (arr.length === 1) return arr[0];
  return arr[0] + sum(arr.slice(1));
};

const multiply = function(arr) {
  if (arr.length === 0) return 0;
  else if (arr.length === 1) return arr[0];
  return arr[0] * multiply(arr.slice(1));
};

const power = function(a, b) {
	if (b === 0) return 1;
  return a * power(a, b-1);
};

const factorial = function(a) {
	if (a === 0) return 1;
  return a * factorial(a-1);
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
