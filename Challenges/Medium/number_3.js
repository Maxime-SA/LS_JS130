class Clock {

  static ONE_DAY = 24 * 60;

  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute;
  }

  static at(hour, minute = 0) {
    return new Clock(hour, minute);
  }

  add(minutes) {
    let minutesSinceMidnight = this._computeMinutesSinceMidnight() + minutes;
    
    while (minutesSinceMidnight >= Clock.ONE_DAY) {
      minutesSinceMidnight -= Clock.ONE_DAY;
    }

    return this._computeTimeFrom(minutesSinceMidnight);
  }

  subtract(minutes) {
    let minutesSinceMidnight = this._computeMinutesSinceMidnight() - minutes;
    
    while (minutesSinceMidnight < 0) {
      minutesSinceMidnight += Clock.ONE_DAY;
    }

    return this._computeTimeFrom(minutesSinceMidnight);
  }

  isEqual(otherTime) {
    return this.hour === otherTime.hour && this.minute === otherTime.minute;
  }

  toString() {
    let hour = this.hour < 10 ? `0${this.hour}` : `${this.hour}`;
    let minute = this.minute < 10 ? `0${this.minute}` : `${this.minute}`;
    return `${hour}:${minute}`;
  }

  _computeMinutesSinceMidnight() {
    let totalMinutes = 60 * this.hour + this.minute;
    return totalMinutes % Clock.ONE_DAY;
  }

  _computeTimeFrom(minutesSinceMidnight) {
    let hours = Math.floor(minutesSinceMidnight / 60);
    let minutes = minutesSinceMidnight % 60;
    return new Clock(hours, minutes);
  }

}

module.exports = Clock;