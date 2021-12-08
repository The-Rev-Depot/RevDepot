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

  getAllItemsOnSale(): Observable<any[]> {
    this.http.get<any>(this.url).subscribe(
      response => {
        this.allDeals = response;
        console.log(this.allDeals);
      }
      )
      return of(this.allDeals);
  }



}
