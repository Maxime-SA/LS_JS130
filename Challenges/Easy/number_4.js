class Anagram {
  constructor(word) {
    this.word = word;
    this.freq = this._wordFrequency(this.word.toLowerCase());
  }

  match(wordArr) {
    let myAnagrams = [];
    let wordFreq = wordArr.map(word => this._wordFrequency(word.toLowerCase()));
    wordFreq.forEach((charFreq, index) => {
      if (this._sameNumberOfProperties(this.freq, charFreq) && this._samePropertiesAndValues(this.freq, charFreq) && this.word.toLowerCase() !== wordArr[index].toLowerCase()) {
        myAnagrams.push(wordArr[index]);
      }
    });
    return myAnagrams;
  }

  _samePropertiesAndValues(firstFreq, secondFreq) {
    let isAnagram = true;
    for (let key in firstFreq) {
      if (!(secondFreq.hasOwnProperty(key) && firstFreq[key] === secondFreq[key])) {
        isAnagram = false;
        break;
      }
    }
    return isAnagram;
  }

  _sameNumberOfProperties(firstFreq, secondFreq) {
    return Object.keys(firstFreq).length === Object.keys(secondFreq).length;
  }

  _wordFrequency(word) {
    let myFrequency = {};
    word.split('').forEach(char => {
      if (!myFrequency.hasOwnProperty(char)) {
        myFrequency[char] = 0;
      }
      myFrequency[char] += 1;
    });
    return myFrequency;
  }
}

module.exports = Anagram;