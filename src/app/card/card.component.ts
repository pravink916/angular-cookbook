import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Concept } from '../types/concept';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input()
  public concept?: Concept;


}
