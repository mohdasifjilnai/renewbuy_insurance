import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRightPolicyComponent } from './select-right-policy.component';

describe('SelectRightPolicyComponent', () => {
  let component: SelectRightPolicyComponent;
  let fixture: ComponentFixture<SelectRightPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectRightPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectRightPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
