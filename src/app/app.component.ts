import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  adminLogOutStatus: boolean = true;
  userLogOutStatus: boolean = true;
  notLogedIn: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doLogin(event){
    this.userLogOutStatus = false;
    this.notLogedIn = false;
  }

  adminLogOutClick(event){
    this.adminLogOutStatus = true;
    this.notLogedIn = true;
  }

  userLogOutClick(event){
    this.userLogOutStatus = true;
    this.notLogedIn = true;
  }

}
