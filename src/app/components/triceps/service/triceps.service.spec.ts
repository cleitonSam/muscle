import { TestBed } from '@angular/core/testing';

import { TricepsService } from './triceps.service';

describe('TricepsService', () => {
  let service: TricepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TricepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
