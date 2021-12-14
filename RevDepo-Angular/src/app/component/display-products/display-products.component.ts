import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  //category headers that appear in categories section

  categoriesArray = ["apparel","stationary","accessories"];


  constructor() { }

  ngOnInit(): void {
  }


}
