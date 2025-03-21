import { TestBed } from '@angular/core/testing';

import { OmbroTraseiroService } from './ombro-traseiro.service';

describe('OmbroTraseiroService', () => {
  let service: OmbroTraseiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmbroTraseiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
