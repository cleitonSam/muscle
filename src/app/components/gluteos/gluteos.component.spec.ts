import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GluteosComponent } from './gluteos.component';

describe('GluteosComponent', () => {
  let component: GluteosComponent;
  let fixture: ComponentFixture<GluteosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GluteosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GluteosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
