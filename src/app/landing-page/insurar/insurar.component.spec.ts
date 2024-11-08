import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurarComponent } from './insurar.component';

describe('InsurarComponent', () => {
  let component: InsurarComponent;
  let fixture: ComponentFixture<InsurarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsurarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsurarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
