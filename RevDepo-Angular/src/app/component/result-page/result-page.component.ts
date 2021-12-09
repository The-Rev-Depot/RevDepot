import { IProduct } from 'src/app/model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductClass } from 'src/app/model/product-class';

import { IInventory } from 'src/app/model/inventory';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { InventoryClass } from 'src/app/model/inventory-class';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

    //none of these are being used / not essential as far as I can tell

  // inventory : IInventory | undefined;
  // products :IProduct | undefined;
  // product : any;

//  public productId:any;
//  public productName: any;
//  public description: any;
//  public picUrl: any;
//  public productPrice: any;
//  public category: any;
//  public isOnSale: any;
  //items : IProduct | undefined;

  productsList: any;

  public searchResults:any = [];
  public inventoryList: Array<InventoryClass> = [];
  public productsArray: Array<ProductClass> = [];


  constructor(private router: Router, private route: ActivatedRoute,private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.getIProduct();
  }

  public getIProduct(): void {
     const categoryTitle = String (this.route.snapshot.paramMap.get('title'));

    this.productService.getIProduct().subscribe(
      (data) => {
        this.searchResults = data;

        for (let one of this.searchResults) {
          this.inventoryList.push(one);
        }
        console.log(this.inventoryList);

        this.getProduct(categoryTitle);
      }
    );
  }


  public getProduct(categoryTitle:string): void{

     for(let i =0; i<this.inventoryList.length; i++) {

      if(this.inventoryList[i].product.category == categoryTitle){

      console.log("Sorted: " + this.inventoryList[i].product.category);

      this.productsArray.push(this.inventoryList[i].product);

     }
     console.log("After push: " + this.productsArray);
     }

  }

  public moreInfo() {
        // console.log("google")
        console.log(this.productsList);
         console.log(this.productsList[0]);
         //this.product=this.productsList[0];
         //console.log("Single item: " + this.product);
        // console.log(this.product.productId);
    console.log(this.productsList[0].product.category);

  }
}

