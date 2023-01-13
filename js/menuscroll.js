$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  $("nav").css({ transition: "all 0.5s" });
  if (wScroll < 50) {
    $("nav").removeClass("nav1").removeClass("nav2").removeClass("nav3");
    $(".menu ul li a").addClass("color1").removeClass("color2").removeClass("color3");
  } else if (wScroll >= 51 && wScroll < 720) {
    $("nav").removeClass("nav2").removeClass("nav3").addClass("nav1");
    $(".menu ul li a").addClass("color2").removeClass("color1").removeClass("color3");
  } else if (wScroll >= 721 && wScroll < 1440) {
    $("nav").removeClass("nav1").removeClass("nav3").addClass("nav2");
    $(".menu ul li a").addClass("color3").removeClass("color1").removeClass("color2");
  } else if (wScroll >= 2160) {
    $("nav").removeClass("nav1").removeClass("nav2").addClass("nav3");
    $(".menu ul li a").addClass("color3").removeClass("color2").removeClass("color1");
  }
  // console.log(wScroll);
});
