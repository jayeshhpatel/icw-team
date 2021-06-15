/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/


$(document).ready(function () {
  $('.collapsible').collapsible();

  $('.bar-icon,.bg-overly').on('click', function (e) {
    $('.menu-list,.bg-overly.bar-icon,body').toggleClass('is-visible');
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
});