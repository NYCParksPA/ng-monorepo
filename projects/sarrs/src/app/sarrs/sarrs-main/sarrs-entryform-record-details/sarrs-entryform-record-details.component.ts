import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../sarrs-common-imports';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-sarrs-entryform-record-details',
  imports: [ SHARED_IMPORTS, DatePickerModule ],
  templateUrl: './sarrs-entryform-record-details.component.html',
  styleUrls: [ '../../sarrs-common.scss', '../../sarrs-forms.scss', './sarrs-entryform-record-details.component.scss']
})
export class SarrsEntryformRecordDetails {
    readonly options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ];
  readonly boxDateRangeOptions = [ { value:'dates', label:'Dates' }, {value:'years',label:'Years'} ];

}
