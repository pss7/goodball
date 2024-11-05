$(function () {

  /* 스크롤 */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
      $('#aside').addClass('active');
    } else {
      $('#aside').removeClass('active');
    }
  });

  /* 클릭 시 위치 이동 */
  $("#aside a").click(function () {
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 600);
  });

  $('.programListBox .slick').slick({
    variableWidth: true,
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 2,
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

  /* 스튜디오-검색 */
  $('.studioWrap .searchBox .searchList > .box > a').click(function () {

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }

    return false;

  });

});