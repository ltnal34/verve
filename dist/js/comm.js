$(function () {
  const navPlus = $(".active");
  const navMenu = navPlus.find(".depth2");
  navPlus.click(function () {
    navMenu.animate({
      height: "toggle",
    });
  });
});
