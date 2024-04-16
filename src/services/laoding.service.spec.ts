import { TestBed } from '@angular/core/testing';

import { LaodingService } from './laoding.service';

describe('LaodingService', () => {
  let service: LaodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaodingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
