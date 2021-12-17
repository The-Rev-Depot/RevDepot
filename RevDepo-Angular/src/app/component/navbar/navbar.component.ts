import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ICart } from 'src/app/model/cart';
import { IProduct } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { UserServiceService} from 'src/app/service/user-service.service'
import { Router } from '@angular/router';
import { IItem } from 'src/app/model/item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cart?: ICart;
  totalPrice?: number;
  cartIsEmpty!: boolean;
  cartIsEmptySubscription: Subscription = new Subscription;
  loggedIn!: boolean;
  loggedInSubscription: Subscription = new Subscription;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  events: string[] = [];
  opened: boolean = false;

  constructor(private cartService: CartService, public router: Router, private userService: UserServiceService) {
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();

    this.loggedInSubscription = this.cartService.loggedInMessage.subscribe(message => this.loggedIn = message)
    this.cartIsEmptySubscription = this.cartService.cartIsEmptyMessage.subscribe(message => this.cartIsEmpty = message)
  }
  get isEmpty():boolean{
    return this.cartIsEmpty;
  }

  toggleSideNav(){
    this.opened != this.opened;
    this.sidenav.toggle();
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  checkoutRoute(){
     this.router?.navigateByUrl('/checkout');

  }

  homeRoute(){
    this.router?.navigateByUrl('/display-products');
  }

  loginRoute(){
    this.router?.navigateByUrl('/login');
  }

  updateQuantity(){
    console.log("is this working?");
  }
  
  logout(){
    //this will hopefully be replaced by a logout() function in userservice
    this.userService.logout();
    this.cartService.setIsLoggedIn(false);
    this.opened = false;
    this.sidenav.toggle();
  }

  ngOnDestroy() {
    this.loggedInSubscription.unsubscribe();
  }
}
