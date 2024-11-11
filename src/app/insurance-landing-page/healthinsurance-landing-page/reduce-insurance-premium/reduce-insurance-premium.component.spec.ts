import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduceInsurancePremiumComponent } from './reduce-insurance-premium.component';

describe('ReduceInsurancePremiumComponent', () => {
  let component: ReduceInsurancePremiumComponent;
  let fixture: ComponentFixture<ReduceInsurancePremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReduceInsurancePremiumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReduceInsurancePremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
