import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-mode',
  templateUrl: './admin-mode.component.html',
  styleUrls: ['./admin-mode.component.css']
})
export class AdminModeComponent implements OnInit {

  showUsersToAdmin:boolean = false;
  showAnnounce:boolean = false;
  showProfile:boolean = false;
  showDataEnrty:boolean = false;


  constructor() { }

  ngOnInit() {
  }

  showUserToAdmin(){
    this.showUsersToAdmin = true;
  }

  hideUsersToAdmin(event){
    this.showUsersToAdmin = event;
  }


  showAnnouncer(){
    this.showAnnounce = true;
  }

  hideAnnouncer(event){
    this.showAnnounce = event;
  }

  showMyProfile(){
    this.showProfile = true;
  }

  hideMyProfile(event){
    this.showProfile = event;
  }

  showDataEnntry(){
    this.showDataEnrty = true;
  }

  hideDataEntry(event){
    this.showDataEnrty = event;
  }


}
