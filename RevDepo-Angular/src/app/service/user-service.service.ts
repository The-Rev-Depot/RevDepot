import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericService } from './generic.service';
import { IUser } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  checkloggedIn = true;
  constructor(private httpClient: HttpClient, private genericService: GenericService) {
  }

  userLogin(username: string, password: string){
    return this.httpClient.post<any>(this.genericService._localServerDomain  + "/login",{
      username: username,
      password: password
    }, {withCredentials: true});
  }

  getUserByEmail(email: string){
    return this.httpClient.get<any>(this.genericService._localServerDomain  + `/user/email/${email}`, {withCredentials: true});
  }

  getUserByUsername(username: string) {
    return this.httpClient.get<any>(this.genericService._localServerDomain  + `/user/username/${username}`, {withCredentials: true});
  }

  addUserRequest(newUser: IUser): Observable<any> {
    console.log(newUser)
    return this.httpClient.post<any>(this.genericService._localServerDomain + `/user`, newUser, {withCredentials: true})
  }


}
