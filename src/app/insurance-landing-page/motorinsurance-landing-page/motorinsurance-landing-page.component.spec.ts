import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorinsuranceLandingPageComponent } from './motorinsurance-landing-page.component';

describe('MotorinsuranceLandingPageComponent', () => {
  let component: MotorinsuranceLandingPageComponent;
  let fixture: ComponentFixture<MotorinsuranceLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotorinsuranceLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorinsuranceLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
