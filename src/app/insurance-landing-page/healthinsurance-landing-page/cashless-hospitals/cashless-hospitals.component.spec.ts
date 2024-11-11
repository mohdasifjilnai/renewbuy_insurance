import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashlessHospitalsComponent } from './cashless-hospitals.component';

describe('CashlessHospitalsComponent', () => {
  let component: CashlessHospitalsComponent;
  let fixture: ComponentFixture<CashlessHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CashlessHospitalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashlessHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
