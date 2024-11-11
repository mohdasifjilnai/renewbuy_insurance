import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeMythsComponent } from './some-myths.component';

describe('SomeMythsComponent', () => {
  let component: SomeMythsComponent;
  let fixture: ComponentFixture<SomeMythsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeMythsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SomeMythsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
