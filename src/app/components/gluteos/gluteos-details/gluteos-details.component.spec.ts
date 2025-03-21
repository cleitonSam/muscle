import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GluteosDetailsComponent } from './gluteos-details.component';

describe('GluteosDetailsComponent', () => {
  let component: GluteosDetailsComponent;
  let fixture: ComponentFixture<GluteosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GluteosDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GluteosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
