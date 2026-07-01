import { Component } from '@angular/core';
import { InputText } from "primeng/inputtext";
import { SHARED_IMPORTS } from '../../sarrs-common-imports';

@Component({
  selector: 'app-sarrs-entryform-details-of-record',
  imports: [ SHARED_IMPORTS, InputText],
  templateUrl: './sarrs-entryform-details-of-record.component.html',
  styleUrls: [ '../../sarrs-common.scss', '../../sarrs-forms.scss', './sarrs-entryform-details-of-record.component.scss']
})
export class SarrsEntryformDetailsOfRecordComponent {
  readonly options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ];
  readonly availableRecords = {
    contracts: ["XG-31700-201M","X004-106m","X295-106M","X040-504M","XG-808M","X253-105M","X019-198M"]
  }

  readonly dates = [ new Date("Jan 4, 2021 12:45"), new Date("Mar 21, 2022 9:34"), new Date("Sep 22, 2012 21:12") ];

}
