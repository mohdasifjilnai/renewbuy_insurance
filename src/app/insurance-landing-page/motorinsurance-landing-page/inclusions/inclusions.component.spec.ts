import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusionsComponent } from './inclusions.component';

describe('InclusionsComponent', () => {
  let component: InclusionsComponent;
  let fixture: ComponentFixture<InclusionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InclusionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InclusionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
