import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HpptProviderService} from "../../services/hppt-provider.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() completeSignUp = new EventEmitter();

  fname:any;
  lname:any;
  username:any;
  phone:any;
  email:any;
  password:any;
  re_password:any;


  constructor(public httpProvider: HpptProviderService) { }

  ngOnInit() {
  }

  singUpClick(){
    console.log("worekd ");
    // this.httpProvider.uploadUserInfo(this.fname,this.lname,this.username,this.phone,this.email,this.password).subscribe(response =>{
    //   console.log("worekd "+response);
    //   this.completeSignUp.emit(true);
    // });
  }

}
