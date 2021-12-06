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
  displayedColumns: string[] = ['quantity', 'productName', 'productPrice'];//['Quantity', 'Product Image', 'Product', 'Price'];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();



  }

  /**
   * Checks out items in cart. Sends request to update inventory in backend.
   */
  onCheckoutClicked() {
    console.log('checking out');
    this.cartService.checkoutCart().subscribe(
      (items)=> {
        console.log(items);
      }
    );
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

}
