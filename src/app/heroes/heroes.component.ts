import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ApicallsService } from '../services/apicalls.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  Users: any =[];
  constructor(private apiCallService: ApicallsService) { }

  ngOnInit() {
    this.apiCallService.getUsers().subscribe(data => {
      this.Users = data;
    });
  }
  
}
