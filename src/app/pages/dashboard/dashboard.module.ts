import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from '../../@theme/theme.module';

import { DashboardComponent } from "./dashboard.component";
import { FiltersComponent } from './filters/filters.component';
import { DeptFilterComponent } from './filters/dept-filter/dept-filter.component';

import { RevenuePanelComponent } from "./revenue-panel/revenue-panel.component";
import { RevenueChartComponent } from './revenue-panel/charts/revenue-chart.component';

import { RevenuePanelHeaderComponent } from './revenue-panel/header/revenue-panel-header.component';
import { RevenuePanelSummaryComponent } from './revenue-panel/summary/revenue-panel-summary.component';
import { LegendChartComponent } from './legend-chart/legend-chart.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserBarComponent } from './user-panel/front-side/user-bar/user-bar.component';
import { UserPanelFrontComponent } from './user-panel/front-side/user-panel-front.component';
import { UserPanelHeaderComponent } from './user-panel/header/user-panel-header.component';
import { UserPanelBackComponent } from './user-panel/back-side/user-panel-back.component';
import { UserBarChartComponent } from './user-panel/back-side/user-bar-chart.component';
import { MauPanelComponent } from './mau-panel/mau-panel.component';
import { MauPanelBackComponent } from './mau-panel/back-side/mau-panel-back.component';
import { MauPanelPieChartComponent } from './mau-panel/back-side/mau-panel-pie-chart.component';
import { MauPanelFrontComponent } from './mau-panel/front-side/mau-panel-front.component';
import { MauPanelLiveUpdateChartComponent } from './mau-panel/front-side/mau-panel-live-update-chart.component';
import { ProdInfoPanelComponent } from './prod-info-panel/prod-info-panel.component';
import { ProdInfoBackComponent } from './prod-info-panel/back-side/prod-info-panel-back.component';
import { ProdInfoPanelAreaChartComponent } from './prod-info-panel/back-side/prod-info-panel-area-chart.component';
import { ProdInfoPanelImageComponent } from './prod-info-panel/front-side/prod-info-panel-image.component';
// import { ProdInfoPanelBarAnimationChartComponent } from './prod-info-panel/front-side/prod-info-panel-bar-animation-chart.component';
import { ProdInfoPanelFrontComponent } from './prod-info-panel/front-side/prod-info-panel-front.component';


@NgModule({
    imports: [
      ThemeModule,
      NgxEchartsModule,
      NgbModule.forRoot()
      // DashboardModule,
      // ECommerceModule,
      // MiscellaneousModule,
    ],
    declarations: [
      DashboardComponent,
      FiltersComponent,
      DeptFilterComponent,
      RevenuePanelComponent,
      RevenueChartComponent,
      // ProfitChartComponent,
      RevenuePanelHeaderComponent,
      RevenuePanelSummaryComponent,
      LegendChartComponent,
      UserPanelComponent,
      UserBarComponent,
      UserPanelFrontComponent,
      UserPanelHeaderComponent,
      UserPanelBackComponent,
      UserBarChartComponent,
      MauPanelComponent,
      MauPanelBackComponent,
      MauPanelPieChartComponent,
      MauPanelFrontComponent,
      MauPanelLiveUpdateChartComponent,
      ProdInfoPanelComponent,
      ProdInfoBackComponent,
      ProdInfoPanelAreaChartComponent,
      ProdInfoPanelImageComponent,
      ProdInfoPanelFrontComponent
    ],
  })
  export class DashboardModule {
  }