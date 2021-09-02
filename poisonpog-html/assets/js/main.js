/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
  
  $('.toggle-sidebar,.bg-overly').on('click', function (e) {
    $('.navbar-collapse,.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
    e.preventDefault();
  });

    /* scroll page to top */
    if ($('.scroll-to-top').length) {
      var scrollTop = $(".scroll-to-top");
      $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        if (topPos > 600) {
          $(scrollTop).addClass("is-visible");
        } else {
          $(scrollTop).removeClass("is-visible");
        }
  
      });
      //Click event to scroll to top
      $(scrollTop).click(function () {
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });
    }

    $(window).scroll(function(){
      if ($(window).scrollTop() >= 10) {
          $('.main-header').addClass('fixed-header');
      }
      else {
          $('.main-header').removeClass('fixed-header');
      }
    });

});