import { TestBed } from '@angular/core/testing';

import { MockProductServiceService } from './mock-product-service.service';

describe('MockProductServiceService', () => {
  let service: MockProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
