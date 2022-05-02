// #1

// Because we have a variable declaration with var that has the same name as a function declaration,
// JS will hoist the function declaration and discard the var declaration. Therefore, when foo is invoked,
// foo has been reassigned to log the string 'Bye' instead of 'Hello'.

// #2

// undefined
// Hello
// Bye
// 2

// #3

bar();
function bar() {
  console.log("foo!");
}

// #4

function foo() {
  var bar;
  bar = bar - 42;
  console.log(bar);
}
var bar;
bar = 82;
foo();
Therefore, this logs undefined - 42 which is NaN

// #5

function foo(condition) {
  let bar;
  console.log(bar);
  let qux = 0.5772;
  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;
    let xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };
    console.log(qux);
    console.log(xyzzy());
  }
  qux = 42;
  console.log(qux);
}
foo(true);
foo(false);

// #6

function Pet(name, image) {
  this.name = name;
  this.image = image;
}

let Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);