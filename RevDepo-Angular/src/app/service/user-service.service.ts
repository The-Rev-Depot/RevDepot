import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericService } from './generic.service';
import { IUser } from '../model/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient, private genericService: GenericService, private router: Router) {
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

  getUserById(userId: number) {
    return this.httpClient.get<any>(this.genericService._localServerDomain  + `/user/${userId}`, {withCredentials: true});
  }

  addUserRequest(newUser: IUser): Observable<any> {
    console.log(newUser)
    return this.httpClient.post<any>(this.genericService._localServerDomain + `/user`, newUser, {withCredentials: true})
  }

  // we are now handling logout from the frontend, so no need to use httpClient
  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }

}
