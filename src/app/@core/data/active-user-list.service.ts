import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { PeriodsService } from './periods.service';

export class ActiveUserList {
  date: string;
  value: number;
  delta: {
    up: boolean;
    value: number;
  };
  comparison: {
    prevDate: string;
    prevValue: number;
    nextDate: string;
    nextValue: number;
  };
}

@Injectable()
export class ActiveUserListService {

  private getRandom = (roundTo: number) => Math.round(Math.random() * roundTo);
  private data = {};

  constructor(private period: PeriodsService) {
    this.data = {
      week: this.getDataWeek(),
      month: this.getDataMonth(),
      year: this.getDataYear(),
    };
  }

  private getDataWeek(): ActiveUserList[] {
    const getFirstDateInPeriod = () => {
      const weeks = this.period.getWeeks();

      return weeks[weeks.length - 1];
    };

    return this.reduceData(this.period.getWeeks(), getFirstDateInPeriod);
  }

  private getDataMonth(): ActiveUserList[] {
    const getFirstDateInPeriod = () => {
      const months = this.period.getMonths();
      const date = new Date();
      const prevYear = date.getFullYear() - 1;

      return `${months[months.length - 1]}, ${prevYear}`;
    };

    return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
  }

  private getDataYear(): ActiveUserList[] {
    const getFirstDateInPeriod = () => {
      const years = this.period.getYears();

      return `${parseInt(years[0], 10) - 1}`;
    };

    return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
  }

  private reduceData(timePeriods: string[], getFirstDateInPeriod: () => string): ActiveUserList[] {
    return timePeriods.reduce((result, timePeriod, index) => {
      const hasResult = result[index - 1];
      const prevDate = hasResult ?
        result[index - 1].comparison.nextDate :
        getFirstDateInPeriod();
      const prevValue = hasResult ?
        result[index - 1].comparison.nextValue :
        this.getRandom(100);
      const nextValue = this.getRandom(100);
      const deltaValue = prevValue - nextValue;

      const item = {
        date: timePeriod,
        value: this.getRandom(1000),
        delta: {
          up: deltaValue <= 0,
          value: Math.abs(deltaValue),
        },
        comparison: {
          prevDate,
          prevValue,
          nextDate: timePeriod,
          nextValue,
        },
      };

      return [...result, item];
    }, []);
  }

  getActiveUserListData(period: string): Observable<ActiveUserList> {
    return observableOf(this.data[period]);
  }
}
