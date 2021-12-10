import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { IItem } from 'src/app/model/item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  items: IItem[] = [
    {
      itemId: 1, quantity: 1, product: {
        productId: 1,
        productName: "t-shirt",
        description: "code like a boss",
        picUrl: "https://i.ebayimg.com/thumbs/images/g/yzMAAOSwaHZgy1VV/s-l300.jpg",
        productPrice: 23.99,
        productRating: 3,
        category: "clothing",
        isOnSale: 25,
      }
    },
    {
      itemId: 2, quantity: 3, product: {
        productId: 2,
        productName: "t-shirt",
        description: "code like a boss",
        picUrl: "https://i.ebayimg.com/thumbs/images/g/yzMAAOSwaHZgy1VV/s-l300.jpg",
        productPrice: 23.99,
        productRating: 3,
        category: "clothing",
        isOnSale: 25
      }
    },
    {
      itemId: 3, quantity: 2, product: {
        productId: 3,
        productName: "t-shirt",
        description: "code like a boss",
        picUrl: "https://i.ebayimg.com/thumbs/images/g/yzMAAOSwaHZgy1VV/s-l300.jpg",
        productPrice: 23.99,
        productRating: 3,
        category: "clothing",
        isOnSale: 25,
      }
    },
    {
      itemId: 4, quantity: 5, product: {
        productId: 4,
        productName: "t-shirt",
        description: "code like a boss",
        picUrl: "https://i.ebayimg.com/thumbs/images/g/yzMAAOSwaHZgy1VV/s-l300.jpg",
        productPrice: 23.99,
        productRating: 3,
        category: "clothing",
        isOnSale: 25,
      }
    },
    
  ]

  //onlyOnce: boolean = true;
  //count: number = 0;
  quantityLimit: number = 1;
  cartIsEmpty = false;
  loggedIn = true;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  events: string[] = [];
  opened: boolean = false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  toggleSideNav(){
    this.opened != this.opened;
    this.sidenav.toggle();
  }

  increment(item: any){

    if(item.quantity <= this.quantityLimit){
      item.quantity += 1;
    }

    //if(this.onlyOnce)
      this.http.get<number>('http://localhost:9999/inventory/quantity/' + item.product.productId).subscribe(
        (response) => {
          this.quantityLimit = response;
       }
    );

  }

  decrement(item: any){
    if(item.quantity > 1){
      item.quantity -= 1;
    }
  }

}
