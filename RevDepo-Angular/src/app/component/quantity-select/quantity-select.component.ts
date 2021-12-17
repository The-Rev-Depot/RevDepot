import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IItem } from 'src/app/model/item';
import { IProduct } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { IsInCartService } from 'src/app/service/is-in-cart.service';

@Component({
  selector: 'app-quantity-select',
  templateUrl: './quantity-select.component.html',
  styleUrls: ['./quantity-select.component.css']
})
export class QuantitySelectComponent implements OnInit {
  @Input() product!: IProduct;
  item!: IItem;
  indexOfCartCheck: number = -1;
  quantityLimit: number = 99;
  interval: number = 400;
  intervalCount: number = 0;
  timeoutHandler: any;
  longhold: boolean = false;
  isInCart!: boolean;
  isInCartSubscription: Subscription = new Subscription;
  loggedIn!: boolean;
  loggedInSubscription: Subscription = new Subscription;

  constructor(private http: HttpClient, private cartService: CartService, private cartCheck: IsInCartService) {

  }

  addToCart() {
    this.item = {
      itemId: 0,
      quantity: 1,
      product: this.product
    }
    console.log("The index that we added ", this.indexOfCartCheck);
    this.cartService.addProductToCart(this.product);
    this.cartCheck.setIsInCart(this.indexOfCartCheck, true);
    this.item = this.cartService.getItemFromCart(this.product);
  }

  quantityControl!: FormControl;
  private debounce: number = 20;

  ngOnInit(): void {
    this.item = this.cartService.getItemFromCart(this.product);

    this.loggedInSubscription = this.cartService.loggedInMessage.subscribe(message => this.loggedIn = message);

    this.indexOfCartCheck = this.cartCheck.createCheck(this.product.productId);
    console.log("The index that I get ", this.indexOfCartCheck);

    this.isInCartSubscription = this.cartCheck.allIsInCart[this.indexOfCartCheck].isInCartMessage.subscribe(
      message => this.isInCart = message);
    
    this.http.get<number>('http://localhost:9999/inventory/quantity/' + this.product.productId).subscribe((response) => {
      this.quantityLimit = response;
    });
  }

  increment() {

    if (this.item.quantity < this.quantityLimit) {
      this.item.quantity += 1;
      this.cartService.updateCartQuantity(this.item);
    }

  }

  decrement() {
    if (this.item.quantity > 1) {
      this.item.quantity -= 1;
      this.cartService.updateCartQuantity(this.item);
    }
  }

  updateCartQuantity() {
    this.cartService.updateCartQuantity(this.item);
  }

  public mouseup() {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = null;
      this.interval = 400;
      this.intervalCount = 0;
    }
  }

  public mousedown(increment: boolean) {
    this.timeoutHandler = setInterval(() => {

      this.callback(increment);

      clearInterval(this.timeoutHandler);

      this.timeoutHandler = setInterval(() => {
        this.callback(increment);

        if (this.intervalCount == 10) {

          clearInterval(this.timeoutHandler);

          this.timeoutHandler = setInterval(() => {
            this.callback(increment);
          }, 100);
        }
      }, 200);
    }, 500);
  }

  callback(increment: boolean) {
    if (increment) {
      this.increment();
    }
    else {
      this.decrement();
    }
    this.intervalCount++;
  }

  removeItem(){
    this.cartService.removeItem(this.item);
    this.cartCheck.setIsInCart(this.indexOfCartCheck, false);
  }

  ngOnDestroy() {
    this.loggedInSubscription.unsubscribe();
    this.isInCartSubscription.unsubscribe();
  }
}
