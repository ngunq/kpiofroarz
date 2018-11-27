import { Component } from '@angular/core';

@Component({
  selector: 'kpi-prod-info-panel-back',
  styleUrls: ['./prod-info-panel-back.component.scss'],
  templateUrl: './prod-info-panel-back.component.html',
})
export class ProdInfoBackComponent {
  details = [
    { key: "Name", value: "Vo Lam Truyen Ky Mobile" },
    { key: "Release date", value: "2016/09/29" },
    { key: "Category", value: "RPG" },
    // { key: "Contact point", value: "AnTT4" }
  ]
}
