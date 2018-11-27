import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataModule } from './data/data.module';

export const NB_CORE_PROVIDERS = [
    ...DataModule.forRoot().providers,
  ];

@NgModule({
    imports: [
      CommonModule,
    ],
    exports: [
    ],
    declarations: [],
  })

  export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
          ngModule: CoreModule,
          providers: [
            ...NB_CORE_PROVIDERS,
          ],
        };
      }
  }