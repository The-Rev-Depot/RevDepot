import { TestBed,inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { SalesServiceService } from './sales-service.service';
import { Product } from '../model/product';
import { HttpEvent, HttpEventType } from '@angular/common/http';


fdescribe('SalesServiceService', () => {
  let service: SalesServiceService;
  let httpTestCont: HttpTestingController;
  const httpClient = jasmine.createSpyObj('HttpClient',['get']);
  

  let fetchedData:any = []

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SalesServiceService]
    });
    service = TestBed.get(SalesServiceService);
    httpTestCont = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should get all products on sale', () => {
    
    httpClient.get.and.returnValue(200);
    expect(service.getAllItemsOnSale()).toBe(200 as any);
  })

  // this aint working yet, returned objects are undefined
  // it('first item should have a isOnSale value of 10',
  //   inject(
  //     [HttpTestingController, SalesServiceService],
  //     (httpMock: HttpTestingController, service: SalesServiceService) => {
        
  //       const mockObject: Product = {
  //         productId: 0,
  //         productName: "test name",
  //         description: "test description",
  //         picUrl: "com",
  //         productPrice: 10.99,
  //         category: "category",
  //         isOnSale: 10,
  //         productRating:5
  //       }

  //       service.getAllItemsOnSale();
  //       expect(service.allDeals[0]).toEqual(mockObject);

  //       // service.getAllItemsOnSale().subscribe(
  //       //   (response) => {
  //       //     fetchedData = response;
  //       //     console.log(fetchedData);
  //       //     expect(fetchedData[0]);
            
  //       //   }
  //       // )
  //     }
  //   )  
  // )
});
