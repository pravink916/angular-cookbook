import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputOutputMainComponent } from './input-output/input-output-main/input-output-main.component';

type Concept = {
  route: string;
  name: string;
};

@Component({
  selector: 'app-component-concept',
  standalone: true,
  imports: [NgIf, InputOutputMainComponent, RouterLink, NgFor],
  templateUrl: './component-concept.component.html',
  styleUrl: './component-concept.component.scss',
})
export class ComponentConceptComponent {
  public concepts: Concept[] = [
    {
      route: '/component-concept/input-output',
      name: 'Go To Input / Output Demo',
    },
    {
      route: '/component-concept/content',
      name: 'Go to Content Demo',
    },
    {
      route: '/component-concept/lifecycle',
      name: 'Go to Lifecycle Demo',
    },
    {
      route: '/component-concept/view-child',
      name: 'View Child Demo',
    },
    {
      route: '/component-concept/outlet',
      name: 'Outlet Demo',
    },
    {
      route: '/component-concept/directive',
      name: 'Directive Demo',
    },
  ];
}
