import { AsyncPipe } from '@angular/common';
import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ComponentSecondComponent } from './second/second.component';

@Component({
  selector: 'app-component-concept',
  standalone: true,
  imports: [ComponentSecondComponent, FormsModule, AsyncPipe],
  templateUrl: './component-concept.component.html',
  styleUrl: './component-concept.component.scss',
})
export class ComponentConceptComponent implements AfterViewChecked {

  // Obtain reference to the child element
  @ViewChild(ComponentSecondComponent) child!: ComponentSecondComponent;

  public labelToTransform!: string;
  public noToTransform!: string;
  public aliasValue!: string;
  public outputVal!: string;
  public newOutputVal!: string;
  public newOutputValSubscribed!: string;
  public newOutputVal$!: Observable<string>

  handleClick(val: string) {
    this.outputVal = val;
  }

  handleNewOutput(val: string) {
    this.newOutputVal = val;
  }
  
  ngAfterViewChecked(): void {
    // This is also possible
   // this.newOutputVal$ = outputToObservable(this.child.newOutput)
     this.child.newOutput.subscribe(x =>this.newOutputValSubscribed=x);

  }

}
