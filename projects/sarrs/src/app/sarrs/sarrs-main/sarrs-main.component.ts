import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { SHARED_IMPORTS } from '../sarrs-common-imports';
import { CheckboxModule } from 'primeng/checkbox';

interface City {
    name: string;
    code: string;
}

@Component({
  selector: 'app-sarrs-main',
  imports: [ FormsModule, InputGroup, InputGroupAddon, SelectModule, SHARED_IMPORTS, CheckboxModule ],
  templateUrl: './sarrs-main.component.html',
  styleUrls: [ '../sarrs-common.scss', './sarrs-main.component.scss']
})
export class SarrsMainComponent {
    readonly options = [ {label:"Label 1", value:1}, {label:"Label Two", value:2} ];
    readonly dateRangeOptions = [{label:"Specific Dates", value:"dates"}, {label:"Years", value:"years"}];

    text1: string | undefined;

    text2: string | undefined;

    number: string | undefined;

    selectedCity: City | undefined;

    cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
    ];

    onSubmit() {
        console.log('onSubmit');
    }
}
