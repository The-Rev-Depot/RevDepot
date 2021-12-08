import { IProduct } from 'src/app/model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductClass } from 'src/app/model/product-class';

import { IInventory } from 'src/app/model/inventory';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  inventory : IInventory | undefined;
  products :IProduct | undefined;
  product : any;
  productsArray : any;
  productsList: any;


 //public shirtPro : product;

 public productId:any;
 public productName: any;
 public description: any;
 public picUrl: any;
 public productPrice: any;
 public category: any;
 public isOnSale: any;
  items : IProduct | undefined;

  public searchResults:any = [];
  public productList: Array<ProductClass> = [];



  constructor(private router: Router, private route: ActivatedRoute,private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.getIProduct();
  }

  public getIProduct(): void{
     //const categoryTitle = this.route.snapshot.paramMap.get('category');

    //  this.productService.getIProduct().subscribe(data => this.productList = data);
    this.productService.getIProduct().subscribe(
      (data) => {
        this.searchResults = data;

        for (let one of this.searchResults) {
          this.productList.push(one);
        }
      });
     console.log(this.productList);

     this.productsList=this.productList;


  }

    //this.getProduct();


  public getProduct(): void{

     const categoryTitle = this.route.snapshot.paramMap.get('category');
     //this.productService.getIProduct().subscribe(inventory => this.inventory = inventory);
      //this.productService.getIProduct().subscribe(product => this.product = product);
     // this.productsList = [this.productService.getIProduct().subscribe(product => this.productsList = product)];


     //console logs
     console.log("Before anything started: " + this.productsList);
     console.log("array of data: " + this.productsArray);
     // console.log("single product [0]:  " + this.productsArray[0]);
      //console.log("single product pop:  " + this.productsArray.pop);
      console.log("single product:  " + this.product);
  }

      public moreInfo() {
        console.log("google")
        console.log(this.productsList);
        console.log(this.productsList[0]);
        this.product=this.productsList[0];
        console.log("Single item: " + this.product);
        console.log(this.product.productId);

      }
}

