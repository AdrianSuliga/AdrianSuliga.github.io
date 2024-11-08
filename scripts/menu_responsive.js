function menuToggle() {
  let navbar = "mynavbar";
  let x = document.getElementById(navbar);
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}