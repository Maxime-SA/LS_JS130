class Series {
  constructor(digitString) {
    this.digitString = digitString;
  }

  slices(requiredLength) {
    if (requiredLength > this.digitString.length) {
      throw new Error('The length provided is greater than the number of digits');
    }
    return this.createSubArrays(requiredLength);
  }

  createSubArrays(requiredLength) {
    let mySubArrays = [];
    let myDigits = this.digitString.split('').map(char => Number(char));

    for (let index = 0; index <= myDigits.length - requiredLength; index++) {
      mySubArrays.push(myDigits.slice(index, index + requiredLength));
    }

    return mySubArrays;
  }
}

module.exports = Series;