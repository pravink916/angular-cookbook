import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveConceptComponent } from './directive-concept.component';

describe('DirectiveConceptComponent', () => {
  let component: DirectiveConceptComponent;
  let fixture: ComponentFixture<DirectiveConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveConceptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
