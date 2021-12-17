import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ICartCheck {
  productId: number,
  isInCart: BehaviorSubject<boolean>,
  isInCartMessage: Observable<boolean>
}

@Injectable({
  providedIn: 'root'
})
export class IsInCartService {
  allIsInCart: ICartCheck[] = [];

  constructor() { }

  createCheck(productId: number) {
    let exists: boolean = false;
    for (let element of this.allIsInCart) {
      if (element.productId == productId) {
        exists = true;
        return this.allIsInCart.indexOf(element);
      }
    }
    let tempBhS = new BehaviorSubject<boolean>(false);
    let tempObs = tempBhS.asObservable();
    this.allIsInCart.push({
      productId: productId,
      isInCart: tempBhS,
      isInCartMessage: tempObs
    });
    return this.allIsInCart.length-1;
  }

  setIsInCart(productId: number, message: boolean) {
    this.allIsInCart[productId].isInCart.next(message);
  }

  emptyCart(){
    for (let element of this.allIsInCart) {
      element.isInCart.next(false);
    }
  }
}
