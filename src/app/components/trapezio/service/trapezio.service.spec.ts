import { TestBed } from '@angular/core/testing';

import { TrapezioService } from './trapezio.service';

describe('TrapezioService', () => {
  let service: TrapezioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrapezioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
