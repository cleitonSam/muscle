import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmbrosFrontaisComponent } from './ombros-frontais.component';

describe('OmbrosFrontaisComponent', () => {
  let component: OmbrosFrontaisComponent;
  let fixture: ComponentFixture<OmbrosFrontaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmbrosFrontaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OmbrosFrontaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
