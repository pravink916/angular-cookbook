import { NgComponentOutlet } from '@angular/common';
import { Component, ViewContainerRef } from '@angular/core';
import { OutletChildComponent } from './outlet-child.component';

@Component({
  standalone: true,
  template: `
    <div class="w-8/12 bg-blue-100 mx-auto mt-5">
      <a
        href=""
        routerLink="/component-concept"
        class="ml-4 underline text-blue-500"
        >Go to Component Concept</a
      >
      <p>This is the Outlet Main Component</p>
      <div>Including Child component using ngComponentOutlet</div>
      <ng-container *ngComponentOutlet="getChildComponent()"></ng-container>
      <div>Component created using ViewContainerRef</div> 
    </div>
  `,
  imports: [OutletChildComponent, NgComponentOutlet],
})
export class OutletMainComponent {
  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    this.viewContainerRef.createComponent(OutletChildComponent);
  }
  getChildComponent() {
    return OutletChildComponent;
  }
}
