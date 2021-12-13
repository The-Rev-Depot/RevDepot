import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart?: ICart;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();

  }

  /**
   * Checks out items in cart. Sends request to update inventory in backend.
   */
  onCheckoutClicked() {
    console.log('checking out');
    // .subscribe(responseOkFn, catchErrorResponseFn);
    this.cartService.checkoutCart().subscribe(
      (items)=> {
        console.log(items);
      },
      // Server responds with error if cart's items go beyond inventory's capacity
      (error: HttpErrorResponse) => {
        if (error.status == HttpStatusCode.Conflict) {
          console.log("Not enough inventory to handle checkout request!");
        }
      }
    );
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  getTotalQty() {
    return this.cartService.getTotalQty();
  }
}
