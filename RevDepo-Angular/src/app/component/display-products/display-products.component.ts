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

  Apparel = { title: "Apparel" }

  Stationary = { title: "Stationary" }

  Accessories = {  title: "Accessories" }

  categoriesArray = [this.Apparel,this.Stationary,this.Accessories];

  
  constructor() { }

  ngOnInit(): void {
  }





}
