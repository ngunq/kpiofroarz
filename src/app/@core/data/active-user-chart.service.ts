import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { PeriodsService } from './periods.service';

export class ActiveUserChart {
  data: number[];
  labels: string[];
  formatter: string;
}

@Injectable()
export class ActiveUserChartService {

  private data = { };

  constructor(private period: PeriodsService) {
    this.data = {
      week: this.getDataForWeekPeriod(),
      month: this.getDataForMonthPeriod(),
      year: this.getDataForYearPeriod(),
    };
  }

  getDataForWeekPeriod(): ActiveUserChart {
    return {
      data: [10, 15, 19, 7, 20, 13, 15],
      labels: this.period.getWeeks(),
      formatter: '{c0} MB',
    };
  }

  getDataForMonthPeriod(): ActiveUserChart {
    return {
      data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
      labels: this.period.getMonths(),
      formatter: '{c0} GB',
    };
  }

  getDataForYearPeriod(): ActiveUserChart {
    return {
      data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
      labels: this.period.getYears(),
      formatter: '{c0} GB',
    };
  }

  getActiveUserChartData(period: string): Observable<ActiveUserChart> {
    return observableOf(this.data[period]);
  }
}
