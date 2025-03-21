import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapezioMedioComponent } from './trapezio-medio.component';

describe('TrapezioMedioComponent', () => {
  let component: TrapezioMedioComponent;
  let fixture: ComponentFixture<TrapezioMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrapezioMedioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrapezioMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
