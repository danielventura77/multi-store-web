import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {BaseComponent} from '../base.component';

@Component({
  selector: 'app-product-v1',
  templateUrl: './product-v1.component.html',
  styleUrls: ['./product-v1.component.css']
})
export class ProductV1Component extends BaseComponent implements OnInit {

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
