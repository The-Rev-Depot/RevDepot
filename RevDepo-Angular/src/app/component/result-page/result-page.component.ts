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
  public productArray: Array<ProductClass> = [];
  public tempArray: Array<ProductClass> = [];
  public tempArray2: Array<ProductClass> = [];


  constructor(private router: Router, private route: ActivatedRoute, private productService:ProductServiceService) { }

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
        //console.log(this.inventoryList);

        this.getProduct(categoryTitle);
      }
    );
  }


  public getProduct(categoryTitle:string): void{

    //console.log(categoryTitle);


     for(let i =0; i<this.inventoryList.length; i++) {

      //console.log(this.inventoryList[i].product.productCategory);
     // console.log(this.inventoryList[i].product);

      if(this.inventoryList[i].product.productCategory == categoryTitle){

      //console.log("Sorted: " + this.inventoryList[i].product.productCategory);

      this.productsArray.push(this.inventoryList[i].product);

     }
    // console.log("After push: " + this.productsArray);
     }

  }


  // public getProductByID(ID:any): void{

  //   console.log(ID);


  //    for(let i =0; i<this.inventoryList.length; i++) {

  //     console.log(this.inventoryList[i].product.productId);
  //     console.log(this.inventoryList[i].product);

  //     if(this.inventoryList[i].product.productId == ID){

  //     console.log("Sorted: " + this.inventoryList[i].product.productId);

  //     this.tempArray.push(this.inventoryList[i].product);

  //    }
  //    console.log("After push: " + this.tempArray);
  //    }

  //    this.tempArray2 = [this.tempArray[0]];
  //   console.log(this.tempArray2);
  // }

//   moreInfo(id:any)
//   {
//      //temp move to main method
//      //this.productArray = [this.shirtPro,this.shirtPro1,this.shirtPro2];



//  //   this.result.moreInfoDis;

//     console.log("google")

//     let temp = this.getProductByID(id);

//     console.log(temp);

//     this.router.navigateByUrl('/product-details/' + temp);
//  }
}

