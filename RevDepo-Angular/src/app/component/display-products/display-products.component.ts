import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/model/product';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  public product: any;
  public shirtPro!: IProduct;

  public productId:any;
  public productName: any;
  public description: any;
  public picUrl: any;
  public productPrice: any;
  public category: any;
  public isOnSale: any;

  Apparel = { title: "apparel"}

  Stationary = { title: "stationary"}

  Accessories = {  title: "accessories"}

  categoriesArray = [this.Apparel,this.Stationary,this.Accessories];


  constructor(private router: Router) { }

  ngOnInit(): void {
  }




  moreInfo()
  {
    console.log("google")

    this.router.navigateByUrl('/product-details');


  }

}
