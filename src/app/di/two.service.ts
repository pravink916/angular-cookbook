import { Injectable } from '@angular/core';
import { OneService } from './one.service';

@Injectable()
export class TwoService extends OneService {
  override whoami(): string {
    return 'I am Two Service';
  }
}
