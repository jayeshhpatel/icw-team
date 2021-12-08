/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
  
  $('.toggle-sidebar,.bg-overly').on('click', function (e) {
    $('.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
    e.preventDefault();
  });

  if ($('.header-nav-wrap').length) {
    $(window).scroll(function () {
      if (jQuery(this).scrollTop() > 10) {
        $(".header-nav-wrap").addClass("fixed-header");
      } else {
        $(".header-nav-wrap").removeClass("fixed-header");
      }
    });
  }
});

 /* WOW Animation - Init */
 try {
  new WOW().init();
} catch (e) {
  //
};
