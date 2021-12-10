import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IInventory } from 'src/app/model/inventory';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { InventoryClass } from 'src/app/model/inventory-class';

import { IProduct } from 'src/app/model/product';
import { ProductClass } from 'src/app/model/product-class';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: any;
  //public shirtPro : product;

  public productId:any;
  public productName: any;
  public description: any;
  public picUrl: any;
  public productPrice: any;
  public category: any;
  public isOnSale: any;

  productsList: any;

  public searchResults:any = [];
  public inventoryList: Array<InventoryClass> = [];
  public productsArray: Array<ProductClass> = [];
  public productArray: Array<ProductClass> = [];




  constructor(private router: Router, private route: ActivatedRoute, private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.getIProduct();
  }


  public getIProduct(): void {
    const idTitle = String (this.route.snapshot.paramMap.get('Id'));

   this.productService.getIProduct().subscribe(
     (data) => {
       this.searchResults = data;

       for (let one of this.searchResults) {
         this.inventoryList.push(one);
       }
       console.log(this.inventoryList);

       this.getProduct(idTitle);
     }
   );
 }


 public getProduct(idTitle:any): void{

  console.log(idTitle);


   for(let i =0; i<this.inventoryList.length; i++) {

    console.log(this.inventoryList[i].product.productId);
    console.log(this.inventoryList[i].product);

    if(this.inventoryList[i].product.productId == idTitle){

    console.log("Sorted: " + this.inventoryList[i].product.productId);

    this.productsArray.push(this.inventoryList[i].product);

   }
   console.log("After push: " + this.productsArray);
   }

   this.productArray = [this.productsArray[0]];
  console.log(this.productArray);
}

  moreInfo()
  {
    console.log("google")

    this.router.navigateByUrl('/product-details');
  }

  shirtPro =
  {

    productId: 1,
    productName: 'card' ,
    description: "string",
    picUrl: "string",
    productPrice: 15,
    category: "string",
    isOnSale: 1

  }




}
