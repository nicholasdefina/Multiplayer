import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  createUser(first,last,email,password, confirm){
    console.log("at user service")
    return this._http.post('/api/users', {first:first, last:last, email:email, password:password, confirm:confirm}).map(data =>data.json()).toPromise();
  }

}
