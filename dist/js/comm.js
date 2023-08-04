<<<<<<< HEAD
$(function () {
  const navPlus = $(".active");
  const navMenu = navPlus.find(".depth2");
  navPlus.click(function () {
    navMenu.animate({
      height: "toggle",
    });
  });
});
=======
var swiper = new Swiper(".slide-g", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".sale-slide", {});
>>>>>>> 81d5a64bf931306c7de687075c9c4b72b532e395
