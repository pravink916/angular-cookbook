import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentSecondComponent } from './second/second.component';

@Component({
  selector: 'app-component-concept',
  standalone: true,
  imports: [ComponentSecondComponent, FormsModule],
  templateUrl: './component-concept.component.html',
  styleUrl: './component-concept.component.scss'
})
export class ComponentConceptComponent {
public labelToTransform!: string;
public noToTransform!:string;
public aliasValue!:string;
public outputVal!: string

handleClick(val: string) {

this.outputVal = val;
}
}
