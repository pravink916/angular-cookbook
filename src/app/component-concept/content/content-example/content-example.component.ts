import { Component } from '@angular/core';
import { ContentSecondComponent } from "../content-second/content-second.component";

@Component({
  selector: 'app-content-example',
  standalone: true,
  imports: [ContentSecondComponent],
  templateUrl: './content-example.component.html',
  styleUrl: './content-example.component.scss'
})
export class ContentExampleComponent {

}
