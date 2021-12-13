import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IItem } from 'src/app/model/item';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-quantity-select',
  templateUrl: './quantity-select.component.html',
  styleUrls: ['./quantity-select.component.css']
})
export class QuantitySelectComponent implements OnInit {
  @Input() item!: IItem;
  quantityLimit: number = 99;
  interval: number = 400;
  intervalCount: number = 0;
  timeoutHandler: any;
  longhold: boolean = false;
  constructor(private http: HttpClient, private cartService: CartService) { }

  quantityControl!: FormControl;
  private debounce: number = 20;
  ngOnInit(): void {
  }

  increment() {

    if (this.item.quantity < this.quantityLimit) {
      this.item.quantity += 1;
      this.cartService.updateCartQuantity(this.item);
    }

    //if(this.onlyOnce)
    // this.http.get<number>('http://localhost:9999/inventory/quantity/' + this.item.product.productId).subscribe(
    //   (response) => {
    //     this.quantityLimit = response;
    //   }
    // );

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


}
