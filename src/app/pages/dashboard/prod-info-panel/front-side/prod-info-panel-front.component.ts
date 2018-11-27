import { Component } from '@angular/core';
import { ProfitBarAnimationChartService } from '../../../../@core/data/profit-bar-animation-chart.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'kpi-prod-info-panel-front',
  styleUrls: ['./prod-info-panel-front.component.scss'],
  templateUrl: './prod-info-panel-front.component.html',
})
export class ProdInfoPanelFrontComponent {

  private alive = true;

  // linesData: { firstLine: number[]; secondLine: number[] };

  constructor(private profitBarAnimationChartService: ProfitBarAnimationChartService) {
    // this.profitBarAnimationChartService.getChartData()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((linesData) => {
    //     this.linesData = linesData;
    //   });
  }
}
