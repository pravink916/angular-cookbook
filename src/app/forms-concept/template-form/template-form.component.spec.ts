import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';

describe('Test the template form component', () => {
  let component: TemplateFormComponent;
  let fixture: ComponentFixture<TemplateFormComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, TemplateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check that model is updated', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'Green';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.favouriteColor).toEqual('Green');
  }));

  it('should update the view is updated', fakeAsync(() => {
    component.favouriteColor = 'Yellow';
    fixture.detectChanges();
    tick();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.value).toEqual('Yellow');
  }));
});
