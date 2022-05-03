// #1
// It raises a syntax error.
// A function declaration must be converted to a function expression before you can invoke it with immediate invocation syntax.

// #2
(function() {
  console.log('Sometime, syntax isn\'t intuitive!');
})();

// #3
var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum);

// #4
(function(integer) {
  for (let index = integer; index >= 0; index--) {
    console.log(index);
  }
})(7);

// #5
// No, the function name is not visible outside of the scope created by the IIFE.

// #6
let bar = (function(start) {
  let prod = start;
  return function(factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

// #7
(function countDown(integer) {
  console.log(integer);

  if (integer > 0) return countDown(integer - 1);
})(15);