import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../base.component';

@Component({
  selector: 'app-home-electronics',
  templateUrl: './home-electronics.component.html',
  styleUrls: ['./home-electronics.component.css']
})
export class HomeElectronicsComponent extends BaseComponent implements OnInit {

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
