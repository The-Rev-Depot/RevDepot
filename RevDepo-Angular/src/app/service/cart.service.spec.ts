import { HttpClientModule } from '@angular/common/http';
import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

fdescribe('CartService', () => {
var item1 =  {
  itemId: 0, quantity: 1, product: {
    productId: 1,
    productName: "Computer Tower Stand",
    description: "",
    picUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    productPrice: 15,
    productRating: 0,
    category: "",
    isOnSale: 0
  }
}
  
  let service: CartService;


  beforeEach(() => {
    TestBed.configureTestingModule({  
    imports: [
        HttpClientModule,
      ]
   
  }); 
  service = TestBed.inject(CartService);
  console.log("before cart is set");
  service.setCart();
  console.log("after cart is set");
}); 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not add item that already exists', () =>{
   
    var itemArrayLength = service.getCart().items.length;

    service.addItem(item1);
    expect(service.getCart().items.length).toEqual(itemArrayLength);
  });

  it('should add item that does not exist', () =>{
    var item2 =  {
      itemId: 4, quantity: 4, product: {
        productId: 33,
        productName: "Not in the cart Item",
        description: "",
        picUrl: "Not a pic url",
        productPrice: 13,
        productRating: 0,
        category: "",
        isOnSale: 0
      }
    }
    var itemArrayLength = service.getCart().items.length;

    service.addItem(item2);
    expect(service.getCart().items.length).toEqual(itemArrayLength +1);
  });

  it('should remove an item that is in the cart', () =>{

    var itemArrayLength = service.getCart().items.length;

    service.removeItem(item1);
    expect(service.getCartItems().length).toBe(itemArrayLength -1);

  });
  it('should NOT remove an item that is not in the cart', () =>{

    var item2 =  {
      itemId: 4, quantity: 4, product: {
        productId: 33,
        productName: "Not in the cart Item",
        description: "",
        picUrl: "Not a pic url",
        productPrice: 13,
        productRating: 0,
        category: "",
        isOnSale: 0
      }
    }

    var itemArrayLength = service.getCart().items.length;

    service.removeItem(item2);
    expect(service.getCartItems().length).toBe(itemArrayLength);

  });
  
  it('should add a PRODUCT that does not exist', () =>{
    var item2 =   {
        productId: 33,
        productName: "Not in the cart Item",
        description: "",
        picUrl: "Not a pic url",
        productPrice: 13,
        productRating: 0,
        category: "",
        isOnSale: 0
      
    }
    var itemArrayLength = service.getCart().items.length;

    service.addProductToCart(item2);
    expect(service.getCart().items.length).toEqual(itemArrayLength +1);
  });
  
  it('should NOT add a PRODUCT that does exist', () =>{
    var item2 =   {
      productId: 1,
    productName: "Computer Tower Stand",
    description: "",
    picUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    productPrice: 15,
    productRating: 0,
    category: "",
    isOnSale: 0
      
    }
    var itemArrayLength = service.getCart().items.length;

    service.addProductToCart(item2);
    expect(service.getCart().items.length).toEqual(itemArrayLength);
  });

});
