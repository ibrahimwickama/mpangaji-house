import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-mode',
  templateUrl: './user-mode.component.html',
  styleUrls: ['./user-mode.component.css']
})
export class UserModeComponent implements OnInit {

  @Output() logOut = new EventEmitter();

  showProfile:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openProfile(){
    this.showProfile = true;
  }

  cancelProfile(event){
    this.showProfile = event;
  }

  logOutClick(){
    this.logOut.emit(true);
  }

}
