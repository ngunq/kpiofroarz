import { Component } from '@angular/core';

@Component({
  selector: 'kpi-mau-panel',
  styleUrls: ['./mau-panel.component.scss'],
  templateUrl: './mau-panel.component.html',
})
export class MauPanelComponent {

  flipped = false;

  toggleFlipView() {
    this.flipped = !this.flipped;
  }
}
