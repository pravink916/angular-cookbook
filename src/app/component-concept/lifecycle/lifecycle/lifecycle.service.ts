import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LifecycleService {
  private clearLogs = new Subject<boolean>();
  public clearLogs$ = this.clearLogs.asObservable();

  clearTheLogs() {
    this.clearLogs.next(true);
  }
}
