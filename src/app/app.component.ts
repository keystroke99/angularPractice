import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  startDate;
  endDate;
  frude = false;
  ngOnInit() {
    
  }
  checkDate() {
    if(this.startDate >= this.endDate) {
      alert("end date should be greater");
      this.frude = true;
    }
    if(this.startDate <= this.endDate) {
      
    }
  }
}
