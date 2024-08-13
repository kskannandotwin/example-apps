import { TestBed } from '@angular/core/testing';

import { PeppersService } from './peppers.service';

describe('PeppersService', () => {
  let service: PeppersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeppersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
