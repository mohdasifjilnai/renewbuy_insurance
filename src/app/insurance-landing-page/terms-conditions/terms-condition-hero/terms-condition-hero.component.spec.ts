import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsConditionHeroComponent } from './terms-condition-hero.component';

describe('TermsConditionHeroComponent', () => {
  let component: TermsConditionHeroComponent;
  let fixture: ComponentFixture<TermsConditionHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsConditionHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermsConditionHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
