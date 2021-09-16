/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
 
  $('.toggle-sidebar,.bg-overly').on('click', function (e) {
    $('.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
    e.preventDefault();
  });
  $('.filter-btn').on('click', function (e) {
    $('.filter-dropdown').toggleClass('is-open');
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
    

  /* scroll page to top */
  if ($('.scroll-to-top').length) {
    var scrollTop = $(".scroll-to-top");
    $(window).scroll(function () {
      var topPos = $(this).scrollTop();
      if (topPos > 300) {
        $(scrollTop).addClass("is-visible");
      } else {
        $(scrollTop).removeClass("is-visible");
      }

    });
    //Click event to scroll to top
    $(scrollTop).click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 300);
      return false;
    });
  }
  $('.testimonials-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
              }
          }
      ]

  });
  $('.slick.marquee').slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });
});

