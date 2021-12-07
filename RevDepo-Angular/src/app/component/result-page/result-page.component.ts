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

    this.getIProduct();
  }



  public getIProduct(): void{

     const categoryTitle = this.route.snapshot.paramMap.get('category');

     //this.productService.getIProduct().subscribe(inventory => this.inventory = inventory);
      //this.productService.getIProduct().subscribe(product => this.product = product);
     // this.productsList = [this.productService.getIProduct().subscribe(product => this.productsList = product)];

      this.productService.getIProduct().subscribe(product => this.productsList = product)
      this.productsArray = this.productsList;
      this.product = this.productsList.pop;
    }

  public moreInfoDis() : void
    {
      console.log("google")

      this.router.navigateByUrl('/product-details');
    }

}
