import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsCoveredComponent } from './benefits-covered.component';

describe('BenefitsCoveredComponent', () => {
  let component: BenefitsCoveredComponent;
  let fixture: ComponentFixture<BenefitsCoveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefitsCoveredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BenefitsCoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
