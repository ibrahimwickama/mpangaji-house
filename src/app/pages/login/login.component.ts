import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HpptProviderService} from "../../services/hppt-provider.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() didLogin = new EventEmitter();
  @Output() doSignUp = new EventEmitter();

  didLog:boolean = false;
  username:any;
  password:any;

  allUsers: any;


  constructor(private httpProvider: HpptProviderService) { }

  ngOnInit() {
    // this.httpProvider.loginAction().subscribe(response=>{
    //   this.allUsers =this.httpProvider.loginInfo;
    //   console.log(this.allUsers);
    //
    //   this.allUsers.forEach((user:any)=>{
    //     if(user.username === this.username && user.pass === this.password){
    //       console.log("Found Match")
    //     }else{
    //       console.log("Found noooo Match")
    //     }
    //   })
    // })
  }


  loginClick(){
    this.httpProvider.loginAction(this.username, this.password).subscribe(response=>{
      console.log("my Login Info are.: "+JSON.stringify(this.httpProvider.loginInfo));
      let loginResponse = this.httpProvider.loginInfo;
      if(loginResponse[0].status === "failed"){
        console.log("OOps");
      }else {
        this.didLogin.emit(true);
      }


    });






    // this.allUsers.forEach((user:any)=>{
    //   if(user.username === this.username && user.pass === this.password){
    //     console.log("Found Match")
    //   }else{
    //     console.log("Found noooo Match")
    //   }
    // })
    // this.didLogin.emit(true);
  }

  signUpClick(){
    this.doSignUp.emit(true);
  }



}
