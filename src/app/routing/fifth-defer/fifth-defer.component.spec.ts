import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthDeferComponent } from './fifth-defer.component';

describe('FifthDeferComponent', () => {
  let component: FifthDeferComponent;
  let fixture: ComponentFixture<FifthDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FifthDeferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
