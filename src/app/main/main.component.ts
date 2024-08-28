import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ConceptName, ConceptPath } from '../enum/enum-utils';
import { Concept } from '../types/concept';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  public concepts: Concept[] = [
    { name: ConceptName.COMPONENT, path: ConceptPath.COMPONENT },
    { name: ConceptName.ROUTING, path: ConceptPath.ROUTING },
  ];
}
