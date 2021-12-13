import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { IProduct } from 'src/app/model/product';
import { ProductClass } from 'src/app/model/product-class';
import { IInventory } from 'src/app/model/inventory';
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

  public product: any;
  //public shirtPro : product;

  public productId:any;
  public productName: any;
  public description: any;
  public picUrl: any;
  public productPrice: any;
  public category: any;
  public isOnSale: any;

  ngOnInit(): void {

    this.getIProduct();

    //console.log(this.result.getIProduct);
    //this.result.getIProduct;
  }

  productsList: any;

  public searchResults:any = [];
  public inventoryList: Array<InventoryClass> = [];
  public productsArray: Array<ProductClass> = [];
  public productArray: Array<ProductClass> = [];
  public tempArray: Array<ProductClass> = [];
  public tempArray2: Array<ProductClass> = [];


  public getIProduct(): void {
    const dealTitle = Boolean (1);

   this.productService.getIProduct().subscribe(
     (data) => {
       this.searchResults = data;

       for (let one of this.searchResults) {
         this.inventoryList.push(one);
       }
      // console.log(this.inventoryList);

       this.getProduct(dealTitle);
     }
   );
 }


 public getProduct(dealTitle:any): void{

  //console.log(dealTitle);


   for(let i =0; i<this.inventoryList.length; i++) {

    //console.log(this.inventoryList[i].product.saleId);
    //console.log(this.inventoryList[i].product);

    if(this.inventoryList[i].product.saleId == dealTitle){

    //console.log("Sorted: " + this.inventoryList[i].product.saleId);

    this.productsArray.push(this.inventoryList[i].product);

   }
   //console.log("After push: " + this.productsArray);
   }

   this.productArray = [this.productsArray[0]];
  //console.log(this.productArray);
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



 //test

 shirtPro =
  {

    productId: 1,
    productName: "card",
    description: "string",
    picUrl: "string",
    productPrice: 15,
    category: "string",
    isOnSale: 1

  }


  shirtPro1 =
  {

    productId: 2,
    productName: "dispalycard" ,
    description: "string",
    picUrl: "string",
    productPrice: 15,
    category: "string",
    isOnSale: 1

  }

  shirtPro2 =
  {

    productId: 3,
    productName: "string" ,
    description: "string",
    picUrl: "string",
    productPrice: 15,
    category: "string",
    isOnSale: 1

  }



  //  moreInfo(id:any)
  //  {
  //     //temp move to main method
  //     //this.productArray = [this.shirtPro,this.shirtPro1,this.shirtPro2];



  // //   this.result.moreInfoDis;

  //    console.log("google")

  //    let temp = this.getProductByID(id);


  //   console.log(temp);

  //    this.router.navigateByUrl('/product-details/' + temp);
  // }


}
