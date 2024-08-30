import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputMainComponent } from './input-output-main.component';

describe('InputOutputMainComponent', () => {
  let component: InputOutputMainComponent;
  let fixture: ComponentFixture<InputOutputMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOutputMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
