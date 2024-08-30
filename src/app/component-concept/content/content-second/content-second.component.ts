import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-content-second',
  standalone: true,
  imports: [],
  templateUrl: './content-second.component.html',
  styleUrl: './content-second.component.scss',
  host: {
    class: 'custom-class',
  },
})
export class ContentSecondComponent {
  @HostBinding('attr.aria-valuenow')
  value: number = 0;
  public label?: string;

  @HostListener('click', ['$event'])
  updateValue(event: MouseEvent) {
    this.label = 'Child component has been clicked';
  }
}
