import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ProfitChartService } from './profit-chart.service';
// import { TrafficBarService } from './traffic-bar.service';
// import { TrafficListService } from './traffic-list.service';
import { EarningService } from './earning.service';
import { ProfitBarAnimationChartService } from './profit-bar-animation-chart.service';

import { PeriodsService } from './periods.service';
import { LayoutService } from './layout.service';
import { RevenueService } from './revenue.service';
import { RevenueChartService } from './revenue-chart.service';
import { ActiveUserListService } from './active-user-list.service';
import { ActiveUserChartService } from './active-user-chart.service';


const SERVICES = [
    // ProfitChartService,
    // TrafficBarService,
    // TrafficListService,
    EarningService,
    ProfitBarAnimationChartService,

    PeriodsService,
    LayoutService,
    RevenueService,
    RevenueChartService,
    ActiveUserListService,
    ActiveUserChartService
  ];

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        ...SERVICES,
    ],
})
export class DataModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
          ngModule: DataModule,
          providers: [
            ...SERVICES,
          ],
        };
      }
}