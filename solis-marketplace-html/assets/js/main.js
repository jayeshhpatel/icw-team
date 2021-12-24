/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
  
  $('.toggle-sidebar,.bg-overly').on('click', function (e) {
    $('.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
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
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    accessibility: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
          }
      }
    ]
  });
  $('.threegrid-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    accessibility: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
    ]
  });
  $('.arrow-left').click(function(){
    $('.threegrid-slider').slick('slickPrev');
  })
  
  $('.arrow-right').click(function(){
    $('.threegrid-slider').slick('slickNext');
  })
});

 /* WOW Animation - Init */
 try {
  new WOW().init();
} catch (e) {
  //
};
