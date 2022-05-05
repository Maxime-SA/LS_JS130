/* eslint-disable max-lines-per-function */

const Todo = require('./todo.js');
const TodoList = require('./ToDoList.js');

describe('TodoList', () => {
  let todo2;
  let todo1;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList('Today\'s Todos');
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('toArray returns the list of todos in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('first returns the first element of the todo list', () => {
    expect(list.first()).toBe(todo1);
  });

  test('last returns the last element of the todo list', () => {
    expect(list.last()).toBe(todo3);
  });

  test('shift should remove the first element of the todos list and return it', () => {
    expect(list.shift()).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('pop should remove the last element of the todos list and return it', () => {
    expect(list.pop()).toBe(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('isDone should return false when at least one item is still not done', () => {
    expect(list.isDone()).toBe(false);
  });

  test('add should throw a TypeError if we try to add an object that isn\'t a Todo object', () => {
    expect( () => list.add({foo: 1})).toThrow(TypeError);
    expect( () => list.add(1)).toThrow(TypeError);
    expect( () => list.add('test')).toThrow(TypeError);
  });

  test('itemAt should throw a ReferenceError if we use an invalid index number and return the element of the array if the index is valid', () => {
    expect(list.itemAt(0)).toBe(todo1);
    expect(list.itemAt(1)).toBe(todo2);
    expect(() => list.itemAt(5)).toThrow(ReferenceError);
  });

  test('markDoneAt should throw a ReferenceError if we use an invalid index number and mark a todo as done if the index is valid', () => {
    list.markDoneAt(0);
    expect(list.itemAt(0).isDone()).toBe(true);
    expect(() => list.markDoneAt(5)).toThrow(ReferenceError);
  });

  test('markUndoneAt should throw a ReferenceError if we use an invalid index number and mark a todo as not done if the index is valid', () => {
    expect(() => list.markUndoneAt(5)).toThrow(ReferenceError);
    list.markDone(0);
    list.markUndoneAt(0);
    expect(list.itemAt(0).isDone()).toBe(false);
  });

  test('markAllDone marks all the todos as done', () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  });

  test('removeAt throws a ReferenceError if the index is invalid and removes and returns an element from the list if the index is valid', () => {
    expect(() => list.removeAt(5)).toThrow(ReferenceError);
    let todo = list.removeAt(0);
    expect(todo).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----\n[ ] Buy milk\n[ ] Clean room\n[ ] Go to the gym`;
    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list. For items that are marked done, we should have an X', () => {
    let string = `---- Today's Todos ----\n[ ] Buy milk\n[X] Clean room\n[ ] Go to the gym`;
    todo2.markDone();
    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list. If all items are marked done, we should have three X', () => {
    let string = `---- Today's Todos ----\n[X] Buy milk\n[X] Clean room\n[X] Go to the gym`;
    list.markAllDone();
    expect(list.toString()).toBe(string);
  });

  test('forEach should iterate over all the elements in the list', () => {
    let newArray = [];
    list.forEach(todo => newArray.push(todo));
    expect(newArray).toEqual(list.toArray());
  });

  test('filter should return a new array for which the callback returns a truthy value', () => {
    let filteredList = list.filter(todo => todo.title === 'Buy milk');
    expect(filteredList.toArray()).toEqual([todo1]);
  });

});