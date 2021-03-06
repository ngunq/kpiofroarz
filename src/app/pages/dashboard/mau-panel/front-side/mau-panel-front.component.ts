import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { interval , Subscription } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';
import { EarningService, LiveUpdateChart } from '../../../../@core/data/earning.service';

@Component({
  selector: 'kpi-mau-panel-front',
  styleUrls: ['./mau-panel-front.component.scss'],
  templateUrl: './mau-panel-front.component.html',
})
export class MauPanelFrontComponent implements OnDestroy, OnInit {
  private alive = true;

  @Input() selectedCurrency: string = 'Month';

  intervalSubscription: Subscription;
  currencies: string[] = [ 'Month', 'Quarter'];
  currentTheme: string;
  earningLiveUpdateCardData: LiveUpdateChart;
  liveUpdateChartData: { value: [string, number] }[];

  constructor(private themeService: NbThemeService,
              private earningService: EarningService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  ngOnInit() {
    this.getEarningCardData(this.selectedCurrency);
  }

  changeCurrency(currency) {
    if (this.selectedCurrency !== currency) {
      this.selectedCurrency = currency;

      this.getEarningCardData(this.selectedCurrency);
    }
  }

  private getEarningCardData(currency) {
    this.earningService.getEarningLiveUpdateCardData(currency)
      .pipe(takeWhile(() => this.alive))
      .subscribe((earningLiveUpdateCardData) => {
        this.earningLiveUpdateCardData = earningLiveUpdateCardData;
        this.liveUpdateChartData = earningLiveUpdateCardData.liveChart;

        this.startReceivingLiveData(currency);
      });
  }

  startReceivingLiveData(currency) {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }

    this.intervalSubscription = interval(200)
      .pipe(
        takeWhile(() => this.alive),
        switchMap(() => this.earningService.generateRandomEarningData(currency)),
      )
      .subscribe((liveUpdateChartData) => {
        this.liveUpdateChartData = [...liveUpdateChartData];
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
