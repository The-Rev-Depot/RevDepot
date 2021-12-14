import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart?: ICart;
  loggedIn: boolean = true;
  error: boolean = false;
  limitedSupply: boolean [] = [false];
  checkoutFinished: boolean = false;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    
    for (let item of this.cart.items) {
      this.limitedSupply.push(false);
    }
    
    // Check login status    
    //this.checkLogin();
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
        this.checkoutFinished = true;
      },
      // Server responds with error if cart's items go beyond inventory's capacity
      (error: HttpErrorResponse) => {
        if (error.status == HttpStatusCode.Conflict) {
          console.log("Not enough inventory to handle checkout request!");
          this.cartService.getMax().subscribe((items) => {
            console.log(items);
            for (let i = 0; i < items.length; i++) {
              if (this.cart!.items[i].quantity != items[i].quantity ) {
                this.limitedSupply[i] = true;
                
              }

            }
            
           
            this.cart!.items = items;
            this.error = true;
          });
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

  checkLogin() {
    if (JSON.parse(sessionStorage.getItem('userObject')!).object == null){
      this.loggedIn = false;
      this.router.navigate(["/login"]);
    }
  }

}
