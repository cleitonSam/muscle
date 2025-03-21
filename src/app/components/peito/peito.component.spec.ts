import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeitoComponent } from './peito.component';

describe('PeitoComponent', () => {
  let component: PeitoComponent;
  let fixture: ComponentFixture<PeitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeitoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
