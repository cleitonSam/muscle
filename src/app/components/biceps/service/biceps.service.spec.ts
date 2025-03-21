import { TestBed } from '@angular/core/testing';

import { BicepsService } from './biceps.service';

describe('BicepsService', () => {
  let service: BicepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BicepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
