import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/model/user';
import { CartService } from 'src/app/service/cart.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  _username: string = "";
  _password: string = "";
  _userId: number = 0;
  _invalidUsernameMessage: string = "Choose something unique that you can remember";
  _invalidPasswordMessage: string = "";
  _isFound: boolean = false;

  constructor(private userService: UserServiceService, private router:Router, private cartService: CartService) { }

  userAccount: IUser=
    {
    userId: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    urlProPic: 'https://picsum.photos/200',
    birthday: '',
  }


  ngOnInit(): void {
    console.log(JSON.parse(sessionStorage.getItem('userObject')!).object);
  }

  registerUser() {
    this.userService.addUserRequest(this.userAccount).subscribe(data => {
      console.log(data)
      if (data.success){
        sessionStorage.setItem('userObject', JSON.stringify(data));
        console.log("Register User before create cart");
        this.cartService.createCart(data.object);
        console.log("Register User after create cart");
        console.log("Cart", this.cartService.getCart());
        this.router.navigate([`/login/`]);
      } else {
        alert("Failed to create a new user.");
      }});

  }

  checkUsername(){
    this._isFound = false;
    this._invalidUsernameMessage = "";
    if (this._username.match("\@")){
          this._invalidUsernameMessage = "Invalid entry. Cannot be an email";
    }else if (this._username != ""){
      this.userService.getUserByUsername(this._username).subscribe(data => {
        console.log(data.object.username)
        if (data.object.username == this._username){
          this._isFound = true;
          this._invalidUsernameMessage = "Already exist in the system.";
        }
      })
    }
  }

  removeUsername(){
    this._invalidUsernameMessage = "";
    this._username = "";
  }

  removePassword(){
    this._invalidPasswordMessage = "";
    this._password = "";
  }

}
