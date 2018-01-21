import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  adminLogOutStatus: boolean = true;
  userLogOutStatus: boolean = true;
  userSignUp: boolean = false;
  notLogedIn: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doLoginClick(event){
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

  doSignUpClick(event){
    this.userSignUp = true;
    this.adminLogOutStatus = true;
    this.userLogOutStatus = true;
    this.notLogedIn = false;
  }

  doneSignUp(event){
    this.userSignUp = false;
    this.userLogOutStatus = false;
    this.notLogedIn = false;
  }

}
