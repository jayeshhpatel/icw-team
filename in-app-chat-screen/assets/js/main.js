/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
  
  $('.toggle-sidebar,.bg-overly').on('click', function (e) {
    $('.navbar-collapse,.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
    e.preventDefault();
  });

  if($('.collapse-info-block').length) { 
    $('.collapse-card .collaspe-header').on( 'click', function() { 
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parents('.collapse-card').find('.collapse-body').slideUp().removeClass('show');
        } else {
            $(this).addClass('active');
            $(this).parents('.collapse-card').find('.collapse-body').slideDown().addClass('show');
        }
    });
  }
});