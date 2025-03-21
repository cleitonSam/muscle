import { TestBed } from '@angular/core/testing';

import { PanturrilhasService } from './panturrilhas.service';

describe('PanturrilhasService', () => {
  let service: PanturrilhasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanturrilhasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
