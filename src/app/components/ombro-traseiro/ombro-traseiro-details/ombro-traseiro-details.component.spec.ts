import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmbroTraseiroDetailsComponent } from './ombro-traseiro-details.component';

describe('OmbroTraseiroDetailsComponent', () => {
  let component: OmbroTraseiroDetailsComponent;
  let fixture: ComponentFixture<OmbroTraseiroDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmbroTraseiroDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OmbroTraseiroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
