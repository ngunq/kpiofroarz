import { Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { ActiveUserList } from '../../../../@core/data/active-user-list.service';

@Component({
  selector: 'kpi-user-panel-front',
  styleUrls: ['./user-panel-front.component.scss'],
  templateUrl: './user-panel-front.component.html',
})
export class UserPanelFrontComponent implements OnDestroy {

  private alive = true;

  @Input() frontCardData: ActiveUserList;

  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  trackByDate(_, item) {
    return item.date;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
