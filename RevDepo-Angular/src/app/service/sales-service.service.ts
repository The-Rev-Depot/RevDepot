import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesServiceService {

  constructor(private http: HttpClient) { }

  allDeals:any = [];
  url = "http://localhost:8080/product/deals";
  urlCategory = "http://localhost:8080/product/deals/category";

  getAllItemsOnSale(): Observable<any[]> {
    this.http.get<any>(this.url).subscribe(
      response => {
        this.allDeals = response;
        console.log(this.allDeals);
      }
      )
      return of(this.allDeals);
  }

  getAllItemsOnSaleByCategory(): Observable<any[]> {
    this.http.get<any>(this.urlCategory).subscribe(
      response => {
        this.allDeals = response;
        console.log(this.allDeals);
      }
      )
      return of(this.allDeals);
  }

}
