import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicepsDetailsComponent } from './biceps-details.component';

describe('BicepsDetailsComponent', () => {
  let component: BicepsDetailsComponent;
  let fixture: ComponentFixture<BicepsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BicepsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BicepsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
