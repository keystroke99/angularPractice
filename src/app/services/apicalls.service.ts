import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
  url: string;
  Users: any;
  constructor(private http: HttpClient) { 
    //this.url = 'http://prodapi.celebkonect.com:4300/'; // Prod
    this.url = 'http://devapi.celebkonect.com:4300/'; // Demo
    //this.url = 'http://localhost:4300/'; // Localhost
  }
  
   getUsers() {
    /* return this.http.get(this.url + 'users/getMemberByisCeleb/5a8d1278d44fbe0b24365e6c').subscribe(data => {
      console.log("buddies")
      console.log(data)
      return data;
      
    }); */
    // return this.http.get(this.url + 'users/getMemberByisCeleb/5a8d1278d44fbe0b24365e6c').pipe(map((response: any) => response.json()));
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

    return this.http.post(this.url + 'users/editUser', data, httpOptions).pipe(map((response: any) => response));
  }
}
