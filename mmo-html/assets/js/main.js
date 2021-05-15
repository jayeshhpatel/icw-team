$(document).ready(function () {
    $('.sidenav').sidenav();
    $('#sidenav-1').sidenav({ edge: 'right' });
    $('#sidenav-2').sidenav({
        edge: 'right',
        closeOnClick: true
    });
    $('.tooltipped').tooltip();
    $('.dropdown-trigger').dropdown();
    $('.collapsible').collapsible();
    $('select').formSelect();
    $('#alert_close').click(function () {
        $(".alert").fadeOut("slow", function () {
        });
    });
    $('.menu-icon').on('click', function (e) {
        $('body,.menu-icon,.navbar-side-menu,.sidenav-overlay').toggleClass('is-visible');
        e.preventDefault();
    });
    $('.sidenav-overlay').on('click', function (e) {
        $('.menu-icon,.navbar-side-menu,.sidenav-overlay').removeClass('is-visible');
        $('body').removeClass('is-visible');
        e.preventDefault();
    });
    $('.notification-menu').on('click', function (e) {
        $('body,.menu-icon,.navbar-side-menu,.sidenav-overlay').removeClass('is-visible');
        e.preventDefault();
    });
    $('.invited-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]

    });
    if ($('.wishlist-toggle').length) {
        $('.wishlist-toggle').click(function(){ 
            if($(this).hasClass("liked")){
                $(this).html('<i class="material-icons">favorite_border</i>');
                $(this).removeClass("liked");
              }else{
                $(this).html('<i class="material-icons">favorite</i>');
                $(this).addClass("liked");
              }
        });
    }
});

 /* Filter Navbar in Mobile */
 if ($('.mobile-filter-nav').length) {
    $('.filter-btn').click(function(){ 
        $('.mobile-filter-nav').addClass('open');
        $('body').addClass('overflow-hidden');
    })        
    $('.mobile-filter-close').click(function(){ 
        $('.mobile-filter-nav').removeClass('open');
        $('body').removeClass('overflow-hidden');
    }) 

    $(".mobile-filter-nav li a").on('click', function(){		
        var parentLevel = $(this).parents('ul').length -1;
        var currentMenu = $(this).closest('ul');
        var currentListItem = $(this).parent('li');
        var parentMenu = $('.level-' + parentLevel);
        var subMenu = $(this).next('ul');

        if(currentListItem.hasClass('back')) {
            // back button hit	
            currentMenu.removeClass('open');
            parentMenu.removeClass('hidden');
        } else if (currentListItem.children('ul').length > 0) {
            // menu item has children - expand the menu
            subMenu.toggleClass('open');
            currentMenu.addClass('hidden');
        }
    });

    $(".btn.back").on('click', function(){ 
        var parentLevel = $(this).parents('ul').length -1;
        $(this).closest('ul').removeClass('open');
        $('.level-' + parentLevel).removeClass('hidden');
    });
}