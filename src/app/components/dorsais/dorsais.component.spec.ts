import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorsaisComponent } from './dorsais.component';

describe('DorsaisComponent', () => {
  let component: DorsaisComponent;
  let fixture: ComponentFixture<DorsaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DorsaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DorsaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
