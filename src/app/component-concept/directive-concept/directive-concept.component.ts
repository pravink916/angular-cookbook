import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-directive-concept',
  standalone: true,
  imports: [HighlightDirective, RouterLink, FormsModule],
  templateUrl: './directive-concept.component.html',
  styleUrl: './directive-concept.component.scss',
})
export class DirectiveConceptComponent {
  public color?: string;
}
