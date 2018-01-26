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

  fname:any;                apt_name:any;
  lname:any;                mtaa:any;
  username:any;             wilaya:any;
  phone:any;                mkoa:any;
  email:any;
  password:any;
  re_password:any;

  userInfoFull:boolean = false;
  aptDetailFull:boolean = true;


  constructor(public httpProvider: HpptProviderService) { }

  ngOnInit() {
  }

  continueSingUpClick(){
    this.userInfoFull = true;
    this.aptDetailFull = false
  }

  singUpClick(){
    this.httpProvider.uploadSignUpInfo(this.fname,this.lname,this.username,this.phone,this.email,this.password, this.mkoa,this.wilaya,this.mtaa,this.apt_name).subscribe(response =>{
      console.log("worekd "+response);
      this.completeSignUp.emit(true);
    });
  }

}
