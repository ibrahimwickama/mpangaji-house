import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HpptProviderService} from "../../services/hppt-provider.service";

@Component({
  selector: 'app-user-mode',
  templateUrl: './user-mode.component.html',
  styleUrls: ['./user-mode.component.css']
})
export class UserModeComponent implements OnInit {

  @Output() logOut = new EventEmitter();

  showProfile:boolean = false;
  userInfo:any;

  constructor(private httpProvider: HpptProviderService) { }

  ngOnInit() {
    this.userInfo = this.httpProvider.loginInfo;
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
