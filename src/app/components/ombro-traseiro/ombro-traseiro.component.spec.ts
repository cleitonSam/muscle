import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmbroTraseiroComponent } from './ombro-traseiro.component';

describe('OmbroTraseiroComponent', () => {
  let component: OmbroTraseiroComponent;
  let fixture: ComponentFixture<OmbroTraseiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmbroTraseiroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OmbroTraseiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
