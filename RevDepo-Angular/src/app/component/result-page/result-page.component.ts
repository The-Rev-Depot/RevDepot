import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductClass } from 'src/app/model/product-class';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { InventoryClass } from 'src/app/model/inventory-class';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  productsList: any;
  //initializing arrays to hold data retrieved from database
  public searchResults:any = [];
  public inventoryList: Array<InventoryClass> = []; //holds all items in inventory
  public productsArray: Array<ProductClass> = []; // holds items that are sorted by category


  constructor(private router: Router, private route: ActivatedRoute, private productService:ProductServiceService) { }

  ngOnInit(): void {
    //this method will be called when the component loads, items will populate based on category
    this.getIProduct();
  }

  //this method calls the getIProducts() method in the product service to retrieve all items
  public getIProduct(): void {
     const categoryTitle = String (this.route.snapshot.paramMap.get('title'));

    this.productService.getIProduct().subscribe(
      (data) => {
        this.searchResults = data;

        for (let one of this.searchResults) {
          this.inventoryList.push(one);
        }
        //console.log(this.inventoryList);

        //this method sorts items in that category and holds them in a diffrent array
        this.getProduct(categoryTitle);
      }
    );
  }


  public getProduct(categoryTitle:string): void{

    //console.log(categoryTitle);

    //this checks for the category of the products in the inventoryList 
     for(let i =0; i<this.inventoryList.length; i++) {

      //console.log(this.inventoryList[i].product.productCategory);
     // console.log(this.inventoryList[i].product);

      if(this.inventoryList[i].product.productCategory == categoryTitle){

      //console.log("Sorted: " + this.inventoryList[i].product.productCategory);

      this.productsArray.push(this.inventoryList[i].product);

     }
    // console.log("After push: " + this.productsArray);
     }

  }


}

