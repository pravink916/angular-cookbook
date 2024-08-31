import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CustomCardAction } from './custom-card-acton.component';

@Component({
  selector: 'custom-card',
  template: `
    <div class="w-8/12 bg-blue-100 mx-auto mt-5">
      <a
        href=""
        routerLink="/component-concept"
        class="ml-4 underline text-blue-500"
        >Go to Component Concept.</a
      >
      <div>This is the View Child Concept. Use Console for output</div>
      <custom-card-action #el1><div #id>Save</div></custom-card-action>
    </div>
  `,
  imports: [CustomCardAction],
  standalone: true,
})
export class CustomCard {
  //@ViewChild('el1') cardAction?: CustomCardAction;
  @ViewChild(CustomCardAction) cardAction?: CustomCardAction;

  @ViewChildren(CustomCardAction)
  cardActionElements?: QueryList<CustomCardAction>;

  ngAfterViewInit() {
    console.log(this.cardAction?.text);
    this.cardActionElements?.forEach((x) =>
      console.log('from children', x.text)
    );
  }
}
