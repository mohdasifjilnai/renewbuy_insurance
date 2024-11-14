import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSurePlansComponent } from './not-sure-plans.component';

describe('NotSurePlansComponent', () => {
  let component: NotSurePlansComponent;
  let fixture: ComponentFixture<NotSurePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotSurePlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotSurePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
