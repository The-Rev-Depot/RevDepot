import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { SalesDealsComponent } from './sales-deals.component';
import { of } from 'rxjs';

describe('SalesDealsComponent', () => {
  let component: SalesDealsComponent;
  let fixture: ComponentFixture<SalesDealsComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ SalesDealsComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(SalesDealsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  let httpClientSpy: any;
  let cartService: CartService;
  let router: Router;

  const mockObjects1: any[] = [
    {
        productId: 1,
        productName: "t-shirt",
        productDescription: "made of cotton",
        picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
        productPrice: 23.99,
        productRating: 3.5,
        productCategory: "clothes",
        saleId: 15
    },
    {
        productId: 2,
        productName: "t-shirt",
        productDescription: "made of cotton",
        picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
        productPrice: 23.99,
        productRating: 5.0,
        productCategory: "clothes",
        saleId: 15
    },
    {
        productId: 3,
        productName: "t-shirt",
        productDescription: "made of cotton",
        picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
        productPrice: 19.99,
        productRating: 4.0,
        productCategory: "clothes",
        saleId: 15
    },
    {
        productId: 4,
        productName: "t-shirt",
        productDescription: "made of cotton",
        picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
        productPrice: 15.99,
        productRating: 3.5,
        productCategory: "clothes",
        saleId: 15
    },
    {
        productId: 5,
        productName: "t-shirt",
        productDescription: "made of cotton",
        picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
        productPrice: 14.99,
        productRating: 3.0,
        productCategory: "clothes",
        saleId: 15
    },
    {
        productId: 6,
        productName: "t-shirt",
        productDescription: "made of cotton",
        picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
        productPrice: 20.99,
        productRating: 3.5,
        productCategory: "clothes",
        saleId: 15
    },
    {
        productId: 7,
        productName: "t-shirt",
        productDescription: "made of cotton",
        picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
        productPrice: 19.99,
        productRating: 4.0,
        productCategory: "clothes",
        saleId: 15
    },
    {
        productId: 8,
        productName: "t-shirt",
        productDescription: "made of cotton",
        picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
        productPrice: 18.99,
        productRating: 5.0,
        productCategory: "clothes",
        saleId: 15
    },
    {
        productId: 9,
        productName: "t-shirt",
        productDescription: "made of cotton",
        picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
        productPrice: 17.99,
        productRating: 3.0,
        productCategory: "clothes",
        saleId: 15
    },
    {
        productId: 11,
        productName: "T-Shirt - Black",
        productDescription: "Black T-shirt with the phrase \"CODE LIKE A BOSS\" on front. Revature Logo on back. Various sizes.",
        picUrl: "https://i.ebayimg.com/thumbs/images/g/yzMAAOSwaHZgy1VV/s-l300.jpg",
        productPrice: 12.99,
        productRating: 3.9,
        productCategory: "Apparel",
        saleId: 10
    },
    {
        productId: 14,
        productName: "Sticker",
        productDescription: "I love pie sticker",
        picUrl: "https://backendbase.com/i/p/i-love-pie-30ded-1.png",
        productPrice: 0.99,
        productRating: 4.9,
        productCategory: "Misc.",
        saleId: 10
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
    component = new SalesDealsComponent(cartService, router,httpClientSpy);
    httpClientSpy.get.and.returnValue(of(mockObjects1));
  })

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  xit('should hopefully pass', () => {
    const mockProduct = {
        productId: 1,
        productName: "t-shirt",
        productDescription: "made of cotton",
        picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
        productPrice: 23.99,
        productRating: 3.5,
        productCategory: "clothes",
        saleId: 15
    }

    component.getProductsOnSale().subscribe(
      (response: any[]) => {
        expect(response[0]).toEqual(mockProduct);
      }
    )
  })

  xit('it should return a list of products that equal mock Data', (done: DoneFn) => {
    
    httpClientSpy.get.and.returnValue(of(mockObjects1));
    let productsOnSale = component.getProductsOnSale();
    expect(productsOnSale).toEqual(mockObjects1);
  })

  xit('should return a list of products by category that equals mock data', (done:DoneFn) => {
    httpClientSpy.get.and.returnValue(of(mockObjects2));
    component.getProductsOnSaleByCategory("clothes").subscribe(
      (productsOnSale: any[]) => {
        expect(productsOnSale).toEqual(mockObjects2);
        done();
      }
    )
  })
});
