import { Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'kpi-user-panel-back',
  styleUrls: ['./user-panel-back.component.scss'],
  templateUrl: './user-panel-back.component.html',
})
export class UserPanelBackComponent implements OnDestroy {

  private alive = true;
  
  @Input() activeUserChartData: any;

  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
