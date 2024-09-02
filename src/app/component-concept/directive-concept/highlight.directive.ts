import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight?: string;
  @Input() additionalColor?: string;

  constructor(private readonly el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseover')
  onMouseOver() {
    console.log('The additional attribute is ', this.additionalColor);
    this.el.nativeElement.style.backgroundColor = this.appHighlight || 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
