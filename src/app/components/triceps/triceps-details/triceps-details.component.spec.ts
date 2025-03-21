import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TricepsDetailsComponent } from './triceps-details.component';

describe('TricepsDetailsComponent', () => {
  let component: TricepsDetailsComponent;
  let fixture: ComponentFixture<TricepsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TricepsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TricepsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
