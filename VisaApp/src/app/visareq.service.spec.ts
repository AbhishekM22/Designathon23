import { TestBed } from '@angular/core/testing';

import { VisareqService } from './visareq.service';

describe('VisareqService', () => {
  let service: VisareqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisareqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
