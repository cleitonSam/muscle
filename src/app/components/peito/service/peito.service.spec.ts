import { TestBed } from '@angular/core/testing';

import { PeitoService } from './peito.service';

describe('PeitoService', () => {
  let service: PeitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
