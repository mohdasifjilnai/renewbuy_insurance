import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInuranceComponent } from './main-inurance.component';

describe('MainInuranceComponent', () => {
  let component: MainInuranceComponent;
  let fixture: ComponentFixture<MainInuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainInuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainInuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
