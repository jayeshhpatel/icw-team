/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/

$(document).ready(function () {
    $('.toggle-sidebar').on('click', function (e) {
        $('.navbar-collapse,.toggle-sidebar,body').toggleClass('is-visible');
        e.preventDefault();
    });
    $('.owl-carousel.category-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            460:{
                items:2
            },
            992:{
                items:3,
                nav:true
            }
        }   
    });
    $('.owl-carousel.feature-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            992:{
                items:1,
                dots:true,
            }
        }
    });
});
