import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ICart } from 'src/app/model/cart';
import { IProduct } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cart?: ICart;
  totalPrice?: number;
  cartIsEmpty = false;
  loggedIn = true;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  events: string[] = [];
  opened: boolean = false;


  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  toggleSideNav(){
    this.opened != this.opened;
    this.sidenav.toggle();
  }

  removeItem(){
    console.log("item removed");
    console.log(this.cart?.items);
  }

  checkoutRoute(){
    this.router?.navigateByUrl('/checkout');
  }

  homeRoute(){
    this.router?.navigateByUrl('/display-products');
  }

}
