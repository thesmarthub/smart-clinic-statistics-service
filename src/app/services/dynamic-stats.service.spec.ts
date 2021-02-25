import { TestBed } from '@angular/core/testing';

import { DynamicStatsService } from './dynamic-stats.service';

describe('DynamicStatsService', () => {
  let service: DynamicStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
