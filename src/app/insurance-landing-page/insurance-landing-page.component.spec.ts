import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceLandingPageComponent } from './insurance-landing-page.component';

describe('InsuranceLandingPageComponent', () => {
  let component: InsuranceLandingPageComponent;
  let fixture: ComponentFixture<InsuranceLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsuranceLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsuranceLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
