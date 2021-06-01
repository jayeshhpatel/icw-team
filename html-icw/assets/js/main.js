/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {

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
    variableWidth: true, adaptiveHeight: true,
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
  $('.main-slider').slick({
    dots: true,
    loop: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
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

  setTimeout(function () {
    $(".reveal").addClass("reveal-show");
  }, 200);

  document.querySelectorAll(".parallax-mm-bt").forEach(function (t) {

    var modifier = t.getAttribute("data-modifier");
    basicScroll.create({
      elem: t,
      from: "middle-middle",
      to: "bottom-top",
      direct: !0,
      props: {
        '--translateY': {
          from: '0',
          to: `${10 * modifier}px`
        }
      }
    }).start()

  }),
    document.querySelectorAll(".parallax-tb-bt").forEach(function (t) {
      var e = t.getAttribute("data-modifier");
      basicScroll.create({
        elem: t,
        from: "top-bottom",
        to: "bottom-top",
        direct: !0,
        props: {
          "--translateY": {
            from: "0",
            to: 10 * e + "px"
          }
        }
      }).start()
    })

});