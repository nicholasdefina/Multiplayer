import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  users;
  scores;
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.getUsers();
    this.getScores();
  }
  getUsers(){
    let observable = this._userService.getUsers();
    observable.subscribe(data => {
    console.log(data),
    this.users = data})
  }
  getScores(){
    let observable = this._userService.getScores();
    observable.subscribe(data => {
    console.log(data),
    this.scores = data})
  }

}
