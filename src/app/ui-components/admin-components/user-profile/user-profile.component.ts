import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Output() showProfile = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cancelProfile(){
    this.showProfile.emit(false);
  }

}
