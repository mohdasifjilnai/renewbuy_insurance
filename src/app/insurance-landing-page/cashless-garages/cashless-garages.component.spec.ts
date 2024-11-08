import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashlessGaragesComponent } from './cashless-garages.component';

describe('CashlessGaragesComponent', () => {
  let component: CashlessGaragesComponent;
  let fixture: ComponentFixture<CashlessGaragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CashlessGaragesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashlessGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
