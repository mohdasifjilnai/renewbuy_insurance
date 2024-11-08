import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouPopupComponent } from './thank-you-popup.component';

describe('ThankYouPopupComponent', () => {
  let component: ThankYouPopupComponent;
  let fixture: ComponentFixture<ThankYouPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThankYouPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThankYouPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
