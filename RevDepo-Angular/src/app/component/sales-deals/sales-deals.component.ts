import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { SalesServiceService } from 'src/app/service/sales-service.service';
import { CurrencyPipe } from '@angular/common';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';
import { ProductClass} from 'src/app/model/product-class';

@Component({
  selector: 'app-sales-deals',
  templateUrl: './sales-deals.component.html',
  styleUrls: ['./sales-deals.component.css']
})
export class SalesDealsComponent implements OnInit {

  title = "Ongoing Sales"
  placeholder:any = []
  productsOnSale: Array<IProduct> = []
  productsOnSaleByCategory:any = []
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


  constructor(private service:SalesServiceService, private cartService: CartService, private router:Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.url).subscribe(
      response => {
        this.productsOnSale = response;
        console.log(this.productsOnSale);
      })
    // this.service.getAllItemsOnSale().subscribe((response: any) => {
    //   this.productsOnSale = response;
    // });
    this.getProductsOnSale();
    
    //  for(let x = 0; x < this.productsOnSale.length; x++){
    //   this.applySalesPrice(this.productsOnSale[x]);
    // }
  }


  public getProductsOnSale():void {
    console.log("2");
    this.service.getAllItemsOnSale().subscribe(
      (data:any) => {
        this.placeholder = data;
        console.log("3");
        for (let one of this.placeholder) {
          this.productsOnSale.push(one);
        }
       console.log(this.productsOnSale);
 
      }
    );
  }

  private getProductsOnSaleByCategory() {
    return this.service.getAllItemsOnSaleByCategory(this.category);
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

  moreInfo(product:IProduct){
    const id = product.productId;
    this.router.navigateByUrl("/product-details/{{id}}")
  }
}

