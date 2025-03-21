import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InferiorCostasComponent } from './inferior-costas.component';

describe('InferiorCostasComponent', () => {
  let component: InferiorCostasComponent;
  let fixture: ComponentFixture<InferiorCostasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InferiorCostasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InferiorCostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
