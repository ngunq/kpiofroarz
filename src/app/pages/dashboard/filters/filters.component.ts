import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'kpi-filters',
    styleUrls: ['./filters.component.scss'],
    templateUrl: './filters.component.html',
})
export class FiltersComponent {
    @Output() testtt = new EventEmitter<string>();

    deptList: string[] = [
        "GS1",
        "GS2"
    ];
}
