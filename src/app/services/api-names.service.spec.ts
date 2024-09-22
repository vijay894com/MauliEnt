import { TestBed } from '@angular/core/testing';

import { ApiNamesService } from './api-names.service';

describe('ApiNamesService', () => {
  let service: ApiNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
