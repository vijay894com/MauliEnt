import { TestBed } from '@angular/core/testing';

import { ApiCallMainService } from './api-call-main.service';

describe('ApiCallMainService', () => {
  let service: ApiCallMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCallMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
