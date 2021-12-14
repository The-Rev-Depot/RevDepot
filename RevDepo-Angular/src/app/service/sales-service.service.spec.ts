import { TestBed,inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { SalesServiceService } from './sales-service.service';
import { IProduct } from '../model/product';
import { ProductClass } from 'src/app/model/product-class';
import { HttpEvent, HttpEventType } from '@angular/common/http';


describe('SalesServiceService', () => {
  let service: SalesServiceService;
  let httpClientSpy: any;

  const mockObjects1: IProduct[] = [{
    productId: 1,
    productName: "t-shirt",
    description: "made of cotton",
    picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
    productPrice: 23.99,
    category: "clothes",
    isOnSale: 1,
    productRating:3.5
  },
  {
    productId: 3,
    productName: "T-Shirt - Black",
    description: 'Black T-shirt with the phrase "CODE LIKE A BOSS" on front. Revature Logo on back. Various sizes.',
    picUrl: "https://i.ebayimg.com/thumbs/images/g/yzMAAOSwaHZgy1VV/s-l300.jpg",
    productPrice: 12.99,
    category: "apparel",
    isOnSale: 10,
    productRating:3.9
  }, 
  {
    productId: 6,
    productName: "Sticker",
    description: 'I love pie sticker',
    picUrl: "https://backendbase.com/i/p/i-love-pie-30ded-1.png",
    productPrice: 0.99,
    category: "Misc.",
    isOnSale: 10,
    productRating:4.9
  }]

  const mockObjects2: IProduct[] = [{
    productId: 1,
    productName: "t-shirt",
    description: "made of cotton",
    picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
    productPrice: 23.99,
    category: "clothes",
    isOnSale: 1,
    productRating:3.5
  }]

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SalesServiceService(httpClientSpy);
    httpClientSpy.get.and.returnValue(of(mockObjects1));
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('it should return a list where the observable equals the mock Data', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(mockObjects1));
    service.getAllItemsOnSale().subscribe(
      ( productsOnSale: any[]) => {
        expect(productsOnSale).toEqual(mockObjects1);
        done();
      }
    )
  })


  it('should return a list of products by category that equals mock data', (done:DoneFn) => {
    httpClientSpy.get.and.returnValue(of(mockObjects2));
    service.getAllItemsOnSaleByCategory("clothes").subscribe(
      (productsOnSale: any[]) => {
        expect(productsOnSale).toEqual(mockObjects2);
        done();
      }
    )
  })


});
