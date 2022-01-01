/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
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
  $(".menu-item-has-children .arrow-down").click(function () {
    if ($(this).closest(".menu-item-has-children").hasClass("open")) {
        $(this).closest(".menu-item-has-children").removeClass("open");
        $(this).closest(".menu-item-has-children").find(".sub-menu").slideUp();
    } else {
        $(".menu-item-has-children").removeClass("open");
        $(".menu-item-has-children").find(".sub-menu").slideUp();
        $(this).closest(".menu-item-has-children").addClass("open");
        $(this).closest(".menu-item-has-children").find(".sub-menu").slideDown();
    }
  })
});