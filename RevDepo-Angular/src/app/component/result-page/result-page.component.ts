import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct} from 'src/app/model/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  items : IProduct | undefined;

  public productList: Array<IProduct> = [];



  constructor(private router: Router, private route: ActivatedRoute,private productService:ProductServiceService) { }

  ngOnInit(): void {

  }

  public getIProduct(): void{
    
     const categoryTitle = this.route.snapshot.paramMap.get('category');

     this.productService.getIProduct().subscribe(data => this.productList = data);
  }


  moreInfo() {
    console.log("google")

    this.router.navigateByUrl('/product-details');
  }
}
