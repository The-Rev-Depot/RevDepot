import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/model/product';
//import { threadId } from 'worker_threads';
import { ResultPageComponent } from '../result-page/result-page.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private router: Router, private result: ResultPageComponent) { }

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
    //console.log(this.result.getIProduct);
    //this.result.getIProduct;
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


  shirtPro1 =
  {

    productId: 2,
    productName: 'dispalycard' ,
    description: "string",
    picUrl: "string",
    productPrice: 15,
    category: "string",
    isOnSale: 1

  }

  shirtPro2 =
  {

    productId: 3,
    productName: 'string' ,
    description: "string",
    picUrl: "string",
    productPrice: 15,
    category: "string",
    isOnSale: 1

  }

  productsArray = [this.shirtPro,this.shirtPro1,this.shirtPro2];

  moreInfo()
  {
    this.result.moreInfoDis;


  }


}
