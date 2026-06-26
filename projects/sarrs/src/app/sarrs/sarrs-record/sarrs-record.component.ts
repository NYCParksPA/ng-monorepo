import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SHARED_IMPORTS } from '../sarrs-common-imports';
import { SelectChangeEvent } from 'primeng/select';
import { IftaLabelModule } from 'primeng/iftalabel';
import { DatePicker, DatePickerModule } from "primeng/datepicker";

@Component({
  selector: 'app-sarrs-record',
  imports: [SHARED_IMPORTS, IftaLabelModule, DatePickerModule],
  templateUrl: './sarrs-record.component.html',
  styleUrls: [ '../sarrs-common.scss', './sarrs-record.component.scss']
})
export class SarrsRecordComponent implements OnInit,OnDestroy {
  today = new Date();
  readonly options = [
    {label:'Option 1', value:1}, {label:'Option 2', value:2}, {label:'Option 3', value:3}, {label:'Option 4', value:4}
  ];
  readonly dateRangeOptions = [ 
    {label:'Specifi Dates', value:'dates'}, {label:'Years', value:'years'}
  ];

  boxDateRange = { from:null, to:null };

  ngOnInit(): void {
    console.log(">> SarrsRecordComponent");
  }
  ngOnDestroy(): void {
    console.log("<< SarrsRecordComponent");
  }
// ----------------------------------------------------------------------------
  changeBoxDateRange(evt: SelectChangeEvent) {
    console.log("changeBoxDateRange:", evt);
  }
  
}
