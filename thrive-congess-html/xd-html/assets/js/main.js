/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/

// is-sticky-header
// When the user scrolls the page, execute stickyHeaderFunction
window.onscroll = function() {stickyHeaderFunction()};
var header = document.querySelector(".is-sticky-header");
var sticky = header.offsetTop;
function stickyHeaderFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("is-sticky");
  } else {
    header.classList.remove("is-sticky");
  }
}
/*
let lastScroll = 0;
window.addEventListener("scroll", () => {
    let header = document.querySelector(".is-sticky-header");
    if(header){
        let currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            header.classList.remove("scroll-up");
            return;
        }
        if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
            // down
            header.classList.remove("scroll-up");
            header.classList.add("scroll-down");
        } else if (currentScroll < lastScroll && header.classList.contains("scroll-down")) {
            // up
            header.classList.remove("scroll-down");
            header.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
    }
});
*/

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

if(document.querySelector(".toggle-filter")){
    const toggleEls = document.querySelectorAll('.toggle-filter');
    for (const el of toggleEls) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            el.classList.toggle('selected');
        });
    }   
}


// equalHeight
(function () {
    equalHeight(false);
})();
window.onresize = function(){
    equalHeight(true); 
}
function equalHeight(resize) {
    var w = document.documentElement.clientWidth;
    var elements = document.getElementsByClassName("equalHeight"),
        allHeights = [],
        i = 0;
    if(resize === true){
        for(i = 0; i < elements.length; i++){
        elements[i].style.minHeight = 'auto';
        }
    }
    for(i = 0; i < elements.length; i++){
        var elementHeight = elements[i].clientHeight;
        allHeights.push(elementHeight);
    }
    for(i = 0; i < elements.length; i++){
        console.log(w);
        if(w > 1200){
            elements[i].style.minHeight = Math.max.apply( Math, allHeights) + 'px';
        } else {
            elements[i].style.minHeight = 'auto';
        }
        // if(resize === false){
        // elements[i].className = elements[i].className + " eh-show";
        // }
    }
}

//embed-video
if(document.querySelector(".embed-video")){
    var videoPlayButton,
        videoWrapper = document.getElementsByClassName('embed-play-action')[0],
        video = document.getElementsByClassName('embed-video')[0],
        playcolor = videoWrapper.dataset.playcolor;
        playiconcolor = videoWrapper.dataset.playiconcolor;
    
    if(playcolor == null || playcolor == ""){
        playcolor = '#D0006F';
    }
    if(playiconcolor == null || playiconcolor == ""){
        playiconcolor = '#ffffff';
    }

    function videoMethods(video,videoWrapper){
        return {
            renderVideoPlayButton: function() {
                if (videoWrapper.contains(video)) {
                    this.formatVideoPlayButton()
                    video.classList.add('has-media-controls-hidden')
                    videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                    videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
                }
            },

            formatVideoPlayButton: function() {
                videoWrapper.insertAdjacentHTML('beforeend', '\<div class="video-overlay-play-button"><svg width="88" height="59" viewBox="0 0 88 59" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M80 2.99512H8C5.79086 2.99512 4 4.78598 4 6.99512V48.9951C4 51.2043 5.79086 52.9951 8 52.9951H80C82.2091 52.9951 84 51.2043 84 48.9951V6.99512C84 4.78598 82.2091 2.99512 80 2.99512Z" fill="'+playcolor+'"/></g><path d="M57.0669 27.3731L36.9999 39.0731V15.6731L57.0669 27.3731Z" fill="'+playiconcolor+'"/><defs><filter id="filter0_d" x="0" y="0.995117" width="88" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.302 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg></div>\
                ')
            },
            hideVideoPlayButton: function() {
                video.play()
                videoPlayButton.classList.add('is-hidden')
                video.classList.remove('has-media-controls-hidden')
                video.setAttribute('controls', 'controls')
            }
        }

        
    }

    
    videoMethods(document.getElementsByTagName('video')[0],document.getElementsByClassName('embed-play-action')[0]).renderVideoPlayButton();

    
    video.onpause = function() {
        // alert("The video has been paused");
        videoPlayButton.classList.remove('is-hidden')
        video.classList.add('has-media-controls-hidden')
    }
}


var $ = jQuery;

$(function() {
  if (!localStorage.getItem('post-login-disclaimer-closed')) {
    $('.post-login-disclaimer').removeClass('hidden');
  }

  $('.post-login-disclaimer .close-container').click(function() {
    localStorage.setItem('post-login-disclaimer-closed', '1');
    $('.post-login-disclaimer').addClass('hidden');
  });

  $('.view-az-internal-publications .custom-filters .publication-status[data-value="All"]').addClass('active');

  $(document).on('click', '.view-az-internal-publications .custom-filters .publication-status', function() {
    $('.view-az-internal-publications .view-filters [name="field_publication_status_value"]').val($(this).data('value'));
    $('.view-az-internal-publications .view-filters [type="submit"]').trigger('click');
    $('.view-az-internal-publications .custom-filters .publication-status').removeClass('active');
    $(this).addClass('active');
  });

  /*
  $(document).on('click', 'a.congresses-li', function() {
    if ($(this).parent().find('.menu-congresses').hasClass('hidden')) {
      $(this).parent().find('.menu-congresses').removeClass('hidden');
    } else {
      $(this).parent().find('.menu-congresses').addClass('hidden');
    }

    return false;
  });

  $(document).on('mouseleave', '.menu-congresses', function() {
    $('.menu-congresses').addClass('hidden');
  });

  document.addEventListener('scroll', function() {
    $('.menu-congresses').addClass('hidden');
  });

*/
// if($('li.congresses-li').length){
$("li.congresses-li").prepend('<em class="m-toggle-arrow" aria-expanded="true"></em>');

$(document).on('click', 'li.congresses-li .m-toggle-arrow', function() {
  if ($(this).parent().find('.menu-congresses').hasClass('is-show')) {
    $(this).removeClass('is-active');
    $(this).parent().find('.menu-congresses').removeClass('is-show');
  } else {
    $(this).addClass('is-active');
    $(this).parent().find('.menu-congresses').addClass('is-show');
  }

  return false;
});
// }


  $(document).ready(function() {
    $(".add-to-calendar").popover({
        html: true,
        content: function() {
            return $('#calendar-buttons').html();
        }
    });
  });
})

$(".custom-html-dropdown .dropdown-menu li .dropdown-item").click(function(){
  $('.custom-html-dropdown .dropdown-menu li .dropdown-item ').removeClass('active');
  $(this).addClass('active');
  $(this).parents(".custom-html-dropdown").find('.dropdown-input').html($(this).text() );
  $(this).parents(".custom-html-dropdown").find('.dropdown-input').val($(this).data('value'));
});