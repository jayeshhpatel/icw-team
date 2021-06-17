/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/


$(document).ready(function () {
  $('.collapsible').collapsible();
  $('.tooltipped').tooltip();

  $('.bar-icon,.bg-overly').on('click', function (e) {
    $('.menu-list,.bg-overly.bar-icon,body').toggleClass('is-visible');
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