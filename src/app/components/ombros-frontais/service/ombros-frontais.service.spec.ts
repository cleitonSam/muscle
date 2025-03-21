import { TestBed } from '@angular/core/testing';

import { OmbrosFrontaisService } from './ombros-frontais.service';

describe('OmbrosFrontaisService', () => {
  let service: OmbrosFrontaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmbrosFrontaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
