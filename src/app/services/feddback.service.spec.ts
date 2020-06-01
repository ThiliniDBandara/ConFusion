import { TestBed } from '@angular/core/testing';

import { FeddbackService } from './feddback.service';

describe('FeddbackService', () => {
  let service: FeddbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeddbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
