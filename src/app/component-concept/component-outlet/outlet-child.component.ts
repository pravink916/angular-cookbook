import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-outlet-child',
  template: ` <div class="text-purple-500">This is the Child element</div> `,
})
export class OutletChildComponent {}
