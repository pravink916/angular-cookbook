import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'custom-card-action',
  template: `
    This is child
    <h1><ng-content></ng-content></h1>
  `,
})
export class CustomCardAction {
  public text?: string;

  @ContentChild('id') textEl!: ElementRef;

  ngAfterViewInit() {
    this.text = this.textEl?.nativeElement.textContent;
  }
}
