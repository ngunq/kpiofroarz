import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RevenueChart, RevenueChartService } from './revenue-chart.service';
// import { ProfitChart, ProfitChartService } from './profit-chart.service';

export class RevenueSummarySchema {
  title: string;
  value: number;
  delta: boolean;
}

@Injectable()
export class RevenueService {

  private summary = [
    {
      title: 'Gross Revenue',
      value: 3659,
      delta : false
    },
    {
      title: 'Last Week',
      value: -9.5,
      delta : true
    },
    {
      title: 'Paying User',
      value: 654,
      delta : false
    },
    {
      title: 'Last Week',
      value: 13.8,
      delta : true
    },
  ];

  constructor(
      private revenueChartService: RevenueChartService,
    //           private profitChartService: ProfitChartService
              ) {
  }

  getRevenueSummary(): Observable<RevenueSummarySchema[]> {
    return observableOf(this.summary);
  }

  getRevenueChartData(period: string): Observable<RevenueChart> {
    return observableOf(this.revenueChartService.getRevenueChartData(period));
  }

//   getProfitChartData(period: string): Observable<ProfitChart> {
//     return observableOf(this.profitChartService.getProfitChartData(period));
//   }
}
