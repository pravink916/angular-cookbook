import { NgFor } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  DoCheck,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { LifecycleService } from './lifecycle.service';

@Component({
  standalone: true,
  selector: 'app-lifecycle-child',
  template: `I am the child.
    <div>Name of person is {{ person?.name }}</div>
    <div>Logs from the child</div>
    <div *ngFor="let log of logs()">
      <h2 class="text-purple-500">{{ log }}</h2>
    </div> `,
  imports: [NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifecycleChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() person?: Person;

  private lifecycleService = inject(LifecycleService);

  public logs = signal<string[]>([]);

  constructor(private readonly destroyRef: DestroyRef) {
    this.logs.update((currentLogs) => [
      ...currentLogs,
      'Constructor: LifecycleChildComponent created',
    ]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logs.update((currentLogs) => [
      ...currentLogs,
      'ngOnChanges: Input properties changed',
    ]);
    console.log('ngOnChanges:', changes); // Optional: log the actual changes to the console
  }

  ngOnInit(): void {
    this.logs.update((currentLogs) => [
      ...currentLogs,
      'ngOnInit: LifecycleChildComponent initialized',
    ]);
    this.lifecycleService.clearLogs$
      .pipe(
        tap((x) => {
          if (x) {
            this.logs.update(() => []);
          }
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  ngDoCheck(): void {
    this.logs.update((currentLogs) => [
      ...currentLogs,
      'ngDoCheck: Change detection triggered',
    ]);
  }

  ngAfterContentInit(): void {
    this.logs.update((currentLogs) => [
      ...currentLogs,
      'ngAfterContentInit: Content initialized',
    ]);
  }

  ngAfterContentChecked(): void {
    this.logs.update((currentLogs) => [
      ...currentLogs,
      'ngAfterContentChecked: Content checked',
    ]);
  }

  ngAfterViewInit(): void {
    this.logs.update((currentLogs) => [
      ...currentLogs,
      'ngAfterViewInit: View initialized',
    ]);
  }

  ngAfterViewChecked(): void {
    this.logs.update((currentLogs) => [
      ...currentLogs,
      'ngAfterViewChecked: View checked',
    ]);
  }

  ngOnDestroy(): void {
    this.logs.update((currentLogs) => [
      ...currentLogs,
      'ngOnDestroy: LifecycleChildComponent destroyed',
    ]);
  }
}

export type Person = {
  name: string;
  age: number;
};
