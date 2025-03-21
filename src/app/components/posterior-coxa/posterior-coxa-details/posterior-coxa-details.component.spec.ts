import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteriorCoxaDetailsComponent } from './posterior-coxa-details.component';

describe('PosteriorCoxaDetailsComponent', () => {
  let component: PosteriorCoxaDetailsComponent;
  let fixture: ComponentFixture<PosteriorCoxaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosteriorCoxaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosteriorCoxaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
