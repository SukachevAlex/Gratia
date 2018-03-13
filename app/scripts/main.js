$(document).ready(function() {

    $(".header-slider-js").slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.header-slider__prev',
        nextArrow: '.header-slider__next',
        adaptiveHeight: true
    });

});