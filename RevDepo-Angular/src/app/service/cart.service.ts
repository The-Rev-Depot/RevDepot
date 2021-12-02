import { Injectable } from '@angular/core';
import { IItem } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IItem[] =[];

  constructor() { }
}
