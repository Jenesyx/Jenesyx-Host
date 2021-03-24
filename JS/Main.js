function Onload() 
{
    var typed = new Typed('#typing', {
        strings: ["Your Self", "Your Life", "Your Family", "Your Friends", "Your Time"],
        typeSpeed: 70,
        loop: true,
        startDelay: 2000,
        backSpeed: 30
    });
    
    $('.example-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 500,
        autoplay: true,
        centerMode: false,
        dots: true,
    });
}