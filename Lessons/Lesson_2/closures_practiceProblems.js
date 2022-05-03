/* eslint-disable max-len */

// #1
// 1, 2, 3, and 4
// counter has global scope and its value gets initialized to 0 only once.
// closure ensures that the function returned by makeCounter contains an envelope with a pointer to that variable.

// #2
// 1, 1, 1, and 1
// Because counter is declared and initialized inside the function returned by makeCounter, closure plays no part in its execution.

// #3
// 1, 2, 1, and 2
// counter gets declared and initialized when we call makeCounter and is therefore part of the envelope attached to the returned function.
// Every time we call makeCounter, a new counter variable is declared and initialized.

// #4
// 1, 2, 1, and 2

// #5
function makeMultipleLister(integer) {
  return function() {
    let number = integer;
    while (number < 100) {
      console.log(number);
      number += integer;
    }
  };
}

let lister = makeMultipleLister(17);
lister();

// #6
let runningTotal = 0;

function add(integer) {
  runningTotal += integer;
  console.log(runningTotal);
}

function subtract(integer) {
  runningTotal -= integer;
  console.log(runningTotal);
}

add(1);
add(42);
subtract(39);
add(6);

// #7
// 150

// #8
function later(callback, argument) {
  return function() {
    return callback(argument);
  };
}

const logger = message => console.log(message);
let logWarning = later(logger, 'The system is shutting down');
logWarning();

// #9
function later2(callback, firstArgument) {
  return function(secondArgument) {
    return callback(firstArgument, secondArgument);
  };
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30);

// #10
function bind(context, func) {
  return () => func.call(context);
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj);