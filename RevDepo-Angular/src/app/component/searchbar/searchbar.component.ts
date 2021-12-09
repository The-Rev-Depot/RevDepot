import { Component, OnInit } from '@angular/core';
import { MockProductServiceService } from 'src/app/service/mock-product-service.service';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

import { ProductServiceService } from 'src/app/service/product-service.service';
import { IProduct } from 'src/app/model/product';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  providers: [FilterPipe]
})
export class SearchbarComponent implements OnInit {

  public product : IProduct[] | any ;
  

  mockProduct : any = {
    productId : 1,
    productName : "Revature Stickers",
    description : "A set of stylish Revature Stickers!",
    picURL : "sticker.url...",
    productPrice : 5 ,
    productRating : 4 ,
    category : "Miscellaneous",
    isOnSale : 1 

  }

  

  constructor(
    private productService : ProductServiceService,
    private filter : FilterPipe,
    private mockProductService : MockProductServiceService
   ){ }

  //  searchText = this.filter.transform;
  searchText = "";

  //  productArray = this.mockProductService.productArray;

  ngOnInit(): void {
    this.getIProduct();
  }

  // Read
  public getIProduct() : void {
    console.log(this.product);
    this.productService.getIProduct()
    .subscribe(
      (response:IProduct[]) => {
        this.product = response
      },
      (error: HttpErrorResponse)=> {
        console.log(error)
      }
    );
  }

}
