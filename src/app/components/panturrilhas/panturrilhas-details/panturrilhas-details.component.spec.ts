import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanturrilhasDetailsComponent } from './panturrilhas-details.component';

describe('PanturrilhasDetailsComponent', () => {
  let component: PanturrilhasDetailsComponent;
  let fixture: ComponentFixture<PanturrilhasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanturrilhasDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanturrilhasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
