import { Injectable } from '@angular/core';
import { ICart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart?: ICart;
  constructor() {
    
   }
}
