/* eslint-disable max-len */

// #1
function delayLog() {
  for (let index = 1; index <= 10; index++) {
    setTimeout(() => console.log(index), index * 1000);
  }
}

// delayLog();

// #2
// The issue here is that a var declaration has function scope, so the loop uses the same index variable with each iteration.
// Due to closure, each invocation of the callback function sees the current state of the index variable. Since the callback
// doesn't get called until long after the loop finishes, it gets the final value of index (i.e., 11).

// Since let has block scope, each iteration forms a closure with a different variable. Thus, each callback's closure encloses a
// different index variable.

// #3
// 1, 5, 2, 7, 3, 6, 4, and 8

// #4
// g(), f(), d(), z(), n(), s(), q()

// #5
function afterNSeconds(callback, numberOfSeconds) {
  setTimeout(callback, numberOfSeconds * 1000);
}