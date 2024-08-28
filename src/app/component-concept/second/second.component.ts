import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';




@Component({
  selector: 'app-component-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})

export class ComponentSecondComponent {
  // Angular will show an error in the parent where the selector is used, if value is not provided
  @Input({required: true}) value?: number;

  // tranform input
  @Input({transform: toUpper}) label = '';

  // Built in transformations
  @Input({transform: booleanAttribute}) disabled = false;
  @Input({transform: numberAttribute}) number = 0;

}

function toUpper(val:string): string {
  return val?.toUpperCase() ?? '';
}

