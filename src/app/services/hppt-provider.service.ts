import { Injectable } from '@angular/core';
import {Http, RequestOptions,Headers} from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class HpptProviderService {

  constructor(private http: Http) { }

  uploadUserInfo(fname,lname,username,phone,email,password){
    let url = "../../../api/trialLoad.php";
    let reqstHeadDon = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: reqstHeadDon });
    return this.http.post(url,{'fname': fname, 'lname': lname, 'username': username, 'phone': phone, 'email': email, 'password': password}, options)
      .map(response =>{
        console.log("hello the response  :"+response)
      }).catch( this.handleError );
  }

  private handleError (error: Response) {
    return Observable.throw(error || "Server Error");
  }

}
