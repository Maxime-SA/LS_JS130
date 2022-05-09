class Robot {
  constructor() {
    this.identifier = this.name();
  }

  static allRobots = [];
  static nameLength = 5;
  static allowedLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  static allowedDigits = '0123456789';

  name() {
    if (this.identifier) return this.identifier;
    
    while (Robot.allRobots.includes(this.identifier) || !this.identifier) {
      let robotName = '';
      for (let index = 0; index < Robot.nameLength; index++) {
        if (index <= 1) {
          let randomNumber = Math.floor(Math.random() * Robot.allowedLetters.length);
          robotName += Robot.allowedLetters[randomNumber];
        } else {
          let randomNumber = Math.floor(Math.random() * Robot.allowedDigits.length);
          robotName += Robot.allowedDigits[randomNumber];
        }
      }
      this.identifier = robotName;
  }
  Robot.allRobots.push(this.identifier);
  return this.identifier;
  }

  reset() {
    let nameIdx = Robot.allRobots.indexOf(this.identifier);
    Robot.allRobots.splice(nameIdx, 1);
    this.identifier = null;
  }
}

module.exports = Robot;