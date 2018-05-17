import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
  url: string;
  constructor(private http: Http) { 
    this.url = 'http://devapi.celebkonect.com/';
  }

  getUsers() {
    return this.http.get(this.url + '').map(res => {
      return res.json();
    })
  }
}
