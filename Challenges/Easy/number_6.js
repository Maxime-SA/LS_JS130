let PerfectNumber = {

  classify(number) {
    if (number <= 0) {
      throw new Error('Invalid Number');
    }

    let AliquotSum = this.findAliquotSum(number);
    
    switch (true) {
      case AliquotSum > number:
        return 'abundant';
      case AliquotSum < number:
        return 'deficient';
      default:
        return 'perfect';
    }

  },

  findAliquotSum(number) {
    let mySum = 0;
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        mySum += i;
      }
    }
    return mySum;
  }
}

module.exports = PerfectNumber;