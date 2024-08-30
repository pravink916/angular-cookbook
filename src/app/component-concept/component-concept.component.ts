import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputOutputMainComponent } from './input-output/input-output-main/input-output-main.component';

@Component({
  selector: 'app-component-concept',
  standalone: true,
  imports: [NgIf, InputOutputMainComponent, RouterLink],
  templateUrl: './component-concept.component.html',
  styleUrl: './component-concept.component.scss',
})
export class ComponentConceptComponent {}
