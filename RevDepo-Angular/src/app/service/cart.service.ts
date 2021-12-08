import { Injectable } from '@angular/core';
import { ICart } from '../model/cart';
import { IItem } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: ICart = {
    cartId: -1,
    user: {
      userId: -1,
      username: '', 
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      urlProPic: '',
      birthday: new Date()
    },
    items: []
  };
  constructor() {

  }

  addItem(newItem: IItem) {
    this.cart?.items.push(newItem);
    this.updateCart();
  }

  removeItem(item: IItem) {
    let index: number | undefined = this.cart.items.indexOf(item);
    if (index != undefined)
      this.cart?.items.splice(index, 1);
  }

  getCartItems(){
    return this.cart.items;
  }

  getCart(){

  }

  updateCart(){
    
  }

  emptyCart(){
    this.cart.items = [];
  }

}
