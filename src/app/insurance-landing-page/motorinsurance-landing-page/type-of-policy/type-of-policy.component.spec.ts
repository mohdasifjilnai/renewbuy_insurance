import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfPolicyComponent } from './type-of-policy.component';

describe('TypeOfPolicyComponent', () => {
  let component: TypeOfPolicyComponent;
  let fixture: ComponentFixture<TypeOfPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeOfPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeOfPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
