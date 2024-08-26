import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {


}
