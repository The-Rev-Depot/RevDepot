import { TestBed } from '@angular/core/testing';

import { IsInCartService } from './is-in-cart.service';

describe('IsInCartService', () => {
  let service: IsInCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsInCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
