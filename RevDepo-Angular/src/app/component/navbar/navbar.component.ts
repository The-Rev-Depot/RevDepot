import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { IProduct } from 'src/app/model/product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  products: IProduct[] = [
     {
      productId: 1,
      productName: "t-shirt",
      description: "code like a boss",
      picUrl: "https://i.ebayimg.com/thumbs/images/g/yzMAAOSwaHZgy1VV/s-l300.jpg",
      productPrice: 23.99,
      productRating: 3,
      category: "clothing",
      isOnSale: 25,
      }, 
      {      
      productId: 1,
      productName: "t-shirt",
      description: "code like a boss",
      picUrl: "https://i.ebayimg.com/thumbs/images/g/yzMAAOSwaHZgy1VV/s-l300.jpg",
      productPrice: 23.99,
      productRating: 3,
      category: "clothing",
      isOnSale: 25
  },
  {
    productId: 1,
    productName: "t-shirt",
    description: "code like a boss",
    picUrl: "https://i.ebayimg.com/thumbs/images/g/yzMAAOSwaHZgy1VV/s-l300.jpg",
    productPrice: 23.99,
    productRating: 3,
    category: "clothing",
    isOnSale: 25,
    }, 
    {      
    productId: 1,
    productName: "t-shirt",
    description: "code like a boss",
    picUrl: "https://i.ebayimg.com/thumbs/images/g/yzMAAOSwaHZgy1VV/s-l300.jpg",
    productPrice: 23.99,
    productRating: 3,
    category: "clothing",
    isOnSale: 25
}


  ];
  cartIsEmpty = false;
  loggedIn = true;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  events: string[] = [];
  opened: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(){
    this.opened != this.opened;
    this.sidenav.toggle();
  }

}
