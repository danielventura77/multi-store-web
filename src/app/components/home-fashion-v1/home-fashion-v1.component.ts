import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base.component';

@Component({
  selector: 'app-home-fashion-v1',
  templateUrl: './home-fashion-v1.component.html',
  styleUrls: ['./home-fashion-v1.component.css']
})
export class HomeFashionV1Component extends BaseComponent implements OnInit {

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
