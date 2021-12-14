import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ProductClass } from 'src/app/model/product-class';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { InventoryClass } from 'src/app/model/inventory-class';
//import { threadId } from 'worker_threads';
//import { ResultPageComponent } from '../result-page/result-page.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private productService:ProductServiceService/*, private result: ResultPageComponent*/) { }

  ngOnInit(): void {
    //this method will be called when the component loads, items on sales will populate
    this.getIProduct();

  }

  productsList: any;
  //initializing arrays to hold data retrieved from database
  public searchResults:any = [];
  public inventoryList: Array<InventoryClass> = []; //holds all items in inventory
  public productsArray: Array<ProductClass> = []; // holds items that are sorted by saleId



  //this method calls the getIProducts() method in the product service to retrieve all items
  public getIProduct(): void {
    const dealTitle = Boolean (1);

   this.productService.getIProduct().subscribe(
     (data) => {
       this.searchResults = data;

       for (let one of this.searchResults) {
         this.inventoryList.push(one);
       }
      // console.log(this.inventoryList);

      //this method sorts items that are on sale and holds them in a diffrent array
       this.getProduct(dealTitle);
     }
   );
 }


 public getProduct(dealTitle:any){

  //console.log(dealTitle);

  //this checks for the saleId of the products in the inventoryList
   for(let i =0; i<this.inventoryList.length; i++) {

    //console.log(this.inventoryList[i].product.saleId);
    //console.log(this.inventoryList[i].product);

    if(this.inventoryList[i].product.saleId == dealTitle){

    //console.log("Sorted: " + this.inventoryList[i].product.saleId);

    this.productsArray.push(this.inventoryList[i].product);

   }
   //console.log("After push: " + this.productsArray);
   }
   return this.productsArray[0];
}



}
