import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapezioMedioDetailsComponent } from './trapezio-medio-details.component';

describe('TrapezioMedioDetailsComponent', () => {
  let component: TrapezioMedioDetailsComponent;
  let fixture: ComponentFixture<TrapezioMedioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrapezioMedioDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrapezioMedioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
