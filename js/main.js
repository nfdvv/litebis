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
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev-circle.svg" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next-circle.svg" alt="arrow-next"></button>',
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('.header__menu-btn').on('click', function(){
    $('.header__menu > ul').slideToggle();
  });

  $('.header__drop-down.drop-down').on('click', function(){
    $(this).children('.drop-down__list').slideToggle();
  });
});





