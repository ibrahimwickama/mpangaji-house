import { Injectable } from '@angular/core';
import {Http,Response, RequestOptions,Headers} from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class HpptProviderService {

  loginInfo:any;
  loginState:any;

  constructor(private http: Http) { }

  uploadSignUpInfo(fname,lname,username,phone,email,password, mkoa, wilaya,mtaa,apt_name){
    let url = "../../../api/signup.php";
    return this.http.post(url,
      {'fname': fname, 'lname': lname, 'username': username,
        'phone': phone, 'email': email, 'password': password,
        'mkoa':mkoa, 'wilaya':wilaya, 'mtaa':mtaa, 'apt_name':apt_name})
      .map((response: Response) =>{
        console.log("Sign Up status: "+response.text());
        JSON.parse(response.text());
      }).catch( this.handleError );
  }


  loginAction(username,password){
    let url = "../../../api/login.php";
    return this.http.post(url,{'username':username, 'password':password})
      .map((response: Response) =>{
      // console.log("my login infos : "+username);
      this.loginState = response.text();
      this.loginInfo = JSON.parse(response.text());
  }).catch( this.handleError );

  }





  private handleError (error: Response) {
    return Observable.throw(error || "Server Error");
  }

}
