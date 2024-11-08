import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoLoadPopupComponent } from './auto-load-popup.component';

describe('AutoLoadPopupComponent', () => {
  let component: AutoLoadPopupComponent;
  let fixture: ComponentFixture<AutoLoadPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoLoadPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoLoadPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
