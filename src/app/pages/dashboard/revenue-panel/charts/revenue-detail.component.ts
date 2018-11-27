import { Component } from '@angular/core';

@Component({
    selector: 'kpi-prod-info-panel-back',
    styleUrls: ['./charts-common.component.scss'],
    template: `
        <nb-card-body>
        <ul class="traffic-list">
            <li *ngFor="let item of frontCardData; trackBy: trackByDate">
            <div class="date">{{ item.date }}</div>
            <div class="value">{{ item.value }}</div>
            <div class="delta"
                [class.up]="item.delta.up"
                [class.down]="!item.delta.up">
                {{ item.delta.value }}%
            </div>
            <kpi-user-bar [barData]="item.comparison"
                            [successDelta]="item.delta.up">
            </kpi-user-bar>
            </li>
        </ul>
        </nb-card-body>
  `,
})
export class RevenueDetailComponent {
    details = [
        { key: "Name", value: "Vo Lam Truyen Ky Mobile" },
        { key: "Release date", value: "2016/09/29" },
        { key: "Category", value: "RPG" },
        // { key: "Contact point", value: "AnTT4" }
    ]
}
