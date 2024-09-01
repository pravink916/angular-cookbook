import { DatePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './reverse.pipe';

@Component({
  standalone: true,
  template: `
    <div class="w-8/12 bg-blue-100 mx-auto mt-5">
      <a
        href=""
        routerLink="/component-concept"
        class="ml-4 underline text-blue-500"
        >Go to Component Concept</a
      >
      <p>This is the Pipe / Logic Component</p>
      <!-- Using let-->
      @let name = 'Pravin'; @let value = 1;
      <p name="name">This is value from let variable: {{ name }}</p>
      @if(value >= 1) {
      <!-- @let nested = 2; -->
      <p>Value is greater than 1</p>
      } @else {
      <p>Value is less than 1</p>
      }
      <!--{{ nested }}--><!--invalid-->
      <br />
      <p>From for loop</p>
      @for (item of sampleArr; track item) {
      <p>{{ item }}</p>
      }
      <br />
      <div>
        @for (item of emptyArr; track item) { } @empty {
        <p>
          Is being printed from the 'empty' block as the array in for is empty
        </p>
        }
      </div>
      <div>
        <p class="underline">Different Pipes</p>
        <ul>
          <li>
            Today is with format dd/MM/YYYY {{ today | date : 'dd/MM/YYYY' }}
          </li>
          <li>Today is with format 'long' {{ today | date : 'long' }}</li>
          <li>
            Today is with format 'longDate' {{ today | date : 'longDate' }}
          </li>
          <li>uppercase pipe {{ upper | uppercase }}</li>
          <li>currnecy pipe {{ geeks | percent }}</li>
          <li>currnecy pipe '4.3-5' {{ geeks | percent : '4.3-5' }}</li>
          <li>
            Chaining Pipes date and uppercase
            {{ today | date : 'full' | uppercase }}
          </li>
        </ul>
        <div>
          <p>Custom Pipe Demo</p>
          <label>Enter the text to be reversed</label
          ><input type="text" #reverse [(ngModel)]="strToReverse" />
          @if(strToReverse){
          <p>The reversed string is:{{ strToReverse | reverse }}</p>
          }
        </div>
      </div>
    </div>
  `,
  imports: [DatePipe, UpperCasePipe, PercentPipe, FormsModule, ReversePipe],
})
export class PipeMainComponent {
  public sampleArr = [1, 2, 3, 4, 5];
  public emptyArr = [];
  today = new Date();
  upper = 'make me upper';
  geeks: number = 0.4945;
  strToReverse?: string;
}
