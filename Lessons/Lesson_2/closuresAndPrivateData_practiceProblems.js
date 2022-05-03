/* eslint-disable max-lines-per-function */

// #1
function makeCounterLogger(firstNumber) {
  return function(secondNumber) {
    if (firstNumber > secondNumber) {
      for (let index = firstNumber; index >= secondNumber; index--) {
        console.log(index);
      }
    } else {
      for (let index = firstNumber; index <= secondNumber; index++) {
        console.log(index);
      }
    }
  };
}

let countLog = makeCounterLogger(5);
countLog(8);
countLog(2);

// #2
function makeList() {
  let myList = [];
  return function(todo) {
    if (todo === undefined) {
      if (myList.length === 0) {
        console.log('The list is empty.');
      } else {
        myList.forEach(todo => console.log(todo));
      }
    } else if (myList.includes(todo)) {
      myList.splice(myList.indexOf(todo),1);
      console.log(`${todo} removed!`);
    } else {
      myList.push(todo);
      console.log(`${todo} added!`);
    }
  };
}

let list = makeList();
list();
list('make breakfast');
list('read book');
list();
list('make breakfast');
list();

// #3
function makeList() {
  let myList = {todos: []};

  myList.add = function(todo) {
    this.todos.push(todo);
    console.log(`${todo} added!`);
  };

  myList.remove = function(todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log(`${todo} removed!`);
  };

  myList.list = function() {
    if (String(this.todos)) {
      this.todos.forEach(todo => console.log(todo));
    } else {
      console.log('This list is empty.');
    }
  };

  return myList;
}

let list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();

// #4
function makeList() {

  let myList = [];

  return {

    add: function(todo) {
      myList.push(todo);
      console.log(`${todo} added!`);
    },

    remove: function(todo) {
      let index = myList.indexOf(todo);
      myList.splice(index, 1);
      console.log(`${todo} removed!`);
    },

    list: function() {
      if (String(myList)) {
        myList.forEach(todo => console.log(todo));
      } else {
        console.log('This list is empty.');
      }
    },

  };
}

let list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();