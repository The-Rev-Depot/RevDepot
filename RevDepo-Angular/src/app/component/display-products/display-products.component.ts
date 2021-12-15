import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  //category headers that appear in categories section
  Apparel = "Apparel"

  Stationary =  "stationary"

  Accessories = "accessories"

  categoriesArray = [this.Apparel,this.Stationary,this.Accessories];


  constructor() { }

  ngOnInit(): void {
  }


}
