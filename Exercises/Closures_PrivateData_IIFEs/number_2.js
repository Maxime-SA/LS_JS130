function myBind(func, context, ...args) {
  let firstArgs = args;

  return function(...args) {
    let secondArgs = args;
    let allArgs = firstArgs.concat(secondArgs);

    return func.apply(context, allArgs);
  };
}

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15