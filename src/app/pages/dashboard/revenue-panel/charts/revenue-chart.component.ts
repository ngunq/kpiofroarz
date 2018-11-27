import { AfterViewInit, Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { delay, takeWhile } from 'rxjs/operators';

import { RevenueChart } from '../../../../@core/data/revenue-chart.service';
import { LayoutService } from '../../../../@core/data/layout.service';
import * as echarts from 'echarts';

@Component({
  selector: 'kpi-revenue-chart',
  styleUrls: ['./charts-common.component.scss'],
  template: `
    <div echarts
         [options]="option"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
})
export class RevenueChartComponent implements AfterViewInit, OnDestroy, OnChanges {

  @Input()
  revenueChartData: RevenueChart;
  @Input()
  metrics: string[];

  eTheme: any = {};
  private alive = true;

  echartsIntance: any;
  option: any;

  ngOnChanges(): void {
    console.log("onchange");
    if (this.option) {
      this.updateRevenueChartOptions(this.revenueChartData);
    }
  }

  constructor(private theme: NbThemeService,
    private layoutService: LayoutService) {
    this.layoutService.onChangeLayoutSize()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe(() => this.resizeChart());
  }

  ngAfterViewInit(): void {
    console.log("afterinit");

    this.theme.getJsTheme()
      .pipe(
        takeWhile(() => this.alive),
        delay(1),
      )
      .subscribe(config => {
        const eTheme: any = config.variables.revenue;
        this.eTheme = eTheme;
        this.setOptions(eTheme);
        this.updateRevenueChartOptions(this.revenueChartData);
      });
  }

  setOptions(eTheme) {
    this.option = {
      grid: {
        left: 40,
        top: 20,
        right: 40,
        bottom: 40,
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: eTheme.tooltipLineColor,
            width: eTheme.tooltipLineWidth,
          },
        },
        textStyle: {
          color: eTheme.tooltipTextColor,
          fontSize: eTheme.tooltipFontSize,
          fontWeight: eTheme.tooltipFontWeight,
        },
        position: 'top',
        backgroundColor: eTheme.tooltipBg,
        borderColor: eTheme.tooltipBorderColor,
        borderWidth: 3,
        formatter: (params) => {
          return Math.round(parseInt(params.value, 10));
        },
        extraCssText: eTheme.tooltipExtraCss,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        offset: 5,
        data: [],
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: eTheme.axisTextColor,
          fontSize: eTheme.axisFontSize,
        },
        axisLine: {
          lineStyle: {
            color: eTheme.axisLineColor,
            width: '2',
          },
        },
      },
      yAxis: [{
        type: 'value',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: eTheme.axisLineColor,
            width: '1',
          },
        },
        axisLabel: {
          color: eTheme.axisTextColor,
          fontSize: eTheme.axisFontSize,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: eTheme.yAxisSplitLine,
            width: '1',
          },
        },
      }, {
        type: 'value',
        boundaryGap: false,
        position: 'right',
        axisLine: {
          lineStyle: {
            color: eTheme.axisLineColor,
            width: '1',
          },
        },
        axisLabel: {
          color: eTheme.axisTextColor,
          fontSize: eTheme.axisFontSize,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: eTheme.yAxisSplitLine,
            width: '1',
          },
        },
      }],
      series:[] 
      // this.getSeries(this.metrics, eTheme)
      // [
      //   // this.getFirstLine(eTheme),
      //   this.getSecondLine(eTheme),
      //   this.getThirdLine(eTheme),
      // ],
    };
  }

  

  getFirstLine(eTheme) {
    return {
      type: 'line',
      smooth: true,
      symbolSize: 20,
      itemStyle: {
        normal: {
          opacity: 0,
        },
        emphasis: {
          opacity: 0,
        },
      },
      lineStyle: {
        normal: {
          width: 0,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.firstAreaGradFrom,
          }, {
            offset: 1,
            color: eTheme.firstAreaGradTo,
          }]),
          opacity: 1,
        },
      },
      data: [],
    };
  }

  getSecondLine(eTheme) {
    return {
      name: 'Payment',
      type: 'bar',
      yAxisIndex: 0,
      barWidth: '70%',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.secondLineGradFrom,
          }, {
            offset: 1,
            color: eTheme.secondLineGradTo,
          }]),
        },
      },
      data: [],
    };
  }

  getThirdLine(eTheme) {
    return {
      type: 'line',
      yAxisIndex: 1,
      smooth: true,
      symbolSize: 20,
      itemStyle: {
        normal: {
          opacity: 0,
        },
        emphasis: {
          color: '#ffffff',
          borderColor: eTheme.itemBorderColor,
          borderWidth: 2,
          opacity: 1,
        },
      },
      lineStyle: {
        normal: {
          width: eTheme.lineWidth,
          type: eTheme.lineStyle,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.thirdLineGradFrom,
          }, {
            offset: 1,
            color: eTheme.thirdLineGradTo,
          }]),
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.thirdAreaGradFrom,
          }, {
            offset: 1,
            color: eTheme.thirdAreaGradTo,
          }]),
        },
      },
      data: [],
    };
  }

  updateRevenueChartOptions(revenueChartData: RevenueChart) {
    const options = this.option;
    const s = this.getSeries(this.metrics, this.eTheme);
    const series = this.getSeriesData(s, revenueChartData.linesData);
    const xAxis = this.getNewXAxis(options.xAxis, revenueChartData.chartLabel);

    this.option = {
      ...options,
      xAxis,
      series,
    };
  }

  getSeries(metrics: string[], eTheme: any) {
    const series = [];
    metrics.map((metric, index) => {
      switch (metric) {
        case "rev":
          series.push(this.getSecondLine(eTheme));
          break;
        case "pu":
          series.push(this.getThirdLine(eTheme));
          break;
      }
    });
    return series;
  }

  getSeriesData(series, linesData: number[][]) {
    return series.map((line, index) => {
      return {
        ...line,
        data: linesData[index],
      };
    });
  }

  getNewXAxis(xAxis, chartLabel: string[]) {
    return {
      ...xAxis,
      data: chartLabel,
    };
  }

  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }

  resizeChart() {
    if (this.echartsIntance) {
      // Fix recalculation chart size
      // TODO: investigate more deeply
      setTimeout(() => {
        this.echartsIntance.resize();
      }, 0);
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
