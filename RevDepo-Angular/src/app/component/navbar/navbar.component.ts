import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ICart } from 'src/app/model/cart';
import { IProduct } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { UserServiceService} from 'src/app/service/user-service.service'
import { Router } from '@angular/router';
import { IItem } from 'src/app/model/item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cart?: ICart;
  totalPrice?: number;
  cartIsEmpty = false;
  loggedIn = false;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  events: string[] = [];
  opened: boolean = false;
  quantityLimit: number = 1;




  constructor(private http:HttpClient, private cartService: CartService, private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
    this.loggedIn = this.userService.checkloggedIn;

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
  loginRoute(){
    this.router?.navigateByUrl('/login');
  }
  updateQuantity(){
    console.log("is this working?");
  }
  logout(){
    //this will hopefully be replaced by a logout() function in userservice
    this.userService.checkloggedIn = false;
    this.loggedIn = false;
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
