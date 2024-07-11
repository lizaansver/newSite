$(function () {


  $(".header__slider").slick({
    infinite: true,
    speed: 700,
    fade: true,
    prevArrow: '<img class="slider-arrows s-a_left" src="images/arrow-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows s-a_right" src="images/arrow-right.svg" alt=""></img>',
    asNavFor: ".slider-dots",
  });

  $(".slider-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
  });

  $(".surf-slider").slick({
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows s-a_left sl_arrows sl_ar-l" src="images/arrow-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows s-a_right sl_arrows" src="images/arrow-right.svg" alt=""></img>',
    asNavFor: ".slider-map",
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint:940,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint:700,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows:false,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint:1025,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint:940,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint:700,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $(".holder__slider, .shop__slider").slick({
    speed: 700,
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows s-a_left sl_arrows arr-holder_left sl_ar-l" src="images/arrow-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows s-a_right sl_arrows arr-holder" src="images/arrow-right.svg" alt=""></img>',
    focusOnSelect: true,
  });

  $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() { // это аналог forEach
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    const work = () =>{
      const summ = $('.slick-current.slick-active .nights').val() * $('.slick-current.slick-active .money').data('nights') + ($('.slick-current.slick-active .guests').val() -1) * $('.slick-current.slick-active .money').data('guests');
      $('.money').html('$'+ summ + ' USD')
    }

    work();
    $('.quantity-button').on('click', () => work());

    $(".holder__slider, .shop__slider").on("afterChange", () => work()); //дополнительное событие слика после изменения активного слайда грубо говоря ПЛЮС ФУНКЦИЮ МЫ ВПИСАЛИ ВНУТРЬ ибо потом был потерян контекст, дело в this (this это квентити)
  });

 $('.surfboard__box__circle').on('click', function(){
  $(this).toggleClass('active') // surfboard__box__circle при клике добавляется класс active!!
 })
 
 $('.menu__btn').on('click', function (){
  $(this).toggleClass('active')
  $('.menu').toggleClass('active')
 })


});


