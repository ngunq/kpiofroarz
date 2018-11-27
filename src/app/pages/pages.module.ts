import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    DashboardModule,
    ThemeModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
