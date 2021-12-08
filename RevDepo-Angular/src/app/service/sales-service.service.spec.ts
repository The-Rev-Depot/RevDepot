import { TestBed,inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { SalesServiceService } from './sales-service.service';
import { Product } from '../model/product';
import { HttpEvent, HttpEventType } from '@angular/common/http';


fdescribe('SalesServiceService', () => {
  let service: SalesServiceService;
  let httpClientSpy: any;
  
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SalesServiceService(httpClientSpy);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('it should return a list where the observable equals the mock Data', (done: DoneFn) => {
          const mockObjects: Product[] = [{
            productId: 0,
            productName: "test name",
            description: "test description",
            picUrl: "com",
            productPrice: 10.99,
            category: "category",
            isOnSale: 10,
            productRating:5
          },
          {
            productId: 1,
            productName: "test name",
            description: "test description",
            picUrl: "com",
            productPrice: 10.99,
            category: "category",
            isOnSale: 10,
            productRating:5
          }]
          
          httpClientSpy.get.and.returnValue(of(mockObjects));


          service.getAllItemsOnSale().subscribe(
            ( productsOnSale: any[]) => {
              expect(productsOnSale).toEqual(mockObjects);
              done();
            }
          )
         
  })

  
});
