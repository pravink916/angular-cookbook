import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string) {
    return value ? value.split('').reverse().join('') : undefined;
  }
}
