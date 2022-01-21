/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
  
  // $('.menu-icon,.bg-overly').on('click', function (e) {
  //   $('.navbar-collapse,.bg-overly,.menu-icon,body,.main-header').toggleClass('is-visible');
  //   e.preventDefault();
  // });

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
function toggleSidebar(){
  let hmbButton = document.querySelector('.menu-icon');
  if(hmbButton.classList.contains('is-active')){
      document.querySelector('.main-sidebar').classList.remove("open");
      hmbButton.classList.remove('is-active');
  }else{
      document.querySelector('.main-sidebar').classList.add("open");
      hmbButton.classList.add('is-active');
  }
}