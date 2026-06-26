import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'guards';
  readonly homeLink = encodeURIComponent('/?cmd=exit');
}
