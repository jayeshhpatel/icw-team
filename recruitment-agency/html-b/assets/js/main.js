/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {

  $('.menu-icon,.bg-overly').on('click', function (e) {
    $('.menu-list,.bg-overly,.menu-icon,body').toggleClass('is-visible');
    e.preventDefault();
  });

  if ($('.main-header').length) {
    $(window).scroll(function () {
      if (jQuery(this).scrollTop() > 10) {
        $(".main-header").addClass("fixed-header");
      } else {
        $(".main-header").removeClass("fixed-header");
      }
    });
  }
});