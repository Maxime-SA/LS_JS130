class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  static ROMAN_CONVERSION = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  toRoman() {
    let currentNumber = this.number;
    let romanNumber = '';
    Object.keys(RomanNumeral.ROMAN_CONVERSION).forEach(symbol => {
      ([currentNumber, romanNumber] = this.add(currentNumber, symbol, romanNumber));
    });
    return romanNumber;
  }

  add(number, symbol, romanNumber) {
    let romanValue = RomanNumeral.ROMAN_CONVERSION[symbol];
    while (romanValue <= number) {
      romanNumber += symbol;
      number -= romanValue;
    }
    return [number, romanNumber];
  }

}

module.exports = RomanNumeral;