import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  numberAttribute,
  output,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-component-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
})
export class ComponentSecondComponent {
  // Angular will show an error in the parent where the selector is used, if value is not provided
  @Input({ required: true }) value?: number;

  // tranform input
  @Input({ transform: toUpper }) label = '';

  // Built in transformations
  @Input({ transform: booleanAttribute }) disabled = false;
  @Input({ transform: numberAttribute }) number = 0;

  // Input with alias
  @Input({ alias: 'unreal' }) real?: string;

  @Output() clicked = new EventEmitter<string>();

  // Developer preview output function angular 18
  newOutput = output<string>()

  handleClick() {
    this.clicked.emit('Hello');
    this.newOutput.emit('Hello from New Output Fn')
  }
}

function toUpper(val: string): string {
  return val?.toUpperCase() ?? '';
}
