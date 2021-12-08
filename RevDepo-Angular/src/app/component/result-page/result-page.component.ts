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

  inventory : IInventory | undefined;
  products :IProduct | undefined;
  product : any;
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

  public inventoryList: Array<InventoryClass> = [];
  public productsArray: Array<ProductClass> = [];



  constructor(private router: Router, private route: ActivatedRoute,private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.getIProduct();
  }

  public getIProduct(): void {
     //const categoryTitle = this.route.snapshot.paramMap.get('category');

    //  this.productService.getIProduct().subscribe(data => this.productList = data);
    this.productService.getIProduct().subscribe(
      (data) => {
        this.searchResults = data;

        for (let one of this.searchResults) {
          this.inventoryList.push(one);
        }


      });
     console.log(this.inventoryList);

     this.productsList=this.inventoryList;
     console.log(this.productsList);

     this.getProduct();

  }

    //this.getProduct();


  public getProduct(): void{

     //const categoryTitle = this.route.snapshot.paramMap.get('category');


     for(let i =0; i<this.productsList.length;i++)
     {
       if(this.productsList[i].product.category == "clothing"){
     console.log("Sorted: " + this.productsList[i].product.category);
     //this.productsList[i].product.push(this.productsArray);
     this.productsArray.push(this.productsList[i].product);



     }
     console.log("After push: " + this.productsArray);
     console.log("After push: " + this.productsList);
     }

  }

      public moreInfo() {
        // console.log("google")
        // console.log(this.productsList);
        // console.log(this.productsList[0]);
        // this.product=this.productsList[0];
        // console.log("Single item: " + this.product);
        // console.log(this.product.productId);
        console.log(this.productsList[0].product.category);

        this.getProduct();

      }
}

