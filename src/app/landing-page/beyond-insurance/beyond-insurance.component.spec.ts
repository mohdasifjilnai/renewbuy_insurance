import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondInsuranceComponent } from './beyond-insurance.component';

describe('BeyondInsuranceComponent', () => {
  let component: BeyondInsuranceComponent;
  let fixture: ComponentFixture<BeyondInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeyondInsuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeyondInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
