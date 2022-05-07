function newStack() {
  let myStack = [];

  return {
    printStack() {
      if (myStack.length === 0) {
        console.log('The stack is empty.');
      } else {
        for (let index = myStack.length - 1; index >= 0; index--) {
          console.log(myStack[index]);
        }
      }
    },

    push(element) {
      myStack.push(element);
    },

    pop(element) {
      return myStack.pop(element);
    }
  };
}
