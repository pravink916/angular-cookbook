import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FifthDeferComponent } from '../fifth-defer/fifth-defer.component';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [RouterLink, FifthDeferComponent],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  public goToThirdComponent() {
    // Demonstrates using relativeTo to specify an alternate route
    // Demonstrates sending a query parameter.
    this.router.navigate(['../third', {id: 2}], { relativeTo: this.route });

  }
}
