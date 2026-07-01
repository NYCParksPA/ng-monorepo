import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SarrsService } from '../_services/sarrs.service';

import { SelectButtonModule, SelectButtonOptionClickEvent } from 'primeng/selectbutton';

import { SarrsRecordComponent } from "../sarrs-record/sarrs-record.component";
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SarrsMainComponent } from '../sarrs-main/sarrs-main.component';
import { SarrsFormComponent } from '../sarrs-form/sarrs-form.component';
import { SarrsListingsComponent } from '../sarrs-listings/sarrs-listings.component';

@Component({
  selector: 'app-sarrs-container',
  imports: [CommonModule, SarrsMainComponent,FormsModule, SelectButtonModule, ButtonModule ],
  templateUrl: './sarrs-container.component.html',
  styleUrls: [ '../sarrs-common.scss', './sarrs-container.component.scss']
})
export class SarrsContainerComponent implements OnInit,OnDestroy {
  private readonly sarrsService = inject(SarrsService);

  readonly menuItems = {
    user: [
      { id:1 , key:'retieve', label:'Retrieve Box', action:'', icon:'pi pi-box', component:null },
      { id:3 , key:'newrecord', label:'New Record', action:'', icon:'pi pi-pen-to-square', component:SarrsMainComponent },
      { id:5 , key:'searchopen', label:'List Open Records', action:'', icon:'pi pi-folder-open', component:SarrsListingsComponent },
    ],
    admin: [
      { id:100, key:'barcode-search', label:'Search by Barcode', icon:'pi pi-barcode', action:''}
    ]
  };
  activeMenuItem = null;
  
  usermode = {
    options: [ {label:"User", value:'user'}, {label:"Admin", value:'admin'} ],
    selected: 'user'
  };

  ngOnInit(): void {
    console.log(">> SarrsContainerComponent");

    this.sarrsService.getListing().subscribe(
      (resp:any) => {
        console.log(resp);
        console.log(resp[0])
      }
    )
  }
  ngOnDestroy(): void {
    console.log("<< SarrsContainerComponent");
  }

// ----------------------------------------------------------------------------
  onMenuClick(item:any) {
    console.log('onMenuClick:', item);
    this.activeMenuItem = item.component;
  }

  usermodeSelection(evt: SelectButtonOptionClickEvent) {
    console.log("usermodeSelection:", evt);
    console.log("usermodeSelection:", this.usermode);
  }


// ============================================================================
}
