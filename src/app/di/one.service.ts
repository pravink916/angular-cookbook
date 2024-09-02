import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OneService {
  whoami(): string {
    return 'I am One Service';
  }
}
