function toggleName(name) {
    var x = document.getElementsByClassName(name);
    if (x.length > 0) {
      while (x.length) {
        x[0].className = name.concat("_responsive");
      }
    } else {
      x = document.getElementsByClassName(name.concat("_responsive"));
      while (x.length) {
        x[0].className = name;
      }
    }
  }

  function menuToggle() {
    toggleName("navbar");
    toggleName("nav_bar_link");
    toggleName("menu_top_container");
  }