import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../sarrs-common-imports';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-sarrs-entryform-dor',
  imports: [ SHARED_IMPORTS, DatePickerModule ],
  templateUrl: './sarrs-entryform-dor.component.html',
  styleUrls: [ '../../sarrs-common.scss', './sarrs-entryform-dor.component.scss']
})
export class SarrsEntryformDorComponent {
  readonly options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ];
  readonly boxDateRangeOptions = [ { value:'dates', label:'Dates' }, {value:'years',label:'Years'} ];

}
