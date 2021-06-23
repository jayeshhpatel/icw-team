/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/

jQuery(function (o) {
	o(".site-btn1").hover(function () {
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

        $('.about-inner-image li').each(function(){
          $(this).removeClass('img-active');
        });
        $('.about-inner-image li[data-match='+ cat +']').addClass('img-active');
      }
      else{
        $('.about-inner-image li').each(function(){
          $(this).removeClass('img-active');
        });
    }
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
});