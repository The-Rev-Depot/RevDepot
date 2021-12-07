import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { anyTypeAnnotation } from "node_module/@babel/types/lib/index-legacy";
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

  constructor(private userService: UserServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this._username)
    console.log(this._password)
    this.userService.userLogin(this._username, this._password).subscribe(data => {
      console.log(data)
      if (data.success){
        this._userId = data.object.userId;
        this.router.navigate([`/dashboard/`]);
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

}
