import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { getLocaleDateTimeFormat } from '@angular/common';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from '../model/cart';
import { IItem } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart!: ICart;
  constructor(private httpClient: HttpClient) {
    this.getCart();
   }

   addItem(newItem: IItem) {
    this.cart?.items.push(newItem);
  }

  removeItem(item: IItem) {
    let index: number | undefined = this.cart.items.indexOf(item);
    if (index != undefined)
      this.cart?.items.splice(index, 1);
  }

  getCartItems(){
    return this.cart.items;
  }

   /**
    * Calculates the total price of all items in the cart.
    * @returns The total price
    */
   getTotalPrice(): number {
     let total: number = 0;

     this.cart?.items.forEach(
       (value)=>{
        total += value.product.productPrice * value.quantity;
       }
     );

     return total;
   }

   getTotalQty(): number {
     let total: number =0;

     this.cart?.items.forEach(
      (value)=>{
       total +=  value.quantity;
      }
    );

    return total;
   }

   checkoutCart(): Observable<IItem[]> {
    const httpPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
     return this.httpClient.post<IItem[]>(`http://localhost:9999/inventory/update`, this.cart!.items, httpPost);
   }

   getMax(): Observable<IItem[]> {
    const httpPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
     return this.httpClient.post<IItem[]>(`http://localhost:9999/inventory/getMax`, this.cart!.items, httpPost);
   }
   getCart(): ICart {
     // Hardcoded for now
    return this.cart = {
      cartId: 0,
      user: {
        userId: 0,
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        urlProPic: "",
        birthday: ""
      },
      items: [
        {
          itemId: 0, quantity: 30, product: {
            productId: 1,
            productName: "Computer Tower Stand",
            description: "",
            picUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
            productPrice: 15,
            productRating: 0,
            category: "",
            isOnSale: 0
          }
        },
        // {
        //   itemId: 1, quantity: 3, product: {
        //     productId: 0,
        //     productName: "Renpho Powerful Portable Massage Gun",
        //     description: "",
        //     picUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        //     productPrice: 20,
        //     productRating: 0,
        //     category: "",
        //     isOnSale: 0
        //   }
        // },
        // {
        //   itemId: 2, quantity: 5, product: {
        //     productId: 0,
        //     productName: "Rollerblade Zetrablade Men's Adult Fitness Inline Skate",
        //     description: "",
        //     picUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        //     productPrice: 50,
        //     productRating: 0,
        //     category: "",
        //     isOnSale: 0
        //   }
        // }
      ]
    };
  }
}
