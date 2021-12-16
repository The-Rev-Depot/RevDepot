import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ICart } from 'src/app/model/cart';
import { IItem } from 'src/app/model/item';
import { CartService } from 'src/app/service/cart.service';

import { CheckoutComponent } from './checkout.component';

fdescribe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  let getCartSpy: jasmine.Spy;
  let checkoutCartSpy: jasmine.Spy;
  let getMaxSpy: jasmine.Spy;
  let getTotalPriceSpy: jasmine.Spy;
  let getTotalQtySpy: jasmine.Spy;

  let expectedCart: ICart;
  let expectedMax: IItem[];

  beforeEach(async () => {

    expectedCart = {
      cartId: 0,
      user: {
        userId: 0,
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        urlProPic: "",
        birthday: ""
      },
      items: [
        {
          itemId: 0, quantity: 5, product: {
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
      ],
    }
    expectedMax = Array.from(expectedCart.items);
    expectedMax[0].quantity += 10;

    const cartServiceSpy = jasmine.createSpyObj('CartService', ['getCart', 'checkoutCart', 'getMax'
    , 'getTotalPrice', 'getTotalQty']);
    getCartSpy = cartServiceSpy.getCart.and.returnValue(expectedCart);
    checkoutCartSpy = cartServiceSpy.checkoutCart.and.returnValue(of(expectedCart.items));
    getMaxSpy = cartServiceSpy.getMax.and.returnValue(of(expectedMax));
    getTotalPriceSpy = cartServiceSpy.getTotalPrice.and.returnValue(expectedCart.items[0].product.productPrice);
    getTotalQtySpy = cartServiceSpy.getTotalQty.and.returnValue(expectedCart.items[0].quantity);

    await TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ],
      imports: [HttpClientModule, AppRoutingModule,
      MatCardModule],
      providers: [
        {provide: CartService, useValue: cartServiceSpy},
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the contents of the cart on init', () => {
    expect(getCartSpy.calls.any()).toBeTrue();
  });

  it('should initialize limitedSuppy based on cart items on init', () => {
    expect(component.limitedSupply.length-1).toEqual(expectedCart.items.length);
  });

  it('should recognize checkout is finished on successful checkout', () => {
    component.onCheckoutClicked();
    
    expect(component.checkoutFinished).toBeTrue();
    expect(component.cart!.items).toEqual(expectedCart.items);
    expect(checkoutCartSpy.calls.any()).toBeTrue();
  });

  it('should create cards for each item in cart', () => {
    let compiled = fixture.nativeElement;

    // Test title
    let cardTitles = compiled.querySelectorAll('mat-card-title');
    expect(cardTitles[0].textContent).toEqual(expectedCart.items[0].product.productName);

    // Test category
    let cardCategories = compiled.querySelectorAll('mat-card-subtitle');
    expect(cardCategories[0].textContent).toEqual(expectedCart.items[0].product.category);

    // Test card contents
    let cardContent = compiled.querySelectorAll('mat-card-content>div>div');
    expect(cardContent[0].textContent).toContain(expectedCart.items[0].quantity);
    expect(cardContent[1].textContent).toContain(expectedCart.items[0].quantity * expectedCart.items[0].product.productPrice);
  });


});
