import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

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


}
