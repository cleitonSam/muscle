import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanturrilhasComponent } from './panturrilhas.component';

describe('PanturrilhasComponent', () => {
  let component: PanturrilhasComponent;
  let fixture: ComponentFixture<PanturrilhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanturrilhasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanturrilhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
