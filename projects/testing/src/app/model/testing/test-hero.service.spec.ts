import { TestBed } from '@angular/core/testing';

import { TestHeroService } from './test-hero.service';

describe('TestHeroService', () => {
  let service: TestHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
