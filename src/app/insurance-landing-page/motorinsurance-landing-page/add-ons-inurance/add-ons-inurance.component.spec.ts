import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnsInuranceComponent } from './add-ons-inurance.component';

describe('AddOnsInuranceComponent', () => {
  let component: AddOnsInuranceComponent;
  let fixture: ComponentFixture<AddOnsInuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOnsInuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOnsInuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
