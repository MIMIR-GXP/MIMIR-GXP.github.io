$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.top-page').addClass('active');
        } else {
            $('.top-page').removeClass('active');
        }
    });
});