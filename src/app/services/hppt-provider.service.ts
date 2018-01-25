import { Injectable } from '@angular/core';
import {Http,Response, RequestOptions,Headers} from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class HpptProviderService {

  loginInfo:any;

  constructor(private http: Http) { }

  uploadSignUpInfo(fname,lname,username,phone,email,password){
    let url = "../../../api/signup.php";
    // let reqstHeadDon = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    // let options = new RequestOptions({ headers: reqstHeadDon });
    return this.http.post(url,{'fname': fname, 'lname': lname, 'username': username, 'phone': phone, 'email': email, 'password': password})
      .map((response: Response) =>{
        console.log("hello the response  :"+response.text());
        JSON.parse(response.text());
      }).catch( this.handleError );
  }


  loginAction(username,password){
    let url = "../../../api/login.php";
    return this.http.post(url,{'username':username, 'password':password})
      .map((response: Response) =>{
      // console.log("my login infos : "+username);
      this.loginInfo = JSON.parse(response.text());
  }).catch( this.handleError );

  }





  private handleError (error: Response) {
    return Observable.throw(error || "Server Error");
  }

}
