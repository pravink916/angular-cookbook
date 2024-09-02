import { Component, inject, Optional } from '@angular/core';
import { MY_TOKEN } from '../app.config';
import { DummyService } from './dummy.service';
import { OneService } from './one.service';
import { TwoService } from './two.service';

@Component({
  selector: 'app-di',
  standalone: true,
  imports: [],
  templateUrl: './di.component.html',
  styleUrl: './di.component.scss',
  providers: [{ provide: OneService, useClass: TwoService }],
})
export class DiComponent {
  private readonly service = inject(OneService);
  public whoami = this.service.whoami();
  public myToken = inject(MY_TOKEN);

  // Will throw an error as there is no provider for dummy service
  // By marking as @Optional there will not be an error
  constructor(@Optional() private dummyService: DummyService) {}
}
