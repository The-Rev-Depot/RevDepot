import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockProductServiceService {

  url: string = `https://fakestoreapi.com/products`;
  productArray: Array<any> = [];

  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(response => {
      // this will populate the array with product info from the API
      this.productArray.push(response);
    })
   }
}
