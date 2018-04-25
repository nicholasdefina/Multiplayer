import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  userid;
  constructor(private _http: Http) { }

  createUser(first,last,email,password, confirm){
    console.log("at user service")
    return this._http.post('/api/users', {first:first, last:last, email:email, password:password, confirm:confirm}).map(data =>data.json()).toPromise();
  }
  setID(id){
    this.userid = id;
  }
  getID(){
    return this.userid;
  }
  checkID(id){
    return this._http.get('/api/active/'+id)
  }
  getUsers(){
    return this._http.get('/api/users')
  }
  getScores(){
    return this._http.get('/api/users/scores')
  }

}
