import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CanComponentDeactivateSteps } from '../../_guards/steps.guard';
import { Observable } from 'rxjs';
import { FormDataService } from '../../_services/form.service';

@Component({
  selector: 'app-step-2',
  imports: [RouterLink],
  templateUrl: './step-2.component.html',
  styleUrls: ['../steps-common.scss', './step-2.component.css']
})
export class Step2Component implements CanComponentDeactivateSteps{
  readonly svc = inject(FormDataService);
  
  readonly selections= [
    {id:10, label:"Programmer"},
    {id:20, label:"Designer"},
    {id:30, label:"Engineer"},
    {id:40, label:"Manager"},
    {id:100, label:"Freelancer"}
  ];

  canDeactivate():boolean {
    console.log("...running Step-2 canDeactivate...");
    return true;
  }

}
