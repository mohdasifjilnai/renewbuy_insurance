import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBestHealthInsuranceComponent } from './choose-best-health-insurance.component';

describe('ChooseBestHealthInsuranceComponent', () => {
  let component: ChooseBestHealthInsuranceComponent;
  let fixture: ComponentFixture<ChooseBestHealthInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseBestHealthInsuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseBestHealthInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
