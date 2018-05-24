import { Component, OnInit } from "@angular/core";
import { ApicallsService } from "../../services/apicalls.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-livestatus",
  templateUrl: "./livestatus.component.html",
  styleUrls: ["./livestatus.component.css"]
})
export class LivestatusComponent implements OnInit {
  email: string;
  liveStatus: string;
  constructor(private apiCallService: ApicallsService) {}
  User: any = {
    id : String,
    liveStatus: String
  };

  ngOnInit() {}

  changeLiveStatus() {
    if (this.email == "undefined" || this.email == null || this.email == "" || this.liveStatus == "undefined" || this.liveStatus == null || this.liveStatus == "") {
      alert("enter email and check the liveStatus checkBox");
    } else {
      this.apiCallService.changeLiveStatus(this.email).subscribe(data => {
        if(data.error) {
          if(data.error == "Please enter valid email") {
            alert("Please Enter a Valid Email")
            this.email = null;
          } 
        } else {
          this.User.id = data._id;
          this.User.liveStatus = "online";
          this.apiCallService.updateProfile(this.User).subscribe(data => {
            alert("Live Status Changed to Online")
            this.email = null;
            this.liveStatus = null;
          });
        }
      });
    }
  }
}
