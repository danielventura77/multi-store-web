import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loadAPI: Promise<any>;

  constructor() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

  ngOnInit() { }

  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("jquery.min")) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = [
        "../../assets/js/jquery.min.js",
        "../../assets/js/popper.min.js",
        "../../assets/js/lightgallery.min.js",
        "../../assets/js/bootstrap.min.js",
        "../../assets/js/bs-custom-file-input.min.js",
        "../../assets/js/lg-fullscreen.min.js",
        "../../assets/js/lg-video.min.js",
        "../../assets/js/lg-zoom.min.js",
        "../../assets/js/masonry-grid.min.js",
        "../../assets/js/nouislider.min.js",
        "../../assets/js/simplebar.min.js",
        "../../assets/js/smooth-scroll.min.js",
        "../../assets/js/tiny-slider.min.js",
        "../../assets/js/drift.min.js",
        "../../assets/js/theme.min.js"
      ];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts [i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('body')[0].appendChild(node);
      }

    }
  }



}
