import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentConceptComponent } from './component-concept.component';

describe('ComponentConceptComponent', () => {
  let component: ComponentConceptComponent;
  let fixture: ComponentFixture<ComponentConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentConceptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
