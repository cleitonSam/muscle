import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdomenDetailsComponent } from './abdomen-details.component';

describe('AbdomenDetailsComponent', () => {
  let component: AbdomenDetailsComponent;
  let fixture: ComponentFixture<AbdomenDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbdomenDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbdomenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
