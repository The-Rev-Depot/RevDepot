import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICart } from '../model/cart';
import { IItem } from '../model/item';
import { IProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart!: ICart;
  cartIsEmpty!: boolean; 
  constructor(private httpClient: HttpClient) {}

  getCart() {
    return this.cart;
  }

  addItem(newItem: IItem) {
    if(!this.isInCart(newItem.product)){
      this.cart?.items.push(newItem);
      this.cartIsEmpty = false;
    }
    else{return;
    } 
  }

  isInCart(product: IProduct): boolean{
    console.log(`passed product: `, product);
    for(let element of this.cart.items){
      console.log(`each product: `, element);
      if(element.product.productId==product.productId){
        return true;
      }
    }

    return false;
  }

  getItemFromCart(product: IProduct): IItem{
    console.log(`passed product: `, product);
    for(let element of this.cart.items){
      console.log(`each product: `, element);
      if(element.product.productId==product.productId){
        return element;
      }
    }
    return {itemId:-1, quantity:-1, product};
  }

  addProductToCart(newProduct: IProduct){
    if(!this.isInCart(newProduct)){
      this.cart?.items.push({ itemId: 0,quantity: 1,product: newProduct});
    }
    
  }

  removeItem(item: IItem) {
    if(this.isInCart(item.product)){
    let index: number | undefined = this.cart.items.indexOf(item);
    if (index != undefined)
      this.cart?.items.splice(index, 1);
      if(this.cart?.items.length == 0){
        this.cartIsEmpty = true;
      
      }
      
    
  }
  else{
  
    return;
  }
}
  getCartItems() {
    return this.cart.items;
  }

  updateCartQuantity(item: IItem) {
    let index: number = this.cart.items.indexOf(item);
    this.cart.items[index].quantity = item.quantity;
  }

  /**
   * Calculates the total price of all items in the cart.
   * @returns The total price
   */
  getTotalPrice(): number {
    let total: number = 0;

    this.cart?.items.forEach(
      (value) => {
        total += value.product.productPrice * value.quantity;
      }
    );

    return total;
  }

  getTotalQty(): number {
    let total: number = 0;

    this.cart?.items.forEach(
      (value) => {
        total += value.quantity;
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
  //  getCart(): ICart {
  //    // Hardcoded for now
  //   return this.cart = {
  //     cartId: 0,
  //     user: {
  //       userId: 0,
  //       username: "",
  //       password: "",
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       urlProPic: "",
  //       birthday: ""
  //     },
  //     items: [
  //       {
  //         itemId: 0, quantity: 5, product: {
  //           productId: 1,
  //           productName: "Computer Tower Stand",
  //           description: "",
  //           picUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  //           productPrice: 15,
  //           productRating: 0,
  //           category: "",
  //           isOnSale: 0
  //         }
  //       },
  //      /* {
  //         itemId: 1, quantity: 3, product: {
  //           productId: 2,
  //           productName: "Renpho Powerful Portable Massage Gun",
  //           description: "",
  //           picUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  //           productPrice: 20,
  //           productRating: 0,
  //           category: "",
  //           isOnSale: 0
  //         }
  //       },
  //       {
  //         itemId: 2, quantity: 5, product: {
  //           productId: 3,
  //           productName: "Rollerblade Zetrablade Men's Adult Fitness Inline Skate",
  //           description: "",
  //           picUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  //           productPrice: 50,
  //           productRating: 0,
  //           category: "",
  //           isOnSale: 0
  //         }
  //       }*/
  //     ]
  //   };
  // }
}
