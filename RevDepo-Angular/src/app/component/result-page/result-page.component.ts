import { IProduct } from 'src/app/model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  public productList: Array<IProduct> = [];



  constructor(private router: Router, private route: ActivatedRoute,private productService:ProductServiceService) { }

  ngOnInit(): void {

    this.getProduct();
  }



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


      //main method op
      this.productService.getIProduct().subscribe(product => this.productsList = product);
      //this.productService.getByLast.subscribe((products: any) => this.product = products);
      console.log("After serivce been called: " + this.productsList);
      this.productsArray = this.productsList;


     //console logs
     console.log("after serivce been called, relog vars...")
      console.log("array of data: " + this.productsArray);
      //console.log("single product [0]:  " + this.productsArray[0]);
      //console.log("single product pop:  " + this.productsArray.pop);
      console.log("single product:  " + this.product);

      //setting one product to data from arrraylist
      this.product = this.productsArray[0];
      console.log("After single product been set:  " + this.product);

      this.items=this.product;
    }

  public moreInfo() : void
    {
      console.log("google")

      this.router.navigateByUrl('/product-details');
    }

}

