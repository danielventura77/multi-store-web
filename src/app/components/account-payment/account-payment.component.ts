import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../base.component';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-account-payment',
  templateUrl: './account-payment.component.html',
  styleUrls: ['./account-payment.component.css']
})
export class AccountPaymentComponent extends BaseComponent implements OnInit {

  loadAPI: Promise<any>;

  constructor(private router: Router){

    super();
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });

    //subscribes every changes of your route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        //scroll to top
        window.scrollTo(0,0);
      }
    });
  }

  ngOnInit() {
  }

}
