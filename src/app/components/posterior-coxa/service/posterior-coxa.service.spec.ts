import { TestBed } from '@angular/core/testing';

import { PosteriorCoxaService } from './posterior-coxa.service';

describe('PosteriorCoxaService', () => {
  let service: PosteriorCoxaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosteriorCoxaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
