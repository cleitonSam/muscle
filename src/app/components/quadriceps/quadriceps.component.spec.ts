import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadricepsComponent } from './quadriceps.component';

describe('QuadricepsComponent', () => {
  let component: QuadricepsComponent;
  let fixture: ComponentFixture<QuadricepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuadricepsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuadricepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
