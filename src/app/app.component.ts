import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MY_TOKEN } from './app.config';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: MY_TOKEN, useValue: 'my-sample-token' }],
})
export class AppComponent {
  title = 'angular-cookbook';
}
