// Modal
document.querySelector("#call").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "flex";
  document.body.style.overflow = "hidden";
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "none";
  document.body.style.overflow = "visible";
});

function mobileNavAdjustment() {
  if ($(window).width() < 610) {
    var navWidth = $("nav").outerWidth();
    var logoWidth = $(".small-logo").outerWidth();
    var menuLinesWidth = $(".menu__lines").outerWidth(true);
    var mailIconWidth = $("#mail-icon").outerWidth(true);
    var phoneIconWidth = $("#phone-icon").outerWidth(true);
    var marg =
      navWidth -
      (logoWidth + menuLinesWidth + mailIconWidth + phoneIconWidth + 20);
    $(".small-logo").css("margin-right", marg);
  }
}
