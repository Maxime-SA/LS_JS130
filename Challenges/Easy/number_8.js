class SumOfMultiples {
  constructor(...args) {
    this.setOfNumbers = args.length === 0 ? [3, 5] : args.sort((a,b) => a - b);
  }

  static to(upperLimit) {
    return new SumOfMultiples().to(upperLimit);
  }

  to(upperLimit) {
    if (upperLimit === 1) return 0;
    return this.findAllMultiples(upperLimit).reduce((prev, curr) => prev + curr, 0);
  }

  findAllMultiples(upperLimit) {
    let myMultiples = [];
    let counter = 1;
    
    while (true) {
      let aboveLimit = new Array(this.setOfNumbers.length).fill(false);
      
      for (let i = 0; i < this.setOfNumbers.length; i++) {
        let initialNumber = this.setOfNumbers[i];
        let currentMultiple = initialNumber * counter;

        if (!myMultiples.includes(currentMultiple) && currentMultiple < upperLimit) {
          myMultiples.push(currentMultiple);
          aboveLimit[i] = false;
        } else if (currentMultiple >= upperLimit) {
          aboveLimit[i] = true;
        }
      }
  
      if (aboveLimit.every(ele => ele === true)) break;
      counter += 1;
    }
    
    return myMultiples;
  }

}

module.exports = SumOfMultiples;