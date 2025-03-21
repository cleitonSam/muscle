import { TestBed } from '@angular/core/testing';

import { ObliqueService } from './oblique.service';

describe('ObliqueService', () => {
  let service: ObliqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObliqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
