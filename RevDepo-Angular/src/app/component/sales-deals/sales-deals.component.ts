import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { SalesServiceService } from 'src/app/service/sales-service.service';
import { CurrencyPipe } from '@angular/common';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

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
    picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
    productPrice: 15,
    category: "string",
    isOnSale: 10

  }
  shirtPro1 =
  {

    productId: 2,
    productName: "dispalycard" ,
    description: "string",
    picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
    productPrice: 15,
    category: "string",
    isOnSale: 10

  }
  shirtPro2 =
  {

    productId: 3,
    productName: "string" ,
    description: "string",
    picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
    productPrice: 15,
    category: "string",
    isOnSale: 15

  }
  shirtPro3 =
  {

    productId: 3,
    productName: "string" ,
    description: "string",
    picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
    productPrice: 15,
    category: "string",
    isOnSale: 10

  }
  shirtPro4 =
  {

    productId: 3,
    productName: "string" ,
    description: "string",
    picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
    productPrice: 15,
    category: "string",
    isOnSale: 15

  }
  shirtPro5 =
  {

    productId: 3,
    productName: "string" ,
    description: "string",
    picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
    productPrice: 15,
    category: "string",
    isOnSale: 20

  }
  shirtPro6 =
  {

    productId: 3,
    productName: "string" ,
    description: "string",
    picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
    productPrice: 15,
    category: "string",
    isOnSale: 20

  }
  shirtPro7 =
  {

    productId: 3,
    productName: "string" ,
    description: "string",
    picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
    productPrice: 15,
    category: "string",
    isOnSale: 10

  }
  shirtPro8 =
  {

    productId: 3,
    productName: "string" ,
    description: "string",
    picUrl: "https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg",
    productPrice: 15,
    category: "string",
    isOnSale: 15

  }


  constructor(private service:SalesServiceService, private cartService: CartService, private router:Router) { }

  ngOnInit(): void {
    this.productsOnSale = this.getProductsOnSale();
    this.productsOnSaleByCategory = this.getProductsOnSaleByCategory();

    // delete next line for production
    this.productsOnSale = [this.shirtPro,this.shirtPro1,this.shirtPro2,this.shirtPro3,this.shirtPro4,this.shirtPro5,this.shirtPro6,this.shirtPro7,this.shirtPro8]
    for(let x = 0; x < this.productsOnSale.length; x++){
      this.applySalesPrice(this.productsOnSale[x]);
    }
  }

  private getProductsOnSale() {
    return this.service.getAllItemsOnSale();
  }

  private getProductsOnSaleByCategory() {
    return this.service.getAllItemsOnSaleByCategory();
  }

  private applySalesPrice(product:IProduct) {
    const saleValue = product.isOnSale/100;
    const price = product.productPrice;
    const amountOff = price * saleValue;
    product.productPrice = price-amountOff;
    return product;
  }

  addItemToCart(product:IProduct) {
    this.cartService.addProductToCart(product);
  }

  moreInfo(){
    this.router.navigateByUrl("/product-details")
  }
}
