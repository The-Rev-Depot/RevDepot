import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private url= `http://localhost:8080/`;
  public productsArray : any;
  public product : any;

  constructor(private http:HttpClient, private router: Router) { }


  //Get Request to get all products
  public getIProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}inventory/items`)
  }

  /**
   * name
   */
  public getByLast(): Observable<IProduct>{

    this.productsArray = this.getIProduct;
    this.product = this.productsArray.pop;
    return this.product;

  }

  public moreInfoDis() : void
  {
    console.log("google")

   this.router.navigateByUrl('/product-details');
  }

  // public getAProduct(): Observable<IProduct> {
  //  return this.http.get<IProduct>(`${this.url}inventory/items`);

  // }

}
