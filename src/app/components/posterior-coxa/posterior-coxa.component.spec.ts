import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteriorCoxaComponent } from './posterior-coxa.component';

describe('PosteriorCoxaComponent', () => {
  let component: PosteriorCoxaComponent;
  let fixture: ComponentFixture<PosteriorCoxaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosteriorCoxaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosteriorCoxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
