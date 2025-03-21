import { TestBed } from '@angular/core/testing';

import { TrapezioMedioService } from './trapezio-medio.service';

describe('TrapezioMedioService', () => {
  let service: TrapezioMedioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrapezioMedioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
