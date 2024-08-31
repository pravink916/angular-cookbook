import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  DoCheck,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
  ViewChild,
  viewChildren,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, take, tap, timer } from 'rxjs';
import { LifecycleChildComponent, Person } from './lifecycle-child.component';
import { LifecycleService } from './lifecycle.service';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [NgFor, LifecycleChildComponent, FormsModule, AsyncPipe, JsonPipe],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss',
})
export class LifecycleComponent
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
  @Input() data: any;

  public logs = signal<string[]>([]);

  public inputDataStr = new BehaviorSubject('');
  public inputDataStr$ = this.inputDataStr.asObservable();
  private lifecycleService = inject(LifecycleService);

  // ViewChild to get a reference to the element
  @ViewChild('exampleElement', { static: true }) exampleElement:
    | ElementRef
    | undefined;

  logEls = viewChildren<ElementRef>('log');

  public person: Person = {
    name: 'Pravin',
    age: 40,
  };

  constructor(
    private readonly changeDetRef: ChangeDetectorRef,
    private readonly destroyRef: DestroyRef
  ) {
    this.logs.update((values) => [
      ...values,
      'Constructor: LifecycleComponent created',
    ]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logs.update((values) => [...values, 'ngOnChanges']);
  }

  ngOnInit(): void {
    this.logs.update((values) => [
      ...values,
      'ngOnInit: LifecycleComponent initialized',
      `ngOnInit: exampleElement:${this.exampleElement?.nativeElement?.textContent}`,
    ]);
    this.lifecycleService.clearLogs$
      .pipe(
        tap((x) => {
          this.logEls().forEach((element) => {
            element.nativeElement.remove();
          });
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

    // Adding the element's text content to the logs
    const elementText =
      this.exampleElement?.nativeElement?.textContent || 'Element not found';
    this.logs.update((currentLogs) => [
      ...currentLogs,
      `ngAfterViewInit: exampleElement: ${elementText}`,
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
      'ngOnDestroy: LifecycleComponent destroyed',
    ]);
  }

  iamclicked() {
    console.log('Let us see what is triggered in the cahnge detection cycle');
  }

  doChangeDetection() {
    // Invoke change detection cycle manually
    timer(3000)
      .pipe(take(1))
      .subscribe((x) => {
        this.changeDetRef.detectChanges();
      });
  }
  clearLogs() {
    this.lifecycleService.clearTheLogs();
  }
  dummyClicked() {
    console.log('Dummy button has been clicked.');
  }
}
