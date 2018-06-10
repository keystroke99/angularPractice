import { Component, OnInit } from '@angular/core';
import { ApicallsService } from "../../services/apicalls.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-clear-device-token',
  templateUrl: './clear-device-token.component.html',
  styleUrls: ['./clear-device-token.component.css']
})
export class ClearDeviceTokenComponent implements OnInit {

  constructor(private apiCallService: ApicallsService) { }
  email: string;

  ngOnInit() {
  }

clearDeviceToken() {
  if (this.email == "undefined" || this.email == null || this.email == "") {
    alert("Please enter EMAIL");
  } else {
    this.apiCallService.clearDeviceToken(this.email).subscribe(data => {
      if(data.error) {
        alert(data.error)
      } else {
        alert(data.message)
      }
    });
  }
}

}
