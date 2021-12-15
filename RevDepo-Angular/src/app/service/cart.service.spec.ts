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

 var item2 =   {
      itemId: 1, quantity: 3, product: {
        productId: 0,
        productName: "Renpho Powerful Portable Massage Gun",
        description: "",
        picUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        productPrice: 20,
        productRating: 0,
        category: "",
        isOnSale: 0
      }
    }
  var item3 =  {
      itemId: 2, quantity: 5, product: {
        productId: 0,
        productName: "Rollerblade Zetrablade Men's Adult Fitness Inline Skate",
        description: "",
        picUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        productPrice: 50,
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
  service.getCart();

}); 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not add item that already exists', () =>{
    service.addItem(item1);
    service.addItem(item2);
    service.addItem(item3);
    var itemArrayLength = service.getCartItems().length;

    service.addItem(item1);
    expect(service.getCartItems().length).toEqual(itemArrayLength);
  });

  it('should add item that does not exist', () =>{
    var item22 =  {
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
    service.addItem(item1);
    service.addItem(item2);
    service.addItem(item3);
    var itemArrayLength = service.getCartItems().length;

    service.addItem(item22);
    expect(service.getCartItems().length).toEqual(itemArrayLength +1);
  });

  it('should remove an item that is in the cart', () =>{
    service.addItem(item1);
    service.addItem(item2);
    service.addItem(item3);
    var itemArrayLength = service.getCartItems().length;

    service.removeItem(item1);
    expect(service.getCartItems().length).toBe(itemArrayLength -1);

  });
  it('should NOT remove an item that is not in the cart', () =>{

    var item22 =  {
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
    service.addItem(item1);
    service.addItem(item2);
    service.addItem(item3);
 
    var itemArrayLength = service.getCart().items.length;

    service.removeItem(item22);
    expect(service.getCartItems().length).toBe(itemArrayLength);

  });
  
  it('should add a PRODUCT that does not exist', () =>{
    var product22 =   {
        productId: 33,
        productName: "Not in the cart Item",
        description: "",
        picUrl: "Not a pic url",
        productPrice: 13,
        productRating: 0,
        category: "",
        isOnSale: 0
      
    }
    var itemArrayLength = service.getCartItems().length;

    service.addProductToCart(product22);
    expect(service.getCartItems().length).toEqual(itemArrayLength +1);
  });
  
  it('should NOT add a PRODUCT that already exists', () =>{
    var product22 =   {
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

    service.addProductToCart(product22);
    expect(service.getCart().items.length).toEqual(itemArrayLength);
  });
  it('should total items in cart', () =>{
   
    service.addItem(item1);
    service.addItem(item2);
    var total = (item1.product.productPrice * item1.quantity) + (item2.product.productPrice * item2.quantity);
   
    expect(service.getTotalPrice()).toEqual(total);
  });
  it('should DYNAMICALLY total items in cart', () =>{
   
    service.addItem(item1);
    service.addItem(item2);
    var total = (item1.product.productPrice * item1.quantity) + (item2.product.productPrice * item2.quantity);
   
    expect(service.getTotalPrice()).toEqual(total);

    service.removeItem(item2);
    var newTotal = item1.product.productPrice * item1.quantity;
    expect(service.getTotalPrice()).toEqual(newTotal);
  });


  it('should return true if item is in cart', () =>{
    
    service.addItem(item1);
    service.addItem(item2);
   
    expect(service.isInCart(item1.product)).toBeTruthy();
   
  });
  it('should return false if item is not in cart', () =>{
    var item22 =  {
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
    service.addItem(item1);
    service.addItem(item2);
   
    expect(service.isInCart(item22.product)).toBeFalsy();
  });
  

  

});