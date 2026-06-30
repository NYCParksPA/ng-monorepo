/** 
 * Common Inputs for standalone components
 *  - includes basic PrimeNG components
 * 
*/
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

import { FieldsetModule } from 'primeng/fieldset';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
// import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { BlockUIModule } from 'primeng/blockui';
import { TextareaModule } from 'primeng/textarea';



export const SHARED_IMPORTS = [
    CommonModule,
    FormsModule, ReactiveFormsModule,

    /* PrimeNG components */
    BlockUIModule,
    ButtonModule,
    CardModule,
    DialogModule,
    DropdownModule,
    FieldsetModule,
    IconFieldModule,
    InputGroupAddonModule, InputGroupModule,
    InputIconModule, 
    InputNumberModule, InputTextModule,
    PanelModule,
    ScrollTopModule,
    SelectModule,
    TableModule,
    TabsModule,
    TagModule,
    TextareaModule,
    TooltipModule
];

export const FORM_IMPORTS = [
    FormsModule, ReactiveFormsModule
]