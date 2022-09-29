$(function(){
  $('.slider__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $('.news__inner').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev-circle.svg" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next-circle.svg" alt="arrow-next"></button>',
  });
});