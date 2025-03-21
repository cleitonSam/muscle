import { TestBed } from '@angular/core/testing';

import { QuadricepsService } from './quadriceps.service';

describe('QuadricepsService', () => {
  let service: QuadricepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuadricepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
