import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { LayoutService } from '../../../../@core/data/layout.service';

@Component({
  selector: 'kpi-prod-info-panel-image',
  template: `
        <nb-user size="large"
            picture="../../../../../assets/image/jxm.png"
            name="Vo Lam Truyen Ky Mobile"
            title="Product Group 1">
        </nb-user>
  `,
})
export class ProdInfoPanelImageComponent implements OnDestroy {

  private alive = true;

  ngOnDestroy(): void {
    this.alive = false;
  }
}
