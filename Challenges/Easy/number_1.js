let Triangle = (function() {

  function validTriangle(...sides) {
    return sides.every(side => side > 0) && sumOfTwoSides(sides);
  }

  function sumOfTwoSides(sides) {
    let isValid = true;
    for (let index = 0; index <= sides.length; index++) {
      let side = sides[index];
      let otherSides = sides.slice();
      otherSides.splice(index,1);
      if (side >= otherSides.reduce((prev, curr) => prev + curr)) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }

  function kind() {
    if (this.firstSide === this.secondSide && this.firstSide === this.thirdSide) return 'equilateral';
    if (this.firstSide !== this.secondSide && this.firstSide !== this.thirdSide && this.secondSide !== this.thirdSide) return 'scalene';
    return 'isosceles';
  }

  return function(firstSide, secondSide, thirdSide) {
    if (!validTriangle(firstSide, secondSide, thirdSide)) {
      throw new Error('Invalid Triangle');
    }
    
    this.firstSide = firstSide;
    this.secondSide = secondSide;
    this.thirdSide = thirdSide;
    this.kind = kind;

  };

})();

module.exports = Triangle;