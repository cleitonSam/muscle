import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadricepsDetailsComponent } from './quadriceps-details.component';

describe('QuadricepsDetailsComponent', () => {
  let component: QuadricepsDetailsComponent;
  let fixture: ComponentFixture<QuadricepsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuadricepsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuadricepsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
