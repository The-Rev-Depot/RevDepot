import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

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


}
