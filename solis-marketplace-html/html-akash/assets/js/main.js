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
          breakpoint: 991,
          settings: {
              slidesToShow: 2,
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
  $('.threegrid-left').click(function(){
    $('.threegrid-slider').slick('slickPrev');
  })
  $('.threegrid-right').click(function(){
    $('.threegrid-slider').slick('slickNext');
  })

  $('.fourgrid-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    accessibility: false,
    arrows: false,
    responsive: [
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1
          }
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
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
  $('.fourgrid-left').click(function(){
    $('.fourgrid-slider').slick('slickPrev');
  })
  $('.fourgrid-right').click(function(){
    $('.fourgrid-slider').slick('slickNext');
  })
  $('.gridthree-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    accessibility: false,
    arrows: false,
    responsive: [
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 2,
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
  $('.gridfour-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    accessibility: false,
    arrows: true,
    responsive: [
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 2,
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
});

 /* WOW Animation - Init */
 try {
  new WOW().init();
} catch (e) {
  //
};
