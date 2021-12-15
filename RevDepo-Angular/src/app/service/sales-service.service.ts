import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesServiceService {

  constructor(private http: HttpClient) { }

  allDeals:any = [];
  dealsByCategory:any = [];
  url = "http://localhost:9999/product/deals";
  urlCategory = "http://localhost:9999/product/deals/category"; 

  ngOnInit(): void {
    this.getAllItemsOnSale();
    console.log(this.allDeals);
  }

  getAllItemsOnSale(): any {
    this.http.get<any>(this.url).subscribe(
      response => {
        this.allDeals = response;
        console.log("1",this.allDeals);
      })
      return of(this.allDeals);
  }

  getAllDeals(){
    return this.allDeals;
  }

  getAllItemsOnSaleByCategory(category: string): Observable<any[]> {
    this.http.get<any>(category).subscribe(
      response => {
        this.dealsByCategory = response;
      })
      return of(this.dealsByCategory);
  }
}
