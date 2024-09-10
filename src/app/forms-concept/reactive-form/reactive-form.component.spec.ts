import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form.component';

describe('Reactive Favourite Color Component', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ReactiveFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the value in the control', () => {
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = 'Red';
    input.dispatchEvent(new Event('input'));
    expect(fixture.componentInstance.favouriteColorControl.value).toEqual(
      'Red'
    );
  });

  it('should update the template', () => {
    fixture.componentInstance.favouriteColorControl.setValue('Blue');
    const input = fixture.nativeElement.querySelector('input');
    expect(input.value).toEqual('Blue');
  });
});
