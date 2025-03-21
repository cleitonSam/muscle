import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapezioDetailsComponent } from './trapezio-details.component';

describe('TrapezioDetailsComponent', () => {
  let component: TrapezioDetailsComponent;
  let fixture: ComponentFixture<TrapezioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrapezioDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrapezioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
