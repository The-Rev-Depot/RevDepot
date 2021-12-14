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
  

  // early object used to test the functions below
  mockProduct : any = [{
    productId : 1,
    productName : "",
    description : "A set of stylish Revature Stickers!",
    picURL : "sticker.url...",
    productPrice : 5 ,
    productRating : 4 ,
    category : "Miscellaneous",
    isOnSale : 1 

  }]

  

  constructor(
    private productService : ProductServiceService,
    private filter : FilterPipe,
    private mockProductService : MockProductServiceService
   ){ }

  public searchText : string = "";


  // public letterCheck(element:any, index:any, array:any, text:string) {
  //   // element is the productName as a string
  //   let count:number = 0;
  //   let output: string = "NOT ENOUGH LETTERS MATCH";

  //   console.log(`letterCheck element: ${element}`);


  //   console.log(`letterCheck text: ${text}`);

  //   let name : string = element.productName;
  //   console.log(`letterCheck name: ${name}`);
  //   console.log(`letterCheck text: ${text}`);



  //   for (let i = 0; i<name.length; i ++) {
  //     for (let s = 0 ; s<text.length; s++) {
  //       if (text.toLowerCase().charAt(s) == name.toLowerCase().charAt(i)) {
  //         count ++ ;

  //       }
  //     }
  //   }
    
  //   if (count > 0) {
  //     output = element;

  //   }

  //   return output;

  // }


  /**
   * This function takes in an array and a string of text and returns a new array
   * which only contains elements that reflect the given string of text.
   * 
   * @param array This is any given product array which has the property of array.productName.
   * @param text This is the search text which will be used to filter the original array and return values that contain this text. 
   * @returns A new array is returned only with values that contain the input text.
   */
  public checkLetter(array : any, text:string) {
    // console.log(`checkLetter|array.productName: ${array.productName}`);
    return array.filter(
      function(item:any){
        // input text is made lowercase and all the blank spaces are removed.
        return item.productName.toLowerCase().indexOf(text.toLowerCase().replace(/\s/g,"")) !== -1
        
      })

  }


  /**
   * This functions takes in a string of text and filters the product array in order to 
   * help the searchbar feature work. 
   * 
   * @param text This is the search text which will be used to filter the original array and return values that contain this text. 
   * 
   * @returns Returns an empty array if there is no input text from the search bar or if 
   * the text does not match any of the product items names. Will return a filtered list of
   * items if the input text matches any part of the procuct's name. 
   * 
   */

  public filteredList(text:string) : any {

    if (text == ""){
      return [];

    } else if (text != ""){
      // console.log("test: ",this.checkLetter(this.product, text));
      return this.checkLetter(this.product, text);
    }

  }


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
