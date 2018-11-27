import { Component, OnDestroy, ViewChild } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { RevenueChartComponent } from './charts/revenue-chart.component';
import { RevenuePanelHeaderComponent } from './header/revenue-panel-header.component';
// import { ProfitChartComponent } from './charts/profit-chart.component';
import { RevenueChart } from '../../../@core/data/revenue-chart.service';
// import { ProfitChart } from '../../../@core/data/profit-chart.service';
// import { OrdersProfitChartService, OrderProfitChartSummary } from '../../../@core/data/orders-profit-chart.service';

import { RevenueService, RevenueSummarySchema } from '../../../@core/data/revenue.service';

@Component({
  selector: 'kpi-revenue-panel',
  styleUrls: ['./revenue-panel.component.scss'],
  templateUrl: './revenue-panel.component.html',
})
export class RevenuePanelComponent implements OnDestroy {

  private alive = true;

  chartPanelSummary: RevenueSummarySchema[];
  period: string = 'week';
  metrics: string[] = ["rev"];
  revenueChartData: RevenueChart;
  // profitChartData: ProfitChart;

  @ViewChild('revenueChart') revenueChart: RevenueChartComponent;
  @ViewChild('revenueHeader') revenueHeader: RevenuePanelHeaderComponent;
  // @ViewChild('profitChart') profitChart: ProfitChartComponent;

  constructor(private revenueService: RevenueService) {
    this.revenueService.getRevenueSummary()
      .pipe(takeWhile(() => this.alive))
      .subscribe((summary) => {
        this.chartPanelSummary = summary;
      });

    this.getRevenueChartData(this.period);
    // this.getProfitChartData(this.period);
  }

  setPeriodAndGetChartData(value: string): void {
    if (this.period !== value) {
      this.period = value;
    }

    this.getRevenueChartData(value);
    // this.getProfitChartData(value);
  }

  setMetricAndGetChartData(value: string[]): void {
    console.log(value);
    if (this.metrics.toString() !== value.toString()) {
      this.metrics = value;
    }
    console.log(this.metrics);

    // this.getRevenueChartData(value);
    // this.getProfitChartData(value);
  }

  changeTab(selectedTab) {
    if (selectedTab.tabTitle === 'Detail') {
      // this.revenueHeader.legendVisible = false;
      // this.profitChart.resizeChart();
    } else {
      // this.revenueHeader.legendVisible = true;
      this.revenueChart.resizeChart();
    }
  }

  getRevenueChartData(period: string) {
    this.revenueService.getRevenueChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(revenueChartData => {
        this.revenueChartData = revenueChartData;
      });
  }

  // getProfitChartData(period: string) {
  //   this.ordersProfitChartService.getProfitChartData(period)
  //     .pipe(takeWhile(() => this.alive))
  //     .subscribe(profitChartData => {
  //       // this.profitChartData = profitChartData;
  //     });
  // }

  test(value: string){
    console.log(value + " asdfhkdjashfdkjashfk");
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
