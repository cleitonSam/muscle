import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InferiorCostasDetailsComponent } from './inferior-costas-details.component';

describe('InferiorCostasDetailsComponent', () => {
  let component: InferiorCostasDetailsComponent;
  let fixture: ComponentFixture<InferiorCostasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InferiorCostasDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InferiorCostasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
