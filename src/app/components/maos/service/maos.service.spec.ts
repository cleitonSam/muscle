import { TestBed } from '@angular/core/testing';

import { MaosService } from './maos.service';

describe('MaosService', () => {
  let service: MaosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
