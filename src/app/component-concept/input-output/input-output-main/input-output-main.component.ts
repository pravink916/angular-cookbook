import { NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component, ViewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentSecondComponent } from '../second/second.component';

@Component({
  selector: 'app-input-output-main',
  standalone: true,
  imports: [FormsModule, ComponentSecondComponent, NgIf, RouterLink],
  templateUrl: './input-output-main.component.html',
  styleUrl: './input-output-main.component.scss',
})
export class InputOutputMainComponent implements AfterViewInit {
  // Obtain reference to the child element
  @ViewChild(ComponentSecondComponent) child!: ComponentSecondComponent;
  public labelToTransform!: string;
  public noToTransform!: string;
  public aliasValue!: string;
  public outputVal!: string;
  public newOutputVal!: string;
  public newOutputValSubscribed!: string;
  public newOutputVal$!: Observable<string>;


  handleClick(val: string) {
    this.outputVal = val;
  }

  handleNewOutput(val: string) {
    this.newOutputVal = val;
  }

  ngAfterViewInit(): void {
    // This is also possible
    // this.newOutputVal$ = outputToObservable(this.child.newOutput)
    this.child?.newOutput.subscribe((x) => (this.newOutputValSubscribed = x));
  }

}
