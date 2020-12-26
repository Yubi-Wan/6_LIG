$(function()
    {$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    });
});

$(document).ready(function() {
    var pagetop = $('.footer_btn');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});
    