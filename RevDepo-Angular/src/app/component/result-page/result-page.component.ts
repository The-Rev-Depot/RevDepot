import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IInventory } from 'src/app/model/inventory';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  inventory : IInventory | undefined;

  constructor(private route: ActivatedRoute,private productService:ProductServiceService) { }

  ngOnInit(): void {

  }

  public getIProduct(): void{
    
     const categoryTitle = this.route.snapshot.paramMap.get('category');

     this.productService.getIProduct().subscribe(inventory => this.inventory = inventory);
  }

}
