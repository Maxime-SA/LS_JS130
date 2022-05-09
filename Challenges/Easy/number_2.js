class DNA {
  constructor(string) {
    this.string = string;
  }

  hammingDistance(otherString) {
    let myStrings = [this.string, otherString].sort((a,b) => a.length - b.length);
    let result = 0;
    myStrings[0].split('').forEach((char, index) => {
      if (char !== myStrings[1][index]) {
        result += 1;
      }
    });
    return result;
  }
}

module.exports = DNA;