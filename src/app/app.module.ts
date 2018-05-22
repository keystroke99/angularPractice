import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from'@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DatevalidationComponent } from './components/datevalidation/datevalidation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ApicallsService } from './services/apicalls.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
  {path: 'datevalidation', component: DatevalidationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'celebrities', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DatevalidationComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [
    ApicallsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
