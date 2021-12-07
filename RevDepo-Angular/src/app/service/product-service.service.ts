import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private url= `http://localhost:8080/`;

  constructor(private http:HttpClient) { }


  //Get Request to get all products
  public getIProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}inventory/items`) 
  }

}
