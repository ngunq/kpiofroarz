import { Component, ViewChild } from '@angular/core';
import { RevenuePanelComponent } from "./revenue-panel/revenue-panel.component";

@Component({
  selector: 'kpi-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  @ViewChild("revenuePanel") revenuePanel: RevenuePanelComponent ;

  ngunq(value: string) {
    this.revenuePanel.test(value);
  }
}