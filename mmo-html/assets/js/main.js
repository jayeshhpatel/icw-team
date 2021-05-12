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
});