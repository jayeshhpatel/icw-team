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


  $('.slick.marquee').slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });
  $('.single-banner-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll:1,
    infinite: false,
    customPaging : function(slider, i) {
      var title = $(slider.$slides[i]).data('title');
        return '<a class="pager__item"> '+title+' </a>';
    },
  });
  $('.single-banner-slider1').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll:1,
    infinite: false,
    customPaging : function(slider, i) {
      var title = $(slider.$slides[i]).data('title');
        return '<a class="pager__item"> '+title+' </a>';
    },
  });
  $('.testimonial-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll:1,
    infinite: true,
  });
  $('.single-banner-slider2').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll:1,
    infinite: false,
    appendDots: $('.slick-slider-dots'),
    customPaging : function(slider, i) {
      var title = $(slider.$slides[i]).data('title');
        return '<a class="pager__item"> '+title+' </a>';
    },
  });
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
        $('.main-header').addClass('fixed-header');
    }
    else {
        $('.main-header').removeClass('fixed-header');
    }
  });

   //------- Initialising Slick Slider
   $('.filter-slider').slick({
    arrows: false,
    dots: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    slidesToShow: 5,
    slidesToScroll:9,
    infinite: false,
    customPaging : function(slider, i) {
      var title = $(slider.$slides[i]).data('title');
        return '<a class="pager__item"> '+title+' </a>';
    },
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        dots:false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        dots:false
      }
    }
  ]
  });
  
  //------- Click to filter slides according to user's choice
  
  $(document).on('click', '.filter-option li a', function(){
      $('.filter-option li a').removeClass('active');
        $(this).addClass('active');
        var cat = $(this).attr('data-category');
        if(cat !== 'all'){
          $('.filter-slider').slick('slickUnfilter');

          $('.filter-slider li').each(function(){
            $(this).removeClass('slide-shown');
          });
          $('.filter-slider li[data-match='+ cat +']').addClass('slide-shown');

          $('.filter-slider').slick('slickFilter', '.slide-shown');
        }
        else{
          $('.filter-slider li').each(function(){
            $(this).removeClass('slide-shown');
          });
          $('.filter-slider').slick('slickUnfilter');
      }
  });
  $(document).on('click', '.filter-option li a', function(){
    $('.filter-option li a').removeClass('active');
      $(this).addClass('active');
      var cat = $(this).attr('data-category');
      if(cat !== 'all'){

        $('.filter-category li').each(function(){
          $(this).removeClass('img-active');
        });
        $('.filter-category li[data-match='+ cat +']').addClass('img-active');
      }
      else{
        $('.filter-category li').each(function(){
          $(this).removeClass('img-active');
        });
    }
  });

  $('.category-list ul li a').click(function(){
    //hide all works by default 
    $(".category-box").addClass('category-hide');
    //show slected works based on the menu clicked
    $(".category-box[data-filter='"+$(this).attr('data-filter')+"']").removeClass("category-hide");
    //remove selected class to the link      
    $('.category-list ul li a').removeClass('selected');
    //add selected class to the active link
    $(this).addClass('selected');
    return false;
   });
   //show all works for "all" menu
  $('a[data-filter="*"]').click(function(event) {    
     $(".category-box").removeClass('category-hide');
     return false;
  });

  if($('.work-slider').length) {
    var swiper = new Swiper('.work-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
        },
    });
  }

  $(".accordion-toggle .accordion-title").click(function () {
    if ($(this).closest(".accordion-toggle").hasClass("open")) {
        $(this).closest(".accordion-toggle").removeClass("open");
        $(this).closest(".accordion-toggle").find(".accordion-panel").slideUp();
    } else {
        $(".accordion-toggle").removeClass("open");
        $(".accordion-toggle").find(".accordion-panel").slideUp();
        $(this).closest(".accordion-toggle").addClass("open");
        $(this).closest(".accordion-toggle").find(".accordion-panel").slideDown();
    }
})
});