import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpHeaders, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
  url: string;
  Users: any;
  constructor(private http: HttpClient) { 
     this.url = 'http://api.1421realty.com:8888/v1/'; // Demo
  }
  
   getUsers() {
    return this.http.get(this.url + 'users/getMemberByisCeleb/5a8d1278d44fbe0b24365e6c').pipe(map((response: any) => response));
  }

  getFeeds() {

    return this.http.get(this.url + 'feeddata/allFeed').pipe(map((response: any) => response));
  }

  getComments(feedId) {

    return this.http.get(this.url + 'feedlog/getFeedCommentsByFeedId/'+feedId).pipe(map((response: any) => response));
  }

  changeLiveStatus(emailId) {

    return this.http.get(this.url + 'users/getMemberByEmail/'+emailId).pipe(map((response: any) => response));
  }

  updateProfile(data) {

    return this.http.post(this.url + 'users/editUser', data).pipe(map((response: any) => response));
  }

  clearDeviceToken(emailId) {
    return this.http.get(this.url + 'logininfo/clearLoginToken/'+emailId).pipe(map((response: any) => response));
  }
  
  paymentRequest(data) {
    const headers = new HttpHeaders()
                  .set('Content-Type', 'x-www-form-urlencoded')
                  //.set('Access-Control-Allow-Origin', '*')
                  .set('X-Api-Key', 'test_b9cea638b817efe3f5818251640')
                  .set('X-Auth-Token', 'test_fcc8a3b611c9f7277a2443c22e0')
    return this.http.post('https://test.instamojo.com/api/1.1/payment-requests/', data.string, {headers} ).pipe(map((response: any) => response));
  }

  userLogin(email, password) {
    let loginObj = {
      email : email,
      password: password
    }
    const headers = new HttpHeaders()
                  .set('Content-Type', 'application/json')
    return this.http.post(this.url + 'users/login', loginObj, {headers} ).pipe(map((response: any) => response));
  }

  getUsersList(token){
    return this.http.get(this.url + 'users/getAllUsers', { headers: {'Authorization' : token}} ).pipe(map((response: any) => response));

  }

}
