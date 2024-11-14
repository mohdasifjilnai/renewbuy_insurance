import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqMotorComponent } from './faq-motor.component';

describe('FaqMotorComponent', () => {
  let component: FaqMotorComponent;
  let fixture: ComponentFixture<FaqMotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqMotorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqMotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
