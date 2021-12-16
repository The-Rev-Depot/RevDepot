import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { CartService } from "src/app/service/cart.service";
import { UserServiceService } from "src/app/service/user-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _username: string = "";
  _password: string = "";
  _userId: number = 0;
  _invalidUsernameMessage: string = "";
  _invalidPasswordMessage: string = "";
  _isFound: boolean = false;

  constructor(private userService: UserServiceService, private router:Router, private  dialog:  MatDialog, private cartService: CartService) { }

  ngOnInit(): void {
    if (JSON.parse(sessionStorage.getItem('userObject')!).object != null){
      console.log(JSON.parse(sessionStorage.getItem('userObject')!).object);
    }
  }

  userLogin(){
    console.log(this._username)
    this.userService.userLogin(this._username, this._password).subscribe(data => {
      console.log(data)
      if (data.success){
        sessionStorage.setItem('userObject', JSON.stringify(data));
        /* this.cartService.setCart(data.object) */
        this.router.navigate([`/display-products`]);
      } else {
        this._invalidPasswordMessage = "Invalid password";
      }
    })
  }

  removeUsername(){
    this._invalidUsernameMessage = "";
    this._username = "";
  }

  removePassword(){
    this._invalidPasswordMessage = "";
    this._password = "";
  }

  checkPassword(){
    if (this._password == ""){
      this._invalidPasswordMessage = "Password is empty";
    }
  }

  checkUsername(){
    this._isFound = false;
    this._invalidUsernameMessage = "";
    if (this._username.match("\@")){
      this.userService.getUserByEmail(this._username).subscribe(data => {
        console.log(data.object.email)
        if (data.object.email == this._username){
          this._isFound = true;
          this._invalidUsernameMessage = "";
        }
      })
    } else if (this._username != ""){
      this.userService.getUserByUsername(this._username).subscribe(data => {
        console.log(data.object.username)
        if (data.object.username == this._username){
          this._isFound = true;
          this._invalidUsernameMessage = "";
        }

      })
    }

    if (this._username == ""){
      this._invalidUsernameMessage = "Username is EMPTY!";
    } else if (!this._isFound) {
      this._invalidUsernameMessage = "Username not found!";
    } else {
      this._invalidUsernameMessage = "";
    }
  }

  forgotpassword(){
    alert("This feature is not implemented yet!");
  }
}
