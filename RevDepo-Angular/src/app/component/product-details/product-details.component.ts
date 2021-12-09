import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

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

  productsArray = [this.shirtPro];

}
