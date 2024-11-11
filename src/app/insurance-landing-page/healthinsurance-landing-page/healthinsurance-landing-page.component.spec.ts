import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthinsuranceLandingPageComponent } from './healthinsurance-landing-page.component';

describe('HealthinsuranceLandingPageComponent', () => {
  let component: HealthinsuranceLandingPageComponent;
  let fixture: ComponentFixture<HealthinsuranceLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthinsuranceLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealthinsuranceLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
