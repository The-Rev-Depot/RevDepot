import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from '../model/cart';
import { IItem } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart?: ICart;
  constructor(private httpClient: HttpClient) {
    this.getCart();
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

   checkoutCart(): Observable<IItem[]> {
    const httpPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
     return this.httpClient.post<IItem[]>(`http://localhost:8080/inventory/update`, this.cart!.items, httpPost);
   }

   getCart(): ICart {
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
        birthday: new Date()
      },
      items: [
        {
          itemId: 0, quantity: 1, product: {
            productId: 0,
            productName: "prod1",
            description: "",
            picUrl: "",
            productPrice: 15,
            productRating: 0,
            category: "",
            isOnSale: 0
          }
        },
        {
          itemId: 1, quantity: 3, product: {
            productId: 0,
            productName: "prod2",
            description: "",
            picUrl: "",
            productPrice: 20,
            productRating: 0,
            category: "",
            isOnSale: 0
          }
        },
        {
          itemId: 2, quantity: 5, product: {
            productId: 0,
            productName: "prod3",
            description: "",
            picUrl: "",
            productPrice: 50,
            productRating: 0,
            category: "",
            isOnSale: 0
          }
        }
      ]
    };
  }
}
