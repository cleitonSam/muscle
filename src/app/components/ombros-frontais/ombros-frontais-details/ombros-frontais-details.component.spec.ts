import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmbrosFrontaisDetailsComponent } from './ombros-frontais-details.component';

describe('OmbrosFrontaisDetailsComponent', () => {
  let component: OmbrosFrontaisDetailsComponent;
  let fixture: ComponentFixture<OmbrosFrontaisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmbrosFrontaisDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OmbrosFrontaisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
