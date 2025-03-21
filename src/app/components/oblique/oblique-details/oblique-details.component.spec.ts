import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObliqueDetailsComponent } from './oblique-details.component';

describe('ObliqueDetailsComponent', () => {
  let component: ObliqueDetailsComponent;
  let fixture: ComponentFixture<ObliqueDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObliqueDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObliqueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
