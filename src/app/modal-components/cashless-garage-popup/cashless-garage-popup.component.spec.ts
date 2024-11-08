import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashlessGaragePopupComponent } from './cashless-garage-popup.component';

describe('CashlessGaragePopupComponent', () => {
  let component: CashlessGaragePopupComponent;
  let fixture: ComponentFixture<CashlessGaragePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashlessGaragePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashlessGaragePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
