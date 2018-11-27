import { Component, Input } from '@angular/core';

@Component({
  selector: 'kpi-user-bar',
  styleUrls: ['./user-bar.component.scss'],
  templateUrl: './user-bar.component.html',
})
export class UserBarComponent {

  @Input() barData: { prevDate: string; prevValue: number; nextDate: string; nextValue: number };
  @Input() successDelta: boolean;
}
