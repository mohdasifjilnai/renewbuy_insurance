import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InurerPartnerComponent } from './inurer-partner.component';

describe('InurerPartnerComponent', () => {
  let component: InurerPartnerComponent;
  let fixture: ComponentFixture<InurerPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InurerPartnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InurerPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
