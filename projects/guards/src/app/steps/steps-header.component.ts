import { Component } from '@angular/core';

@Component({
  selector: 'app-steps-header',
  imports: [],
  template: `
    <header>
      <h1 class="brand">Application <span>Form</span></h1>
      <p>Please complete all sections</p>
    </header>
  `,
  styles: `
    .brand {
      font-family: 'Syne', sans-serif;
      font-size: 1.6rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #fff;
    }
  `
})
export class StepsHeaderComponent {

}
