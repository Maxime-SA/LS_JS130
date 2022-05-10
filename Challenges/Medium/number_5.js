class SimpleLinkedList {
  constructor() {
    this.elements = [];
  }

  static fromArray(array) {
    let newList = new SimpleLinkedList();
    if (Array.isArray(array)) {
      for (let i = array.length - 1; i >= 0; i--) {
        newList.push(array[i]);
      }
    }
    return newList;
  }

  toArray() {
    return this.listElements().map(element => element.datum());
  }
  
  listElements() {
    return this.elements;
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse())
  }

  push(data) {
    let priorElement = this.isEmpty() ? null : this.head();
    let newElement = new Element(data, priorElement);
    this.listElements().unshift(newElement);
  }

  size() {
    return this.listElements().length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.head().datum();
    }
  }

  head() {
    return this.listElements()[0];
  }

  pop() {
    return this.listElements().shift().datum();
  }

}

class Element {
  constructor(data, next = null) {
    this.data = data;
    this.nextElement = next;
  }

  datum() {
    return this.data;
  }

  next() {
    return this.nextElement;
  }

  isTail() {
    return this.nextElement === null;
  }
}

module.exports = { Element, SimpleLinkedList };