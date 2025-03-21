import { TestBed } from '@angular/core/testing';

import { GluteosService } from './gluteos.service';

describe('GluteosService', () => {
  let service: GluteosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GluteosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
