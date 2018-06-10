import { Component, OnInit } from '@angular/core';
import { ApicallsService } from "../../services/apicalls.service";
import { Subscription } from "rxjs";
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private apiCallService: ApicallsService) { }
  amount: string;
  purpose: string;

  ngOnInit() {
    this.amount = '10.00';
    this.purpose = 'Credit Recharge';
  }

  paymentRequest() {
    const body = new HttpParams()
    .set('amount', this.amount)
    .set('purpose', this.purpose);
    console.log('controller');
    console.log(body);
    this.apiCallService.paymentRequest(body).subscribe(data => {
      console.log('response')
      console.log(data);
    });

  }

}
