let Diamond = {
  
  alphabet: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  
  makeDiamond(letter) {
    if (letter === 'A') return 'A\n';
    if (letter === 'B') return ' A \nB B\n A \n';

    let indexOfTargetLetter = this.alphabet.indexOf(letter);
    let rowLength = (2 * indexOfTargetLetter) + 1;
    let myDiamond = [];

    for (let index = 0; index <= indexOfTargetLetter; index++) {
      let currentRow = new Array(rowLength).fill(' ');
      let currentLetter = this.alphabet[indexOfTargetLetter - index];
      let firstPoint = index;
      let secondPoint = rowLength - index - 1;

      currentRow[firstPoint] = currentLetter;
      currentRow[secondPoint] = currentLetter;

      myDiamond.push(currentRow.join(''));
    }

    return myDiamond.reverse().concat(myDiamond.slice(0,-1).reverse()).join('\n') + '\n';
  },
  
};

module.exports = Diamond;