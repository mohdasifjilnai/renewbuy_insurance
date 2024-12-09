import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeinsuranceLandingPageComponent } from './lifeinsurance-landing-page.component';

describe('LifeinsuranceLandingPageComponent', () => {
  let component: LifeinsuranceLandingPageComponent;
  let fixture: ComponentFixture<LifeinsuranceLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeinsuranceLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeinsuranceLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
