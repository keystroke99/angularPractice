import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-datevalidation",
  templateUrl: "./datevalidation.component.html",
  styleUrls: ["./datevalidation.component.css"]
})
export class DatevalidationComponent implements OnInit {
  title = "Tour of Heroes";
  startDate;
  endDate;
  frude = true;
  wrongStartDate = false;
  ngOnInit() {
 
  }
  checkDate() {
    if (this.startDate >= this.endDate) {
      this.frude = true;
      this.wrongStartDate = true;
    }
    if (this.startDate <= this.endDate) {
      this.frude = false;
      this.wrongStartDate = false;
    }
    if (this.startDate >= this.endDate) {
      this.frude = true;
      this.wrongStartDate = true;
    }
  }
}
