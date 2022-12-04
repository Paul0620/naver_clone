// var currentScroll = 0;

$(window).scroll(function () {
  // 스크롤 값 240 - header fixed 검색바로 변환
  var scroll = $(window).scrollTop();

  if (scroll >= 240) {
    $(".header").addClass("fixed-header");
    $(".nav").addClass("nav-none");
    $(".main").addClass("main-mt");
  } else {
    $(".header").removeClass("fixed-header");
    $(".nav").removeClass("nav-none");
    $(".main").removeClass("main-mt");
  }

  // console.log($(window).scrollTop());
});
