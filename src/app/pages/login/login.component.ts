import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() didLogin = new EventEmitter();

  didLog:boolean = false;

  constructor() { }

  ngOnInit() {
  }


  loginClick(){
    this.didLogin.emit(true);
  }

}
