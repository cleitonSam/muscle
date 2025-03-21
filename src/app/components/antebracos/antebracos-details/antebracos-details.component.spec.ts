import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntebracosDetailsComponent } from './antebracos-details.component';

describe('AntebracosDetailsComponent', () => {
  let component: AntebracosDetailsComponent;
  let fixture: ComponentFixture<AntebracosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntebracosDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AntebracosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
