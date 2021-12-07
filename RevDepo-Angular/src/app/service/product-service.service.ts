import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IProduct } from 'src/app/model/product'



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private url= `http://localhost:8080/`;

  constructor(
    private http: HttpClient
  ){ }


  //GET Request to get all products
  public getIProduct(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.url}inventory/view`)
  }

}