import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ICart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';

import { CheckoutComponent } from './checkout.component';

fdescribe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  let getCartSpy: jasmine.Spy;

  let expectedCart: ICart;

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
      items: [],
    }

    const cartServiceSpy = jasmine.createSpyObj('CartService', ['getCart', 'checkoutCart', 'getMax'
    , 'getTotalPrice', 'getTotalQty']);
    getCartSpy = cartServiceSpy.getCart.and.returnValue(expectedCart);

    await TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ],
      imports: [HttpClientModule, AppRoutingModule],
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
});
