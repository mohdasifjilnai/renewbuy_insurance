import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimFileComponent } from './claim-file.component';

describe('ClaimFileComponent', () => {
  let component: ClaimFileComponent;
  let fixture: ComponentFixture<ClaimFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
