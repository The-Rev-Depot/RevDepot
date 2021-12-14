import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IItem } from 'src/app/model/item';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent implements OnInit {
  @Input() item!: IItem;
  
  constructor(private cartService: CartService){}
  
  ngOnInit(): void {
    console.log('when card is made',this.item.product);
  }
  removeItem(){
    this.cartService.removeItem(this.item);
  }
  checkCartQuantity(){
  this.checkCartQuantity();
  
}
}
