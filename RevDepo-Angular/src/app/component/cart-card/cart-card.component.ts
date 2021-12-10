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
  quantityControl!: FormControl;
  private debounce: number = 20;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.quantityControl = new FormControl('');
    this.quantityControl.valueChanges
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe(query => {
        this.updateCartQuantity();
      });
  }

  updateCartQuantity(){ 
    if(this.item.quantity<1){
      this.item.quantity=1;
    }else if(this.item.quantity>99){
      this.item.quantity=99
    }
    this.cartService.updateCartQuantity(this.item);
  }

}
