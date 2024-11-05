$(function () {

  $('.noticeLink .slick').slick({
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 2500,
    speed: 1000,
    draggable: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1
        }
      }
    ]

  });

});

/* aos */
$(window).load(function () {
  AOS.init({
    duration: 1500
  });

});