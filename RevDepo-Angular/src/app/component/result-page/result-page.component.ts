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

  public hide: boolean = false;
  //initializing arrays to hold data retrieved from database
  public searchResults:any = [];
  public inventoryList: Array<any> = []; //holds all items in inventory
  public productsArray: Array<ProductClass> = []; // holds items that are sorted by category
  public productArray: Array<ProductClass> = [];//holds all

  constructor(private router: Router, private route: ActivatedRoute, private productService:ProductServiceService) { }

  ngOnInit(): void {
    //this method will be called when the component loads, items will populate based on category
    this.getIProduct();
  }

  //this method calls the getIProducts() method in the product service to retrieve all items
  public getIProduct(): void {
     const categoryTitle = String (this.route.snapshot.paramMap.get('category'));

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

      if(this.inventoryList[i].productCategory == categoryTitle){
        console.log(categoryTitle);
      console.log("Sorted: " , this.inventoryList[i]);

      this.productsArray.push(this.inventoryList[i]);
      this.hide = true;
      console.log(this.hide);

     }
     else{
      this.productArray.push(this.inventoryList[i]);
      this.hide = false;
      console.log(this.hide);
     }
    // console.log("After push: " + this.productsArray);
     }

  }


}

