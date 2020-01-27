import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home-fashion-v2.component.html',
  styleUrls: ['./home-fashion-v2.component.css']
})
export class HomeFashionV2Component extends BaseComponent implements OnInit{

  loadAPI: Promise<any>;

  constructor() {
    super();
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

  ngOnInit() {

  }





}
