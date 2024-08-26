import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthLazyComponent } from './fourth-lazy.component';

describe('FourthLazyComponent', () => {
  let component: FourthLazyComponent;
  let fixture: ComponentFixture<FourthLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthLazyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
