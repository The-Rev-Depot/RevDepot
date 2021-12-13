import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  //category headers that appear in categories section
  Apparel = { title: "apparel"}

  Stationary = { title: "stationary"}

  Accessories = {  title: "accessories"}

  categoriesArray = [this.Apparel,this.Stationary,this.Accessories];


  constructor() { }

  ngOnInit(): void {
  }


}
