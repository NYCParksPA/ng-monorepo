import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormDataService } from '../../_services/form.service';
import { CanComponentDeactivateSteps } from '../../_guards/steps.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-step-1',
  imports: [RouterLink],
  templateUrl: './step-1.component.html',
  styleUrls: [ '../steps-common.scss', './step-1.component.css']
})
export class Step1Component implements OnInit,OnDestroy, CanComponentDeactivateSteps {
  readonly formService = inject(FormDataService);

  ngOnInit(): void {
    console.log(">> Step1Component");
  }
  ngOnDestroy(): void {
    console.log("<< Step1Component");
  }

  canDeactivate():boolean {
    console.log("...running Step-1 canDeactivate...");
    return true;
  }
}
