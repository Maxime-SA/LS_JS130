class CustomSet {
  constructor(set = []) {
    this.elements = set;
  }
  
  myElements() {
    return this.elements;
  }

  size() {
    return this.myElements().length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  contains(valueToCompare) {
    return this.myElements().some(element => element === valueToCompare);
  }

  isSubset(superSet) {
    let superSetValues = superSet.myElements();
    return this.myElements().every(element => superSetValues.includes(element));
  }

  isDisjoint(otherSet) {
    let otherSetValues = otherSet.myElements();
    return !this.myElements().some(element => otherSetValues.includes(element));
  }
  
  isSame(otherSet) {
    let otherSetValues = otherSet.myElements();
    let firstCheck = this.myElements().every(element => otherSetValues.includes(element));
    let secondCheck = otherSetValues.every(element => this.myElements().includes(element));
    return firstCheck && secondCheck;
  }
  
  add(element) {
    if (!this.myElements().includes(element)) {
      this.myElements().push(element);
    }
    return this;
  }
  
  intersection(otherSet) {
    let newSet = new CustomSet();
    let otherSetValues = otherSet.myElements();
    this.myElements().forEach(element => {
      if (otherSetValues.includes(element)) {
        newSet.add(element);
      }
    });
    return newSet;
  }

  difference(otherSet) {
    let newSet = new CustomSet();
    let otherSetValues = otherSet.myElements();
    this.myElements().forEach(element => {
      if (!otherSetValues.includes(element)) {
        newSet.add(element);
      }
    });
    return newSet;
  }

  union(otherSet) {
    let newSet = new CustomSet();
    let otherSetValues = otherSet.myElements();
    this.myElements().forEach(element => {
      if (!newSet.myElements().includes(element)) {
        newSet.add(element);
      }
    });
    otherSetValues.forEach(element => {
      if (!newSet.myElements().includes(element)) {
        newSet.add(element);
      }
    });
    return newSet;
  }
}

module.exports = CustomSet;