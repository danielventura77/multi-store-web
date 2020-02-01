import * as $ from 'jquery';

export abstract class BaseComponent {

  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("jquery.min")) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = [
        "assets/js/jquery.min.js",
        "assets/js/popper.min.js",
        "assets/js/lightgallery.min.js",
        "assets/js/bootstrap.min.js",
        "assets/js/bs-custom-file-input.min.js",
        "assets/js/lg-fullscreen.min.js",
        "assets/js/lg-video.min.js",
        "assets/js/lg-zoom.min.js",
        "assets/js/masonry-grid.min.js",
        "assets/js/nouislider.min.js",
        "assets/js/simplebar.min.js",
        "assets/js/smooth-scroll.min.js",
        "assets/js/tiny-slider.min.js",
        "assets/js/drift.min.js"
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

    this.initializeThemeScript();

  }

  public initializeCardScript(){

    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("card.init")) {
        scripts[i].remove();
      }
    }

    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("card.min")) {
        scripts[i].remove();
      }
    }

    let node = document.createElement('script');
    node.src = "assets/js/card.min.js";
    node.type = 'text/javascript';
    node.async = false;
    node.charset = 'utf-8';
    document.getElementsByTagName('body')[0].appendChild(node);

    let nodeCardScript = document.createElement('script');
    nodeCardScript.src = "assets/js/card.init.js";
    nodeCardScript.type = 'text/javascript';
    nodeCardScript.async = false;
    nodeCardScript.charset = 'utf-8';
    document.getElementsByTagName('body')[0].appendChild(nodeCardScript);
  }

  private initializeThemeScript(){

    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("theme.min")) {
        scripts[i].remove();
      }
    }

    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("card.init")) {
        scripts[i].remove();
      }
    }

    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("card.min")) {
        scripts[i].remove();
      }
    }

    let node = document.createElement('script');
    node.src = "assets/js/theme.min.js";
    node.type = 'text/javascript';
    node.async = false;
    node.charset = 'utf-8';
    document.getElementsByTagName('body')[0].appendChild(node);

  }

}
