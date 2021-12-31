/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/

jQuery(function (o) {
	o(".purple-circle-btn").hover(function () {
		o(this).addClass("hovered")
	})
})
$(document).ready(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
  
  $('.toggle-sidebar,.bg-overly').on('click', function (e) {
    $('.navbar-collapse,.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
    e.preventDefault();
  });


  $(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
        $('.main-header').addClass('fixed-header');
    }
    else {
        $('.main-header').removeClass('fixed-header');
    }
  });

});