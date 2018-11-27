import { Component, OnDestroy } from '@angular/core';
// import { TrafficList, TrafficListService } from '../../../@core/data/traffic-list.service';
import { takeWhile } from 'rxjs/operators';
// import { TrafficBar, TrafficBarService } from '../../../@core/data/traffic-bar.service';
import { ActiveUserList, ActiveUserListService } from '../../../@core/data/active-user-list.service';
import { ActiveUserChart, ActiveUserChartService } from '../../../@core/data/active-user-chart.service';

@Component({
  selector: 'kpi-user-panel',
  styleUrls: ['./user-panel.component.scss'],
  templateUrl: './user-panel.component.html',
})
export class UserPanelComponent implements OnDestroy {

  private alive = true;

  activeUserChartData: ActiveUserChart;
  activeUserListData: ActiveUserList;
  revealed = false;
  period: string = 'week';

  constructor(private activeUserListService: ActiveUserListService,
              private activeUserChartService: ActiveUserChartService) {
    this.getActiveUserListData(this.period);
    this.getActiveUserChartData(this.period);
  }

  toggleView() {
    this.revealed = !this.revealed;
  }

  setPeriod(value: string): void {
    this.getActiveUserListData(value);
    this.getActiveUserChartData(value);
  }

  getActiveUserChartData(period: string) {
    this.activeUserChartService.getActiveUserChartData(period)
      .pipe(takeWhile(() => this.alive ))
      .subscribe(activeUserChartData => {
        this.activeUserChartData = activeUserChartData;
      });
  }

  getActiveUserListData(period: string) {
    this.activeUserListService.getActiveUserListData(period)
      .pipe(takeWhile(() => this.alive ))
      .subscribe(activeUserListData => {
        this.activeUserListData = activeUserListData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
