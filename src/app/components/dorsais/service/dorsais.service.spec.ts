import { TestBed } from '@angular/core/testing';

import { DorsaisService } from './dorsais.service';

describe('DorsaisService', () => {
  let service: DorsaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DorsaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
