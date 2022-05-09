let BeerSong = {
  
  genericVerse(numberOfBottles) {
    let oneOrMoreBottles = numberOfBottles === 1 ? 'bottle' : 'bottles';
    let itOrOne = numberOfBottles === 1 ? 'it' : 'one';
    let howManyLeft = numberOfBottles === 1 ? 'no more bottles' : `${numberOfBottles - 1} ${numberOfBottles - 1 === 1 ? 'bottle' : 'bottles'}`;

    return `${numberOfBottles} ${oneOrMoreBottles} of beer on the wall, ${numberOfBottles} ${oneOrMoreBottles} of beer.\n` +
           `Take ${itOrOne} down and pass it around, ${howManyLeft} of beer on the wall.\n`
  },

  lastVerse() {
    return 'No more bottles of beer on the wall, no more bottles of beer.\n' +
    'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
  },
  
  verse(number) {
    switch (true) {
      case number === 0:
        return this.lastVerse();
      default:
        return this.genericVerse(number);
    }
  },

  verses(start, end) {
    let output = [];
    for (let index = start; index >= end; index--) {
      output.push(this.verse(index));
    }
    return output.join('\n');
  },

  lyrics() {
    return this.verses(99,0);
  }

}

module.exports = BeerSong;