$(function () {

    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 && $('#toggle').hasClass('active') === false ) {
            $('.top-page').addClass('active');
        } else {
            $('.top-page').removeClass('active');
        }
    });

    $('#toggle').click(function(){
        if( $('#toggle').hasClass('active') )  { 
        $('#toggle').removeClass('active');
     } 
     else { 
        $('#toggle').addClass('active');
        $('.top-page').removeClass('active');
     }
     });

     // Button Menu - open & close

     $(document).ready(function() {
        $('.close').addClass('active')
     });

     $('.open').click(function(){
        $('.open').addClass('active')
        if ( $('.open').hasClass('active') )  { 
            $('.close').removeClass('active');
        }
        else {
            $('.close').addClass('active');
        }
     });

     $('.close').click(function(){
        $('.close').addClass('active')
        if ( $('.close').hasClass('active') )  { 
            $('.open').removeClass('active');
        }
     });

});