import { Component, Input } from '@angular/core';

@Component({
    selector: 'kpi-dept-filter',
    styleUrls: ['./dept-filter.component.scss'],
    template: `
        <div class="dropdown" ngbDropdown>
            <button class="btn btn-primary" id="dropdownBasic2" ngbDropdownToggle>Dept Filter</button>
            <div ngbDropdownMenu aria-labelledby="dropdownBasic2">
                <button class="dropdown-item" *ngFor="let f of deptList" (click)="changeDept(f)">{{ f }}</button>
            </div>
        </div>
    `,
})
export class DeptFilterComponent {
    @Input() deptList: string[];

}
