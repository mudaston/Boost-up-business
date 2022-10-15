$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: [
      '<span class="icon-chevron-left-solid"></span>',
      '<span class="icon-chevron-right-solid"></span>',
    ],
    center: true,
    dots: true
  });
});
$(".thumb").click(function () {
  $(".owl-carousel").trigger("to.owl.carousel", [$(this).index(), 300]);
});
