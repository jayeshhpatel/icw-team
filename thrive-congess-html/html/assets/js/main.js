/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
 
  $('.toggle-sidebar,.bg-overly').on('click', function (e) {
    $('.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
    e.preventDefault();
  });
  $('.filter-btn').on('click', function (e) {
    $('.filter-dropdown').toggleClass('is-open');
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
  // Hide SubMenus.
    $(".dropdown-menu-list").hide();

    // Shows dropdown-menu-list when it's parent is hovered.
    $(".dropdown-mega-menu").hover(function () {
      $(this).find(".dropdown-menu-list").not(':animated').slideDown(300);
      $(this).toggleClass("active");
      $(".navbar").toggleClass("active");
      sectionHeight = $(this).find(">.dropdown-menu-list").height();
      $('head').append('<style>.main-header .navbar:after {height: ' + sectionHeight + 'px;}</style>');
    });

    // Hides dropdown-menu-list when mouse leaves the zone.
    $(".dropdown-mega-menu").mouseleave(function () {
      $(this).find(".dropdown-menu-list").slideUp(150);
      $(".navbar").removeClass("active");
      $("style").remove();
    });

    // Prevents scroll to top when clicking on <a href="#"> 
    $("a[href=\"#\"]").click(function () {
      return false;
    });

  /* scroll page to top */
  if ($('.scroll-to-top').length) {
    var scrollTop = $(".scroll-to-top");
    $(window).scroll(function () {
      var topPos = $(this).scrollTop();
      if (topPos > 300) {
        $(scrollTop).addClass("is-visible");
      } else {
        $(scrollTop).removeClass("is-visible");
      }

    });
    //Click event to scroll to top
    $(scrollTop).click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 300);
      return false;
    });
  }
});

// $(".navbar-nav > li").mousemove(function () {
//   var ele = $(this);
//   $(ele).find("a + .dropdown-menu-list").not(':animated').slideDown(300);
//   $(this).toggleClass("active");
//   $(".navbar").toggleClass("active");

//   sectionHeight = $(this).find('a + .dropdown-menu-list:not(:animated)').height();

//   $('head').append('<style>.main-header .navbar:after {height: ' + sectionHeight + 'px;}</style>');
//   console.log(sectionHeight);
// });

// // Hides dropdown-menu-list when mouse leaves the zone.
// $(".dropdown-menu-list").parent("li").mouseleave(function () {
//   $(this).find(">.dropdown-menu-list").slideUp(150);
//   $(".navbar").removeClass("active");
//   $("style").remove();
// });