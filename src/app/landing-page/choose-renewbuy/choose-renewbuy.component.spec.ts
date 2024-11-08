import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRenewbuyComponent } from './choose-renewbuy.component';

describe('ChooseRenewbuyComponent', () => {
  let component: ChooseRenewbuyComponent;
  let fixture: ComponentFixture<ChooseRenewbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseRenewbuyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseRenewbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
