
import { Injectable } from '@angular/core';
import { ICart } from '../model/cart';
import { IItem } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart?: ICart;
  constructor() {
    
   }
}
