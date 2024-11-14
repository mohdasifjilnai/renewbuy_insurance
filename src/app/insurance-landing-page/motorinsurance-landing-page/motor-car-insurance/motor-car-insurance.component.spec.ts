import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorCarInsuranceComponent } from './motor-car-insurance.component';

describe('MotorCarInsuranceComponent', () => {
  let component: MotorCarInsuranceComponent;
  let fixture: ComponentFixture<MotorCarInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotorCarInsuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorCarInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
