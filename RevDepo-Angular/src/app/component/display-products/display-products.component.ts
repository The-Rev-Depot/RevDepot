import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  public product: any;
  //public shirtPro : product;

  public productId:any;
  public productName: any;
  public description: any;
  public picUrl: any;
  public productPrice: any;
  public category: any;
  public isOnSale: any;

  constructor() { }

  ngOnInit(): void {
  }

  // todosArray = []; product array
  //selectArray = [];
  // //  productsArray = [this.shirtPro,this.shirtPro1,this.shirtPro2];
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


}
