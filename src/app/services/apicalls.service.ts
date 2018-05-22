import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
  url: string;
  Users: any;
  constructor(private http: HttpClient) { 
    this.url = 'http://devapi.celebkonect.com:4300/';
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
}
