import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaosComponent } from './maos.component';

describe('MaosComponent', () => {
  let component: MaosComponent;
  let fixture: ComponentFixture<MaosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
