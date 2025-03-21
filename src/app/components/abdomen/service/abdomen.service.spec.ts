import { TestBed } from '@angular/core/testing';

import { AbdomenService } from './abdomen.service';

describe('AbdomenService', () => {
  let service: AbdomenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbdomenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
