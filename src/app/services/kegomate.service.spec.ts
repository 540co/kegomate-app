import { TestBed } from '@angular/core/testing';

import { KegomateService } from './kegomate.service';

describe('KegomateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KegomateService = TestBed.get(KegomateService);
    expect(service).toBeTruthy();
  });
});
