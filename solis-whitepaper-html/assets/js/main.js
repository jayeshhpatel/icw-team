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
    });

    if (jQuery('.is-wrapper-onemenu .section-block').length) {
        $('.is-sidebar-onemenu a.menu-item').bind('click',function(event){
            var $anchor = $(this);
            var $hoffset = '50';
            var $tabValue = $(this).attr('href');
            // var $withoutHash = $tabValue.slice(1);
            $('.is-sidebar-onemenu .menu-item').removeClass("active");
            $('.is-wrapper-onemenu .section-hash').removeClass("show");
            $($tabValue).addClass("show");
            $anchor.addClass("active");
            $('html, body').stop().animate({
                scrollTop: $($('.content-wrapper')).offset().top-$hoffset
            }, 10,'easeInOutExpo');
            event.preventDefault();
            // return false;
        });
        $('.is-sidebar-onemenu .squre-list a').bind('click',function(event){
            var $anchor = $(this);
            var $hoffset = '50';
            var $tabValue = $(this).attr('href');
            // var $withoutHash = $tabValue.slice(1);
            $('.menu-item, .squre-list a').removeClass("active");
            $('.section-hash').removeClass("show");
            $($tabValue).addClass("show");
            $anchor.addClass("active");
            $anchor.parents('.with-sub-menu').find('.menu-item').addClass("active");
            $('html, body').stop().animate({
                scrollTop: $($('.content-wrapper')).offset().top-$hoffset
            }, 10,'easeInOutExpo');
            event.preventDefault();
            // return false;
        });
    }


    /* menu-wise scroll body */
    // $('.is-sidebar-scroll .menu-item').bind('click',function(event){
    //     var $anchor = $(this);
    //     var $hoffset = '20';
    //     $('.is-sidebar-scroll .menu-item').removeClass("active");
    //     $anchor.addClass("active");
    //     $('html, body').stop().animate({
    //         scrollTop: $($anchor.attr('href')).offset().top-$hoffset
    //     }, 10,'easeInOutExpo');
    //     event.preventDefault();
    // });

    // if (jQuery('.is-wrapper-scroll .section-block').length) {
    //     jQuery(window).scroll(function() {
    //         var scrollDistance = jQuery(window).scrollTop();
    //         jQuery('.is-wrapper-scroll .section-block').each(function(i) {      
    //             if (jQuery('.is-sidebar-scroll').length) {
    //                 if (jQuery(this).position().top <= scrollDistance - 500 ) { 
    //                     var getid = jQuery(this).attr('id');  
    //                     jQuery('.is-sidebar-scroll li a').removeClass('active');
    //                     jQuery('.is-sidebar-scroll li a[href^="#'+getid+'"]').parents('.with-sub-menu').find('.menu-item').addClass('active');
    //                     jQuery('.is-sidebar-scroll li a[href^="#'+getid+'"]').addClass('active');
                        
    //                 }
    //             }
    //         });
    //     }).scroll();
    // }

});


    