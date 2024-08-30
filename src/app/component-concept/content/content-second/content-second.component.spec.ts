import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSecondComponent } from './content-second.component';

describe('ContentSecondComponent', () => {
  let component: ContentSecondComponent;
  let fixture: ComponentFixture<ContentSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
