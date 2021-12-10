import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { SalesServiceService } from 'src/app/service/sales-service.service';

@Component({
  selector: 'app-sales-deals',
  templateUrl: './sales-deals.component.html',
  styleUrls: ['./sales-deals.component.css']
})
export class SalesDealsComponent implements OnInit {

  title = "Ongoing Sales"
  productsOnSale:any = []
  productsOnSaleByCategory:any = []

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
  shirtPro3 =
  {

    productId: 3,
    productName: "string" ,
    description: "string",
    picUrl: "string",
    productPrice: 15,
    category: "string",
    isOnSale: 1

  }
  shirtPro4 =
  {

    productId: 3,
    productName: "string" ,
    description: "string",
    picUrl: "string",
    productPrice: 15,
    category: "string",
    isOnSale: 1

  }


  constructor(private service:SalesServiceService) { }

  ngOnInit(): void {
    this.productsOnSale = this.getProductsOnSale();
    this.productsOnSaleByCategory = this.getProductsOnSaleByCategory();

    // delete next line for production
    this.productsOnSale = [this.shirtPro,this.shirtPro1,this.shirtPro2,this.shirtPro3,this.shirtPro4]
  }

  private getProductsOnSale() {
    return this.service.getAllItemsOnSale();
  }

  private getProductsOnSaleByCategory() {
    return this.service.getAllItemsOnSaleByCategory();
  }
}
