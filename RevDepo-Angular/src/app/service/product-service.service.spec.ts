import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductServiceService } from './product-service.service';

describe('ProductServiceService', () => {
  let service: ProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
