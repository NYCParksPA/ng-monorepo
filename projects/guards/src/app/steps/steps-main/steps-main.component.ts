import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps-main',
  imports: [],
  templateUrl: './steps-main.component.html',
  styleUrl: './steps-main.component.css'
})
export class StepsMainComponent implements OnInit,OnDestroy {
  ngOnInit(): void {
    console.log(">> StepsMainComponent");
  }
  ngOnDestroy(): void {
    console.log("<< StepsMainComponent");
  }

}
