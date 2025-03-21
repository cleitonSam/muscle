import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeitoDetailsComponent } from './peito-details.component';

describe('PeitoDetailsComponent', () => {
  let component: PeitoDetailsComponent;
  let fixture: ComponentFixture<PeitoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeitoDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeitoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
