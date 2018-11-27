import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';


@Component({
  selector: 'kpi-revenue-panel-header',
  styleUrls: ['./revenue-panel-header.component.scss'],
  templateUrl: './revenue-panel-header.component.html',
})
export class RevenuePanelHeaderComponent implements OnDestroy {

  private alive = true;
  metric: string[] = ["rev"];
  metrics: string[] = ["rev", "pu"];
  metricsName: any = {
    rev: "Revenue",
    pu: "Paying user"
  };

  @Output() periodChange = new EventEmitter<string>();
  @Output() metricChange = new EventEmitter<string[]>();

  // legendVisible = false;
  revenueChartLegend: any = {};
  type: string = 'week';
  types: string[] = ['week', 'month', 'year'];
  chartLegend: any[];
  breakpoint: NbMediaBreakpoint = { name: '', width: 0 };
  breakpoints: any;
  currentTheme: string;

  constructor(private themeService: NbThemeService,
    private breakpointService: NbMediaBreakpointsService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        const revenueChartLegend = theme.variables.revenueChartLegend;
        this.revenueChartLegend = revenueChartLegend;
        this.currentTheme = theme.name;
        this.setLegendItems(revenueChartLegend);
      });

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  setLegendItems(revenueChartLegend) {
    this.chartLegend = this.metric.map(e => {
      return {
        iconColor: revenueChartLegend[e],
        title: this.metricsName[e],
      };
    });
    // this.chartLegend = [
    //   {
    //     iconColor: revenueChartLegend.firstItem,
    //     title: 'Revenue',
    //   },
    //   {
    //     iconColor: revenueChartLegend.secondItem,
    //     title: 'Paying user',
    //   },
    // ];
  }

  // changePeriod(period: string): void {
  //   this.type = period;
  //   this.periodChange.emit(period);
  // }

  changePeriod() {
    // this.type = period;
    this.periodChange.emit(this.type);
  }

  changeMetric() {
    this.setLegendItems(this.revenueChartLegend);
    this.metricChange.emit(this.metric);
  }
  ngOnDestroy() {
    this.alive = false;
  }
}
