import { Component, OnInit } from '@angular/core';
import { ApicallsService } from '../../services/apicalls.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  
  Feeds: any =[];
  Comments: any =[];
  imageUrl = 'http://prodapi.celebkonect.com:4300/'

  constructor(private apiCallService: ApicallsService) { }

  ngOnInit() {
    this.apiCallService.getFeeds().subscribe(data => {
      this.Feeds = data;
    });
  }

  viewComments(feedId) {
    this.apiCallService.getComments(feedId).subscribe(data => {
      this.Comments = data;
      console.log(data)
    });
  }

}
