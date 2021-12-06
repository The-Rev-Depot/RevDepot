import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesServiceService {

  constructor(private http: HttpClient) { }

  allDeals:any = [];
  url = "http://localhost:8080/product/deals";

  getAllItemsOnSale() {
    this.http.get(this.url).subscribe(
      response => {
        this.allDeals = response;
      }
    )
  }



}
