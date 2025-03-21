import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaosDetailsComponent } from './maos-details.component';

describe('MaosDetailsComponent', () => {
  let component: MaosDetailsComponent;
  let fixture: ComponentFixture<MaosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaosDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
