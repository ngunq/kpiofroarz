import { Component } from '@angular/core';

@Component({
  selector: 'kpi-prod-info-panel',
  styleUrls: ['./prod-info-panel.component.scss'],
  templateUrl: './prod-info-panel.component.html',
})
export class ProdInfoPanelComponent {

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
