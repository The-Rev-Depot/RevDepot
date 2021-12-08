import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductClass } from 'src/app/model/product-class';

import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  //items : IProduct | undefined;

  public searchResults:any = [];
  public productList: Array<ProductClass> = [];



  constructor(private router: Router, private route: ActivatedRoute,private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.getIProduct();
  }

  public getIProduct(): void{
     //const categoryTitle = this.route.snapshot.paramMap.get('category');

    //  this.productService.getIProduct().subscribe(data => this.productList = data);
    this.productService.getIProduct().subscribe(
      (data) => {
        this.searchResults = data;

        for (let one of this.searchResults) {
          this.productList.push(one);
        }
      });
     console.log(this.productList);
  }


  moreInfo() {
    console.log("google")
    this.router.navigateByUrl('/product-details');

  }
}
