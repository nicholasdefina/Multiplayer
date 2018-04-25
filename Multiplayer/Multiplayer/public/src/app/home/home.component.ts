import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  first;
  last;
  email;
  password;
  message;
  confirm;
  userid;

  constructor(private _userService:UserService, private _router:Router) { }

  ngOnInit() {
  }

  createUser(){
    console.log(this.password)
    console.log(this.confirm)
    this._userService.createUser(this.first, this.last, this.email, this.password, this.confirm).then((data=>{
      console.log(data, "this is component data")
      if(data['message']=='success'){
        this.userid = data['user']['_id'];
        this._userService.setID(this.userid);
        var temp = this._userService.getID();
        var check = this._userService.checkID(this.userid);
        check.subscribe(data => {
          console.log(data);
          console.log(data['_body']);
        })
        this._router.navigateByUrl('lobby')
      }
      else
      {
        this.message = "Could not be saved. Please try again."
      }
    }))
  }



}
