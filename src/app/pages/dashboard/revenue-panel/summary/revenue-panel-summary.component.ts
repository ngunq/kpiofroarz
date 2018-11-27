import { Component, Input } from '@angular/core';
import {  RevenueSummarySchema } from '../../../../@core/data/revenue.service';

@Component({
  selector: 'kpi-revenue-panel-summary',
  styleUrls: ['./revenue-panel-summary.component.scss'],
  template: `
    <div class="summary-container">
      <div class="summory text-center" *ngFor="let item of summary">
        <div class="title">{{ item.title }}</div>
        <div class="value">
          <i *ngIf="item.delta" [class.up]="item.value >= 0"  [class.down]="item.value < 0" [class.nb-arrow-dropup]="item.value >= 0"  [class.nb-arrow-dropdown]="item.value < 0"></i>
            {{ item.value | abs | ngxNumberWithCommas }}
          <span *ngIf="item.delta">%</span>
        </div>
      </div>
    </div>
  `,
})
export class RevenuePanelSummaryComponent {
  // @Input() summary: {title: string, value: number, delta: boolean}[];
  @Input() summary: RevenueSummarySchema[];

  // summary = [
  //   {
  //     title: 'Gross Revenue',
  //     value: 3654,
  //     delta : false
  //   },
  //   {
  //     title: 'Last Week',
  //     value: -9.5,
  //     delta : true
  //   },
  //   {
  //     title: 'Paying User',
  //     value: 654,
  //     delta : false
  //   },
  //   {
  //     title: 'Last Week',
  //     value: 13.8,
  //     delta : true
  //   },
  // ];
}

