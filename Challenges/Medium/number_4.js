"use strict";

const DayOfWeek = {
  sunday:    0,
  monday:    1,
  tuesday:   2,
  wednesday: 3,
  thursday:  4,
  friday:    5,
  saturday:  6,
};
Object.freeze(DayOfWeek);

const ScheduleStartDay = {
  first:  1,
  second: 8,
  third:  15,
  fourth: 22,
  fifth:  29,
  teenth: 13,
  last:   undefined, // see _firstDayToSearch
};
Object.freeze(ScheduleStartDay);

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.daysInMonth = new Date(this.year, this.month, 0).getMonth();
  }

  day(weekday, schedule) {
    weekday = weekday.toLowerCase();
    schedule = schedule.toLowerCase();

    let firstPossibleDay = this._firstDayToSearch(schedule);
    let lastPossibleDay = Math.min(firstPossibleDay + 6, this.daysInMonth);
    let dayOfWeek = DayOfWeek[weekday];

    for (let day = firstPossibleDay; day <= lastPossibleDay; day += 1) {
      let date = new Date(this.year, this.month - 1, day);
      if (date.getDay() === dayOfWeek) {
        return date;
      }
    }

    return null;
  }

  _firstDayToSearch(schedule) {
    return ScheduleStartDay[schedule] || (this.daysInMonth - 6);
  }
}

module.exports = Meetup;