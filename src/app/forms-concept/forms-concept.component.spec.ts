import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsConceptComponent } from './forms-concept.component';

describe('FormsConceptComponent', () => {
  let component: FormsConceptComponent;
  let fixture: ComponentFixture<FormsConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsConceptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
