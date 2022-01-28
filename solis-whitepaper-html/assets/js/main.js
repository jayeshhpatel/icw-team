/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
  
    $('.toggle-sidebar,.bg-overly').on('click', function (e) {
        $('.bg-overly,.toggle-sidebar,body,.main-header, .menu-sidebar').toggleClass('is-visible');
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

    $('.with-sub-menu .menu-item').on('click', function (e) { 
        if($(this).parents('.with-sub-menu').hasClass('show')){
            $(this).parents('.with-sub-menu').find('.menu-item').removeClass('active');
            $(this).parents('.with-sub-menu').removeClass('show');
            $(this).parents('.with-sub-menu').find('.squre-list').slideUp();
        } else {
            $('.with-sub-menu .menu-item').removeClass('active');
            $('.with-sub-menu').removeClass('show');
            $('.with-sub-menu .squre-list').slideUp();
            $(this).parents('.with-sub-menu').find('.menu-item').addClass('active');
            $(this).parents('.with-sub-menu').addClass('show');
            $(this).parents('.with-sub-menu').find('.squre-list').slideDown();
        }       
    })
});

/* menu-wise scroll body */
$('.menu-item').bind('click',function(event){
    var $anchor = $(this);
    var $hoffset = '20';
    $('.menu-item').removeClass("active");
    $anchor.addClass("active");
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top-$hoffset
    }, 10,'easeInOutExpo');
    event.preventDefault();
});

if (jQuery('.section-block').length) {
    jQuery(window).scroll(function() {
        var scrollDistance = jQuery(window).scrollTop();
        jQuery('.section-block').each(function(i) {      
            if (jQuery('.sidebar-menu-list').length) {
                if (jQuery(this).position().top <= scrollDistance - 500 ) { 
                    var getid = jQuery(this).attr('id');  
                    jQuery('.sidebar-menu-list li a').removeClass('active');
                    jQuery('.sidebar-menu-list li a[href^="#'+getid+'"]').parents('.with-sub-menu').find('.menu-item').addClass('active');
                    jQuery('.sidebar-menu-list li a[href^="#'+getid+'"]').addClass('active');
                    
                }
            }
        });
    }).scroll();
}