import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  @Output() showToAddAdmin = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cancelUsersToAdmin(){
    this.showToAddAdmin.emit(false);
  }


}
