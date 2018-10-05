import { Component, OnInit } from '@angular/core';
import { ApicallsService } from "../../services/apicalls.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;
  password: string;
  constructor(private apiCallService: ApicallsService) {}

  ngOnInit() {
  }

  userLogin() {
    console.log('fasak')
      this.apiCallService.userLogin(this.email, this.password).subscribe(data => {

          console.log(data)
          localStorage.setItem('Authorization', data.token);
          console.log(localStorage.getItem('Authorization'))
         
      });
  }

  getUsers() {
    this.apiCallService.getUsersList(localStorage.getItem('Authorization')).subscribe(data => {

      console.log(data)
     
  });
  }

}
