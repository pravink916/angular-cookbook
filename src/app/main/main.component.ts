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
  public concepts: Concept[] = Object.keys(ConceptName).map((key) => {
    return {
      name: ConceptName[key as keyof typeof ConceptName],
      path: ConceptPath[key as keyof typeof ConceptPath],
    };
  });
}
