import { Component, OnInit } from '@angular/core';
import { MockProductServiceService } from 'src/app/service/mock-product-service.service';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

import { ProductServiceService } from 'src/app/service/product-service.service';
import { IProduct } from 'src/app/model/product';
import { HttpErrorResponse } from '@angular/common/http';
import { query } from '@angular/animations';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  providers: [FilterPipe]
})
export class SearchbarComponent implements OnInit {

  public product : IProduct[] | any ;
  

  mockProduct : any = [{
    productId : 1,
    productName : "TEST Revature Stickers",
    description : "A set of stylish Revature Stickers!",
    picURL : "sticker.url...",
    productPrice : 5 ,
    productRating : 4 ,
    category : "Miscellaneous",
    isOnSale : 1 

  }]
  searchList: any;

  

  constructor(
    private productService : ProductServiceService,
    private filter : FilterPipe,
    private mockProductService : MockProductServiceService
   ){ }

  public searchText : string = "";


  public letterCheck(element:any, index:any, array:any, text:string) {
    // element is the productName as a string
    let count:number = 0;
    let output: string = "NOT ENOUGH LETTERS MATCH";

    console.log(`letterCheck element: ${element}`);


    console.log(`letterCheck text: ${text}`);

    let name : string = element.productName;
    console.log(`letterCheck name: ${name}`);
    console.log(`letterCheck text: ${text}`);



    for (let i = 0; i<name.length; i ++) {
      for (let s = 0 ; s<text.length; s++) {
        if (text.toLowerCase().charAt(s) == name.toLowerCase().charAt(i)) {
          count ++ ;

        }
      }
    }
    
    if (count > 0) {
      output = element;

    }

    return output;

  }

  public checkLetter(array : any, text:string) {
    console.log(`array.productName: ${array.productName}`);
    return array.filter(
      function(item:any){
        return item.productName.toLowerCase().indexOf(text.toLowerCase()) !== -1
        
      })

  }


  /**
     * 
     * This function will take in a search text as a string and based on that string,  
     * it will filter through the list of products and return a new list of products
     * with matching text. 
     * 
     * @param search This is a keyword the user enters in order to filter through the list
     * of products
     * 
     */

  public filteredList(text:string) : any {

    if (text == ""){
      console.log(`text is ""`)
      console.log(this.product);

      return this.product;

    } else if (text != ""){
      console.log(`text has some input: ${text}`);
      // console.log(this.product.filter(this.letterCheck));
      // return this.product.filter(this.letterCheck);
      return this.checkLetter(this.product, text);
    }

  }

  public fList: any = this.filteredList(this.searchText) ;
  



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
