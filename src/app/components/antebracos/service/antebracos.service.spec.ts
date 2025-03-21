import { TestBed } from '@angular/core/testing';

import { AntebracosService } from './antebracos.service';

describe('AntebracosService', () => {
  let service: AntebracosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntebracosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
