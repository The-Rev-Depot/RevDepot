import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userServ: UserServiceService, private router:Router) { }

  userAccount: IUser=
    {
    userId: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    urlProPic: '',
    birthday: '',
  }


  ngOnInit(): void {
  }

  registerUser() {

    this.userServ.addUserRequest(this.userAccount).subscribe(data => { console.log(data) });

  }

}
