import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../base.component';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-product-v2',
  templateUrl: './product-v2.component.html',
  styleUrls: ['./product-v2.component.css']
})
export class ProductV2Component extends BaseComponent implements OnInit {

  loadAPI: Promise<any>;

  constructor(private router: Router) {
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
