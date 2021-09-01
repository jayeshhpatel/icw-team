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