import { Component, OnInit } from '@angular/core';
import { MockProductServiceService } from 'src/app/service/mock-product-service.service';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  providers: [FilterPipe]
})
export class SearchbarComponent implements OnInit {

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
    private filter : FilterPipe,
    private mockProductService : MockProductServiceService
   ){ }

   searchText = this.filter.transform;

   productArray = this.mockProductService.productArray;

  ngOnInit(): void {
    ;
  }

}
