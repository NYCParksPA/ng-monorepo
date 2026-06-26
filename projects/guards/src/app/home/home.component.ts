import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit,OnDestroy {
  ngOnInit(): void {
    console.log(">> HomeComponent");
  }
  ngOnDestroy(): void {
    console.log("<< HomeComponent");
  }

}
