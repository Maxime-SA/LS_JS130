class Octal {
  constructor(octal) {
    this.octal = octal;
  }

  toDecimal() {
    let myOctal = this.octal.split('').reverse();
    if (myOctal.every(char => /[0-7]/.test(char))) {
      
      let myResult = 0;
      for (let i = 0; i < myOctal.length; i++) {
        myResult += myOctal[i] * (8 ** i);
      }
      return myResult;

    } else return 0;
  }
}

module.exports = Octal;