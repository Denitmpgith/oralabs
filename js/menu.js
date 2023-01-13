let links = document.getElementsByClassName("link");

function navlink() {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      var off = document.getElementsByClassName("active");
      if (off.length > 0) {
        off[0].className = off[0].className.replace("active", "");
      }
      this.classList.add("active");
    });
  }
}

navlink();
