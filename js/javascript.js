$(document).ready(function() {
    $('.frame-client').slick({
        dots: true,
        arrows: false
    })
    $('.contracts-small-mobile').click(function() {
        $('.nav-menu').toggleClass('show');
    })
});