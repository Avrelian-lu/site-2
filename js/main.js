$(function () {
  $(".offer__slider").slick({
    prevArrow:
      '<button type="button" class="offer__slick-prev offer__slick-btn"><img src="images/btn-arrow.png" alt=""></button>',
    nextArrow:
      '<button type="button" class="offer__slick-next offer__slick-btn"><img src="images/btn-arrow.png" alt=""></button>',

    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".news__slider-inner").slick({
    prevArrow:
      '<button type="button" class="news__slick-prev offer__slick-btn"><img src="images/slick-arr.png" alt=""></button>',
    nextArrow:
      '<button type="button" class="news__slick-next offer__slick-btn"><img src="images/slick-arr.png" alt=""></button>',
    arrows: true,
    infinite: false,
  });
  $('.menu__btn').on('click', function(){
$('.header__menu').slideToggle();
  })
});
