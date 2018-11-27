import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SampleLayoutComponent } from './layouts/sample/sample.layout';


import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';

import {
    HeaderComponent,
    FooterComponent,
    ThemeSwitcherComponent,
    ThemeSwitcherListComponent
} from './components';

import {
    NbThemeModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbActionsModule,
    NbUserModule,
    NbSearchModule,
    NbContextMenuModule,
    NbTabsetModule,
    NbCardModule,
    NbSelectModule,
    NbSpinnerModule,
    NbPopoverModule,
    NbInputModule,
    NbDatepickerModule

} from "@nebular/theme";

import {
    NumberWithCommasPipe,
    AbsPipe
} from './pipes';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NB_MODULES = [
    NbCardModule,
    NbLayoutModule,
    NbTabsetModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NgbModule,
    NbSelectModule,
    NbSpinnerModule,
    NbPopoverModule,
    NbInputModule,
    NbDatepickerModule
];

const COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    SampleLayoutComponent,
    ThemeSwitcherComponent,
    ThemeSwitcherListComponent
];

const PIPES = [
    NumberWithCommasPipe,
    AbsPipe
];

const ENTRY_COMPONENTS = [
    ThemeSwitcherListComponent,
];

const NB_THEME_PROVIDERS = [
    ...NbThemeModule.forRoot(
        {
            name: 'default',
        },
        [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME],
    ).providers,
    ...NbSidebarModule.forRoot().providers,
    ...NbMenuModule.forRoot().providers,
    ...NbDatepickerModule.forRoot().providers,
];
@NgModule({
    imports: [...BASE_MODULES, ...NB_MODULES],
    exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES],
    declarations: [...COMPONENTS, ...PIPES],
    entryComponents: [...ENTRY_COMPONENTS],

})

export class ThemeModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: ThemeModule,
            providers: [...NB_THEME_PROVIDERS],
        };
    }
}
