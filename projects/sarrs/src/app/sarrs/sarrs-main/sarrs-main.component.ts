import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { SHARED_IMPORTS } from '../sarrs-common-imports';
import { CheckboxModule } from 'primeng/checkbox';
import { SarrsEntryformRecordDetails } from './sarrs-entryform-record-details/sarrs-entryform-record-details.component';
import { SarrsEntryformDetailsOfRecordComponent } from "./sarrs-entryform-details-of-record/sarrs-entryform-details-of-record.component";

interface City {
    name: string;
    code: string;
}

@Component({
  selector: 'app-sarrs-main',
  imports: [FormsModule, SelectModule, SHARED_IMPORTS, CheckboxModule, SarrsEntryformRecordDetails, SarrsEntryformDetailsOfRecordComponent],
  templateUrl: './sarrs-main.component.html',
  styleUrls: [ '../sarrs-common.scss', './sarrs-main.component.scss']
})
export class SarrsMainComponent implements OnInit,OnDestroy{
    ngOnInit(): void {
        console.log(">> SarrsMainComponent");
    }
    ngOnDestroy(): void {
        console.log("<< SarrsMainComponent");
    }
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
