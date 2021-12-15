import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  public _localClientDomain: string = 'http://localhost:4200/revdepot';
  public _localServerDomain: string = 'http://localhost:9999/revdepot';

  constructor() { }
}
