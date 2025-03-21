import { TestBed } from '@angular/core/testing';

import { InferiorCostasService } from './inferior-costas.service';

describe('InferiorCostasService', () => {
  let service: InferiorCostasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InferiorCostasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
