import { Component } from '@angular/core';
import { CanComponentDeactivateSteps } from '../../_guards/steps.guard';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step-3',
  imports: [ RouterLink ],
  templateUrl: './step-3.component.html',
  styleUrls: ['../steps-common.scss',  './step-3.component.css'],
  styles:[`
    :host {
      display: block;
      width: 100%;
      background-color: #333333;
    }
  `]
})
export class Step3Component implements CanComponentDeactivateSteps {

  canDeactivate():boolean {
    console.log("...running Step-3 canDeactivate...");
    return true;
  }
}
