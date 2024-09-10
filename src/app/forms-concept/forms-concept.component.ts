import { Component } from '@angular/core';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

@Component({
  selector: 'app-forms-concept',
  standalone: true,
  imports: [TemplateFormComponent, ReactiveFormComponent],
  templateUrl: './forms-concept.component.html',
  styleUrl: './forms-concept.component.scss',
})
export class FormsConceptComponent {}
