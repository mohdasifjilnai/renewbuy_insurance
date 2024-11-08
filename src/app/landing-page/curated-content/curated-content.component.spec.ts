import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratedContentComponent } from './curated-content.component';

describe('CuratedContentComponent', () => {
  let component: CuratedContentComponent;
  let fixture: ComponentFixture<CuratedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuratedContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuratedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
