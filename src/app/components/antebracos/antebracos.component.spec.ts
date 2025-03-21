import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntebracosComponent } from './antebracos.component';

describe('AntebracosComponent', () => {
  let component: AntebracosComponent;
  let fixture: ComponentFixture<AntebracosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntebracosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AntebracosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
