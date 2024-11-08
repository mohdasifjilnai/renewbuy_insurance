import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorConnectComponent } from './advisor-connect.component';

describe('AdvisorConnectComponent', () => {
  let component: AdvisorConnectComponent;
  let fixture: ComponentFixture<AdvisorConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvisorConnectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvisorConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
