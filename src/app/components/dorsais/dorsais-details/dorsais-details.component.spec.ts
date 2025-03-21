import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorsaisDetailsComponent } from './dorsais-details.component';

describe('DorsaisDetailsComponent', () => {
  let component: DorsaisDetailsComponent;
  let fixture: ComponentFixture<DorsaisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DorsaisDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DorsaisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
