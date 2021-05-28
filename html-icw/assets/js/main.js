/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
  new WOW().init();

  $('.menu-btn').on('click', function (e) {
    $('body').toggleClass('nav-menu-open');
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
  $('.image-slider').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});