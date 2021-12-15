import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { InventoryClass } from 'src/app/model/inventory-class';
import { ProductClass } from 'src/app/model/product-class';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  productsList: any;
  //initializing arrays to hold data retrieved from database
  public searchResults:any = [];
  public inventoryList: Array<any> = []; //holds all items in inventory
  public productsArray: Array<ProductClass> = []; // holds item with matching productId


  constructor(private router: Router, private route: ActivatedRoute, private productService:ProductServiceService) { }

  ngOnInit(): void {
    //this method will be called when the component loads, product will populate based on productId
    this.getIProduct();
  }

  //this method calls the getIProducts() method in the product service to retrieve all items
  public getIProduct(): void {
    const idTitle = String (this.route.snapshot.paramMap.get('Id'));
    console.log(`getIProduct | idTitle: ${this.route.snapshot.paramMap.get('Id')}`)

   this.productService.getIProduct().subscribe(
     (data) => {
       this.searchResults = data;

       for (let one of this.searchResults) {
         this.inventoryList.push(one);
       }
      //console.log(this.inventoryList);

       //this method grabs an item based on its id and hold it in a diffrent array
       this.getProduct(idTitle);
     }
   );
 }


 public getProduct(idTitle:any): void{

  //console.log(idTitle);

  //this checks for the id of the product in the inventoryList 
   for(let i =0; i<this.inventoryList.length; i++) {

    console.log("getProduct | this.inventoryList[i]:", this.inventoryList[i]);
    console.log("getProduct | this.inventoryList[i].product:", this.inventoryList[i].product);
    console.log("getProduct | this.inventoryList[i].product.productId:", this.inventoryList[i].product.productId);

    // console.log(this.inventoryList[i].product);

    //console.log(this.inventoryList[i].productId);
    if(this.inventoryList[i].productId == idTitle){
    // console.log("Sorted: " + this.inventoryList[i].product.productId);

    this.productsArray.push(this.inventoryList[i]);

   }
  //  console.log("After push: " + this.productsArray);
   }

}



}
