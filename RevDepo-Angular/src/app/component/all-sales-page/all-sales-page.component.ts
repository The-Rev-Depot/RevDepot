import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/model/product';
import { SalesServiceService } from 'src/app/service/sales-service.service';


@Component({
  selector: 'app-all-sales-page',
  templateUrl: './all-sales-page.component.html',
  styleUrls: ['./all-sales-page.component.css']
})
export class AllSalesPageComponent implements OnInit {

  title = "All Sale Items"
  productsOnSale:any = []
  productsOnSaleByCategory:any = []
  category = ""
  url = "http://localhost:9999/product/deals";

  // shirtPro =
  // {

  //   productId: 1,
  //   productName: "card",
  //   description: "string",
  //   picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
  //   productPrice: 15,
  //   category: "string",
  //   isOnSale: 10

  // }
  // shirtPro1 =
  // {

  //   productId: 2,
  //   productName: "dispalycard" ,
  //   description: "string",
  //   picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
  //   productPrice: 15,
  //   category: "string",
  //   isOnSale: 10

  // }
  // shirtPro2 =
  // {

  //   productId: 3,
  //   productName: "string" ,
  //   description: "string",
  //   picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
  //   productPrice: 15,
  //   category: "string",
  //   isOnSale: 15

  // }
  // shirtPro3 =
  // {

  //   productId: 3,
  //   productName: "string" ,
  //   description: "string",
  //   picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
  //   productPrice: 15,
  //   category: "string",
  //   isOnSale: 10

  // }
  // shirtPro4 =
  // {

  //   productId: 3,
  //   productName: "string" ,
  //   description: "string",
  //   picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
  //   productPrice: 15,
  //   category: "string",
  //   isOnSale: 15

  // }
  // shirtPro5 =
  // {

  //   productId: 3,
  //   productName: "string" ,
  //   description: "string",
  //   picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
  //   productPrice: 15,
  //   category: "string",
  //   isOnSale: 20

  // }
  // shirtPro6 =
  // {

  //   productId: 3,
  //   productName: "string" ,
  //   description: "string",
  //   picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
  //   productPrice: 15,
  //   category: "string",
  //   isOnSale: 20

  // }
  // shirtPro7 =
  // {

  //   productId: 3,
  //   productName: "string" ,
  //   description: "string",
  //   picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
  //   productPrice: 15,
  //   category: "string",
  //   isOnSale: 10

  // }
  // shirtPro8 =
  // {

  //   productId: 3,
  //   productName: "string" ,
  //   description: "string",
  //   picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
  //   productPrice: 15,
  //   category: "string",
  //   isOnSale: 15

  // }


  constructor(private service:SalesServiceService, private router:Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.productsOnSale = this.getProductsOnSale();
    this.productsOnSaleByCategory = this.getProductsOnSaleByCategory();
    this.category = this.router.url;

    // delete next line for production
    //this.productsOnSale = [this.shirtPro,this.shirtPro1,this.shirtPro2,this.shirtPro3,this.shirtPro4,this.shirtPro5,this.shirtPro6,this.shirtPro7,this.shirtPro8]
    
  }

  private getProductsOnSale() {
    this.http.get<any>(this.url).subscribe(
      response => {
        this.productsOnSale = response;
        for(let x = 0; x < this.productsOnSale.length; x++){
          this.applySalesPrice(this.productsOnSale[x]);
        }
      })
  }

  private getProductsOnSaleByCategory() {
    return this.service.getAllItemsOnSaleByCategory(this.category);
  }

  private applySalesPrice(product:any) {
    const saleValue = product.saleId/100;
    const price = product.productPrice;
    const amountOff = price * saleValue;
    product.productPrice = price-amountOff;
    return product;
  }


}
