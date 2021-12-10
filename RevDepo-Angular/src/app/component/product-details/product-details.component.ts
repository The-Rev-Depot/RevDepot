import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryClass } from 'src/app/model/inventory-class';
import { ProductClass } from 'src/app/model/product-class';
import { ProductServiceService } from 'src/app/service/product-service.service';

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

  // shirtPro =
  // {

  //   productId: 1,
  //   productName: 'card' ,
  //   description: "string",
  //   picUrl: "string",
  //   productPrice: 15,
  //   category: "string",
  //   isOnSale: 1

  // }

  // productsArray = [this.shirtPro];


  constructor(private router: Router, private route: ActivatedRoute,private productService:ProductServiceService) { }

  ngOnInit(): void {
     this.getIProduct();
  }

  public getIProduct(): void {
    const productId = String (this.route.snapshot.paramMap.get('productId'));

   this.productService.getIProduct().subscribe(
     (data) => {
       this.searchResults = data;

       for (let one of this.searchResults) {
         this.inventoryList.push(one);
       }
       console.log(this.inventoryList);

       this.getProduct(productId);
     }
   );
 }


 public getProduct(productId:string): void{

    for(let i =0; i<this.inventoryList.length; i++) {

     if(this.inventoryList[i].product.category == productId){

     console.log("Sorted: " + this.inventoryList[i].product.productId);

     this.productsArray.push(this.inventoryList[i].product);

    }
    console.log("After push: " + this.productsArray);
    }

 }






  moreInfo()
  {
    console.log("google")

    this.router.navigateByUrl('/product-details');
  }


}
