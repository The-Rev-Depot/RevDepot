import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
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

  constructor(private service:SalesServiceService) { }

  ngOnInit(): void {
    this.productsOnSale = this.getProductsOnSale();
    this.productsOnSaleByCategory = this.getProductsOnSaleByCategory();
  }

  private getProductsOnSale() {
    return this.service.getAllItemsOnSale();
  }

  private getProductsOnSaleByCategory() {
    return this.service.getAllItemsOnSaleByCategory();
  }
}
