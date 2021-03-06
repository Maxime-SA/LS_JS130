// #1
function foo(bar, qux, baz) {
  return {
    bar: bar,
    qux: qux,
    baz: baz,
  };
}

// #2
function foo() {
  return {
    bar: function() {
      console.log('bar');
    },
    qux: function(arg1) {
      console.log('qux');
      console.log(arg1);
    },
    baz: function(arg1, arg2) {
      console.log('baz');
      console.log(arg1);
      console.log(arg2);
    },
  }
}

// #3
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let obj = foo(1,2,3);
let baz = obj.baz;
let qux = obj.qux;
let bar = obj.bar;

// #4
function foo(array) {
  return [
    array[2],
    5,
    array[0],
  ];
}

let array = [1,2,3];
let result = foo(array);
let bar = result[0];
let qux = result[1];
let baz = result[2];

// #5
function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(array[0], array[1], array[2]);

// #6
function product() {
  let arr = Array.from(arguments);
  return arr.reduce((total, number) => total * number);
}

let result = product(2,3,4,5);

// #7
function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  return { type: animalType, age, colors };
}

let { type, age, colors } = qux();
console.log(type);
console.log(age);
console.log(colors);

// #8
function random(first, middle1, middle2, middle3, last) {
  return {
    first,
    last,
    middle: [middle1, middle2, middle3].sort(),
  };
}

let arr = ["Fluffy", "Pudding", "Mister", "Ben", "Butterscotch"];
let { first, last, middle } = random(...arr);