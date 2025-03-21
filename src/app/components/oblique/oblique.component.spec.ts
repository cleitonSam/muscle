import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObliqueComponent } from './oblique.component';

describe('ObliqueComponent', () => {
  let component: ObliqueComponent;
  let fixture: ComponentFixture<ObliqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObliqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObliqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
